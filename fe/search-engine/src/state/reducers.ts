import { Action, actions } from "./actions";

export interface AppState {
    searchString: string,
    searchResult: Array<any>,
    selectedResult: any
}

const initialState : AppState = {
    searchString: '',
    searchResult: [],
    selectedResult: {}
}

const appReducer  = (state : AppState = initialState, action: Action) => {
    switch(action.type) {
        case actions.SEARCH: {
            return {
                ...state,
                searchResult: action.payload
            }
        }
        case actions.SELECT_SEARCH_ITEM: {
            return {
                ...state,
                selectedResult: action.payload
            }
        }
        default: return state
    }
}

export default appReducer;