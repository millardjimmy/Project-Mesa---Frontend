import React from 'react' 
import Account from './AccountShow'


const Accounts = (props) =>  {

    return (
        <div><p>
            Account List:
            </p>
            {props.accounts.map(account => 
            <div key={account.id}> <Account account={account}/> </div> )}
        </div>
    )

}


export default Accounts