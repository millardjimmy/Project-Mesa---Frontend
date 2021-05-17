// updates store - takes in state, runs action, updates depending on action type, essenstially a function

export default function accountReducer(state = {accounts: []}, action) {

    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}
        case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}
        case 'ADD_TRANSACTION':
            let accounts = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: accounts}
        
        default:
            return state
    }
}