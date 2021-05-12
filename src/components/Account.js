import React from 'react' 
import {Redirect} from 'react-router-dom'



const Account = (props) => {

    let account = props.accounts[props.match.params.id - 1 ]
    
    console.log(account)

    return (
        <li>
            {/* {account ? null : <Redirect to='/accounts'/>} */}
            {account ? account.name : null} - {account ? account.balance : null}
        </li>
    )



}

export default Account