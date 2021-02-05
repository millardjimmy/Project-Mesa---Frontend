// ALREADY EXISTING USER
export const /*FUNCTION*/ loginUser = (username, password) => {
    return /*FUNCTION*/ (dispatch) => { 
      dispatch({ type: 'AUTHENTICATING_USER' })
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/login`, { //TODO: move this to an adapter
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      })
        .then(response => {
          if (response.ok) {
            return response.json()
          } else {
            throw response
          }
        })
        .then(JSONResponse => {
          // debugger
          console.log('%c INSIDE YE OLDE .THEN', 'color: navy')
          localStorage.setItem('jwt', JSONResponse.jwt)
          dispatch({ type: 'SET_CURRENT_USER', payload: JSONResponse.user })
        })
        .catch(r => r.json().then(e => dispatch({ type: 'FAILED_LOGIN', payload: e.message })))
        
    }
  }

  export const fetchCurrentUser = () => {
    // takes the token in localStorage and finds out who it belongs to
    return (dispatch) => {
      dispatch(authenticatingUser()) //tells the app we are fetching
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/profile`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
        .then(response => response.json())
        .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
    }
  }
  
  export const setCurrentUser = (userData) => ({
    type: 'SET_CURRENT_USER',
    payload: userData
  })
  
  export const failedLogin = (errorMsg) => ({
    type: 'FAILED_LOGIN',
    payload: errorMsg
  })
  
  // tell our app we're currently fetching
  export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
  

  export const logoutUser = () => ({ type: 'LOGOUT_USER' })

// SIGN UP USER
export const signUpUser = (username, password) => {
	return (dispatch) => {
	  const data = { user: {username, password} }
	    fetch(`${process.env.REACT_APP_API_ENDPOINT}/users`,{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
	    .then(res => {
		    localStorage.setItem('jwt', res.jwt)
		    dispatch({ type: "SET_CURRENT_USER", payload: res.user})
	     })
	  }
  }