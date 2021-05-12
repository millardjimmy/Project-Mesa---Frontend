import React from 'react' 
import Account from './Account'
import {Route, Link} from 'react-router-dom'


const Accounts = (props) =>  {

    return (
        <div><p>
            Account List:
            </p>
            {props.accounts.map(account => 
            <li key={account.id}> 
                <Link to={`/accounts/${account.id}`}> {account.name} </Link> 
            </li> )}
        </div>
    )

}


export default Accounts