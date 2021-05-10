// updates store - takes in state, runs action, updates depending on action type, essenstially a function

export default function accountReducer(state = {accounts: []}, action) {

    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}
        default:
            return state



    }
}