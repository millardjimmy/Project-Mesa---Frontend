// ONCE I HAVE LOG IN WILL NOT HARD CODE USERID

const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
}

const userReducer = (state=initialState, action) => {

  switch (action.type) {

    case 'SET_CURRENT_USER':
     return { ...state, user: action.payload, loggedIn: true, authenticatingUser: false }
   case 'AUTHENTICATING_USER': //tells the app we're fetching
     return { ...state, authenticatingUser: true }
   case 'AUTHENTICATED_USER':
     return { ...state, authenticatingUser: false }
   case 'FAILED_LOGIN': //for error handling
     return {
       ...state,
       failedLogin: true,
       error: action.payload,
       authenticatingUser: false
     }

    default:
      return state;

  }

}

export default userReducer;