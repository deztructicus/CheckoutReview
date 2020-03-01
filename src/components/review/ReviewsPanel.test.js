import React from 'react';
import { render } from '@testing-library/react';
import ReviewsPanel from './ReviewsPanel';

describe('actions', () => {

    test('ReviewsPanel doesnt crash with no props', () => {
        render(<ReviewsPanel />);
    });


    test('ReviewsPanel doesnt crash when passed props', () => {

        const stubReviews = [{
            title: "Very impressed",
            name: "Bill Gates",
            email: "billy.G@microsoft.com",
            rating: 5,
            date: "Feb 27 2019",
            comment: "Wow this website is incredibly professional! I'm very very happy and willing to invest in totallyNotCheckout.com! Here's my checkbook, go buy yourself some new servers!"
        }];

        render(<ReviewsPanel reviews={stubReviews} />);
    });

});
