import { search } from "../services/search"

export const actions = {
    SEARCH : 'SEARCH',
    SELECT_SEARCH_ITEM: 'SELECT_SEARCH_ITEM'
}

export interface Action {
    type: string,
    payload: any
}

export const searchItems = async (searchKey: string, loadResults: any) => {
    const searchResult = await search(searchKey);
    searchResult.data && loadResults(searchResult.data);
}