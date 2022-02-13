import React, { useEffect, useState } from 'react';
import { actions, searchItems} from '../../state/actions';
import { connect } from 'react-redux';
import { AppState } from '../../state/reducers';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = (props:any) => {
    const {searchResults , loadSearchResults, setSelectedItem} = props;
    const [searchString, setSearchString] = useState('');
    const [keyPressed, setKeyPressed] = useState('');
    const navigate = useNavigate();

    const showDetails = (item:any) => {
        setSelectedItem(item);
        navigate('/details');
    } 

    useEffect(() => {
        if(keyPressed !== 'Enter') return;
        const doSearch = async() => await searchItems(searchString, loadSearchResults);
        doSearch();
    }, [keyPressed]);
   
    return (
        <div className="home-container">
            <h1>Enter a keyword search and tap enter or press enter to start search</h1>
            <div className="home-container__header">
                <input role="search-input" type="text" onChange={e => setSearchString(e.target.value)} onKeyUp={e => setKeyPressed(e.code)}></input>
                <input role="search-action" type="button" value="Search" onClick={() => searchItems(searchString, loadSearchResults)}></input>
            </div>
            <div role="search-result" className="home-container__body">
                {
                    searchResults.map((r:any) => 
                        <div key={r.title} className='body__item' onClick={() => showDetails(r)}>
                            <div className='item__img'>
                                <img src={r.photo}></img>
                            </div>
                            <div className='item__description'>
                                <h3>{r.title}</h3>
                                <p>{r.shortDescription}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state:AppState) => {
    return {
        searchResults: state.searchResult
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        loadSearchResults: (searchResults:Array<any>) => dispatch({ type:actions.SEARCH, payload:searchResults}),
        setSelectedItem: (selectedItem:any) => dispatch({ type:actions.SELECT_SEARCH_ITEM, payload:selectedItem})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
