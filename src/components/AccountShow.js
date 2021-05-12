import React from 'react' 



const Account = (props) => {


    return (
        <li>
            {props.account.name} - {props.account.balance}
        </li>
    )



}

export default Account