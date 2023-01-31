const defaultState = {
    cash: 0
}

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {

        case "SET_CASH":
            return {...state, cash: action.cash}

        default:
            return state
    }
}