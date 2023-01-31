const defaultState = {
    customers: []
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {

        case "SET_CUSTOMERS":
            return {...state, customers: action.customers}

        default:
            return state
    }
}