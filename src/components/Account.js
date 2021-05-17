import React from 'react' 
import {Redirect} from 'react-router-dom'
import TransactionContainer from '../containers/TransactionsContainer'



const Account = (props) => {

    // let account = props.accounts[props.match.params.id - 1 ]

    let account = props.accounts.filter(account => account.id == props.match.params.id)[0]
    
    console.log(account)

    return (
        <div>
            <h2>
                {/* {account ? null : <Redirect to='/accounts'/>} */}
                {account ? account.name : null} - {account ? account.balance : null}
            </h2>
                <TransactionContainer account={account}/>
        </div>
    )



}

export default Account