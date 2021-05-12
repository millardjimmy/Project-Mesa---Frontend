import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountInput from '../components/AccountInput'


class AccountsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchAccounts()
    }



    render () {

        return (

            <div>
                <Route path='/accounts/new' component={AccountInput} />
                <Route path='/accounts' render={Accounts accounts={this.props.accounts}} />
                
            </div>
        )
    }

    // render takes in a function 


}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)