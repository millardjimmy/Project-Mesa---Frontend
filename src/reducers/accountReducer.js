// updates store - takes in state, runs action, updates depending on action type, essenstially a function

export default function accountReducer(state = {accounts: []}, action) {

    return action.payload

}