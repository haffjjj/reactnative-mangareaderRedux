const initialState = {
    data: [],
    dataSearch: [],
    // bookmarks: [],
    startPage: 0,
    isLoading: false,
    isFailed: false,
}

const browseReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'GET_MANGAS_PENDING':
        return {
            ...state, 
            isLoading: true, 
            isFailed: false
        }
        case 'GET_MANGAS_FULFILLED':
        return {
            ...state, 
            isLoading: false, 
            isFailed: false, 
            data: state.data.concat(action.payload.data.data),
            startPage: state.startPage + 15
        }
        case 'GET_MANGAS_REJECTED':
        return {
            ...state, 
            isLoading: false, 
            isFailed: true
        }
        case 'GET_MANGAS_RESET':
        return initialState

        case 'SEARCH_MANGA_PENDING':
        return {
            ...state,
            isLoading: true, 
            isFailed: false
        }
        case 'SEARCH_MANGA_FULFILLED':
        return {
            ...state,
            isLoading: false, 
            isFailed: false,
            dataSearch: action.payload.data.data
        }
        case 'SEARCH_MANGA_REJECTED':
        return {
            ...state,
            isLoading: false, 
            isFailed: true
        }

        default:
        return state
    }
}

export {browseReducer}