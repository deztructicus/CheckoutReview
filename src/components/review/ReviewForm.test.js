import React from 'react';

import { render, wait, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import ReviewForm from './ReviewForm';


describe('ReviewForm Component', () => {
    let store;
    let reviewFormDOM;
    const mockStore = configureStore([]);

    beforeEach(() => {
        store = mockStore({});

        // Initialize component
        const { container } = render(<ReviewForm store={store} />);

        reviewFormDOM = container;
    });

    test('should show error messages if no values submitted', async () => {

        const submit = reviewFormDOM.querySelector('button[type="submit"]');

        // Simulate submission
        await wait(() => {
            fireEvent.click(submit);
        });

        // Error placeholders
        let nameError = reviewFormDOM.querySelector('div[id="nameErrorMsg"');
        let emailError = reviewFormDOM.querySelector('div[id="emailErrorMsg"');
        let titleError = reviewFormDOM.querySelector('div[id="titleErrorMsg"');
        let ratingError = reviewFormDOM.querySelector('div[id="ratingErrorMsg"');
        let commentsError = reviewFormDOM.querySelector('div[id="commentsErrorMsg"');

        // validate messages
        expect(nameError.innerHTML).toBe("*Name is required");
        expect(emailError.innerHTML).toBe("*Email is required");
        expect(titleError.innerHTML).toBe("*Title is required");
        expect(ratingError.innerHTML).toBe("*Please select a rating");
        expect(commentsError.innerHTML).toBe("*Comments are required");
    });


    test('Should show error when there are not enough characters', async () => {

        const name = reviewFormDOM.querySelector('input[name="name"]');
        const email = reviewFormDOM.querySelector('input[name="email"]');
        const title = reviewFormDOM.querySelector('input[name="title"]');
        const comments = reviewFormDOM.querySelector('textarea[name="comments"]');

        const submit = reviewFormDOM.querySelector('button[type="submit"]');

        // set to value below threshhold
        await wait(() => {

            // error if less than 2 char
            fireEvent.change(name, {
                target: {
                    value: "a"
                }
            });

            fireEvent.change(title, {
                target: {
                    value: "a"
                }
            });

            fireEvent.change(email, {
                target: {
                    value: "notAValidEmail"
                }
            });

            // error if less than 5 chars
            fireEvent.change(comments, {
                target: {
                    value: "done"
                }
            });
        })

        await wait(() => {
            fireEvent.click(submit);
        });

        // Error components
        let nameError = reviewFormDOM.querySelector('div[id="nameErrorMsg"');
        let emailError = reviewFormDOM.querySelector('div[id="emailErrorMsg"');
        let titleError = reviewFormDOM.querySelector('div[id="titleErrorMsg"');
        let commentsError = reviewFormDOM.querySelector('div[id="commentsErrorMsg"');

        expect(nameError.innerHTML).toBe("*Names must have at least 2 characters");
        expect(emailError.innerHTML).toBe("*Must be a valid email address");
        expect(titleError.innerHTML).toBe("*Title must have at least 2 characters");
        expect(commentsError.innerHTML).toBe("*Comments must be longer than 5 characters");
    });

    test("The form should submit with valid inputs", async () => {

        const name = reviewFormDOM.querySelector('input[name="name"]');
        const email = reviewFormDOM.querySelector('input[name="email"]');
        const title = reviewFormDOM.querySelector('input[name="title"]');
        const comments = reviewFormDOM.querySelector('textarea[name="comments"]');

        const submit = reviewFormDOM.querySelector('button[type="submit"]');

        // set to value below threshhold
        await wait(() => {

            // error if less than 2 char
            fireEvent.change(name, {
                target: {
                    value: "Json"
                }
            });

            fireEvent.change(title, {
                target: {
                    value: "Bourne"
                }
            });

            fireEvent.change(email, {
                target: {
                    value: "json.bourne@gmail.com"
                }
            });

            // error if less than 5 chars
            fireEvent.change(comments, {
                target: {
                    value: "Hi, my name is Json bourne and I believe this is an amazing test."
                }
            });
        })

        await wait(() => {
            fireEvent.click(submit);
        });


        // Error components
        let nameError = reviewFormDOM.querySelector('div[id="nameErrorMsg"');
        let emailError = reviewFormDOM.querySelector('div[id="emailErrorMsg"');
        let titleError = reviewFormDOM.querySelector('div[id="titleErrorMsg"');
        let commentsError = reviewFormDOM.querySelector('div[id="commentsErrorMsg"');

        expect(nameError).toBe(null);
        expect(emailError).toBe(null);
        expect(titleError).toBe(null);
        expect(commentsError).toBe(null);
    });
});