import { render, screen } from "@testing-library/react";
import Home from './Home';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from '../../state/reducers';
import { BrowserRouter } from "react-router-dom";


describe('<home> after load', () => {

    const initialState = {
        searchResult: []
    }

    const store = createStore(reducers, initialState); 

    test('should show input, button and results elements', async() => {
        // arrange
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <Home/>
                </BrowserRouter>
            </Provider>
        );

        // act
        const input = await screen.findByRole('search-input');
        const button = await screen.findByRole('search-action');
        const results = await screen.findByRole('search-result');

        // assert
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(results).toBeInTheDocument();
    });
});


