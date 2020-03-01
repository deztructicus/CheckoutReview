import React from 'react';
import configureStore from 'redux-mock-store';
import ReviewHistory from './ReviewHistory';
import { render } from '@testing-library/react';
const mockStore = configureStore([]);

describe('Review History Component', () => {

    test('Renders Component with no props', () => {

        const store = mockStore({
            reviews: []
        });

        const { container, getByText } = render(<ReviewHistory store={store} />);

        const ratingsWidget = container.querySelector('div[id="ratingsWidget"]');

        expect(ratingsWidget).toBeNull();
        expect(getByText('No Ratings')).toBeInTheDocument();
    });

    test('Renders Component when props are passed', () => {

        const reviews = [
            {
                title: "Very impressed",
                name: "Bill Gates",
                email: "billy.G@microsoft.com",
                rating: 5,
                date: "Feb 27 2019",
                comment: "Wow this website is incredibly professional! I'm very very happy and willing to invest in totallyNotCheckout.com! Here's my checkbook, go buy yourself some new servers!"
            }];

        const reviewStats = {
            averageRating: 5,
            rated5: 1
        }

        const store = mockStore({reviews, reviewStats});

        const { container, getByText} = render(<ReviewHistory store={store} />);

        const ratingsWidget = container.querySelector('div[id="ratingsWidget"]');
              
        expect(ratingsWidget).not.toBeNull();
        expect(getByText('Bill Gates')).toBeInTheDocument();
    });
});