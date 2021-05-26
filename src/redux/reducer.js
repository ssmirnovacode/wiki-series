const initialState = {
    items: [],
    query: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_ITEMS':
            return ({
                ...state,
                items: action.payload
            })
        case 'SET_QUERY':
            return ({
                ...state,
                query: action.payload
            })

        default:
            return state;
    }
}

export default reducer;