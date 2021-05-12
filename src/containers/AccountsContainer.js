import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountShow from '../components/Account'
import AccountInput from '../components/AccountInput'


class AccountsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchAccounts()
    }



    render () {

        return (

            <div>
                <Switch>
                    <Route path='/accounts/new' component={AccountInput} />
                    <Route path='/accounts/:id' render={(routerProps) => <AccountShow {...routerProps} accounts={this.props.accounts}/> } />
                    <Route exact path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/> } />
                </Switch>
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