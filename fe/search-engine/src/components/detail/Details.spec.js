import { render, screen } from "@testing-library/react";
import Details from './Detail';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from '../../state/reducers';
import { BrowserRouter } from "react-router-dom";

describe('<Details> after load', () => {

    const initialState = {
        selectedResult: {
            title: 'title'
        }
    }

    const store = createStore(reducers, initialState); 

    test('should show input, button header components', async() => {
        // arrange
        render(
        <Provider store={store}>
            <BrowserRouter>
                <Details/>
            </BrowserRouter>
        </Provider>);

        // act
        const navigation = await screen.findByRole('navigation');
        const detailsSection = await screen.findByRole('details');

        // assert
        expect(navigation).toBeInTheDocument();
        expect(detailsSection).toBeInTheDocument();
    });
});