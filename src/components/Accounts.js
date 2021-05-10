import React from 'react' 


const Accounts = (props) =>  {

    return (
        <div><p>
            a list under here but it isn't fetching outside of my machine
            </p>
            {props.accounts.map(account => <li>{account.name} - {account.balance} </li> )}
        </div>
    )

}


export default Accounts