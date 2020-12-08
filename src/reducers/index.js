const initialState = {
    dataURL: '',
    persons: [],
    cardInfo: [],
    loading: true,
    cardDisplay: false,
    error: false,
    form: false,
    button: false,
    addNewUserError: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BIG_DATA':
            return {
                ...state,
                dataURL: action.payload
            }
        case 'SMALL_DATA':
            return {
                ...state,
                dataURL: action.payload
            }
        case 'ADD_DATA':
            return {
                ...state,
                persons: action.payload,
                loading: false
            }
        case 'LOADING_DATA':
            return {
                ...state,
                loading: action.payload
            }
        case 'ADD_CARD_INFO':
            return {
                ...state,
                cardInfo: action.payload
            }
        case 'SHOW_CARD':
            return {
                ...state,
                cardDisplay: true
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'FORM':
            return {
                ...state,
                form: action.payload
            }
        case 'BUTTON':
            return {
                ...state,
                button: true
            }
        case 'ADD_NEW_USER':
            return {
                ...state,
                persons: [action.payload, ...state.persons]
            }
        case 'NEW_USER_ERROR':
            return {
                ...state,
                addNewUserError: action.payload
            }
        default:
            return state;
    }
};

export default reducer;