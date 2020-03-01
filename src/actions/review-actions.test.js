import * as actions from './review-actions'

describe('actions', () => {
    test('Test create review action', () => {

        const name = "Zee";
        const email = "dmazino@gmail.com";
        const rating = 5;
        const title = "hi im title";
        const comment = "This is good";
        const date = new Date();
        const review = { name, email, rating, title, comment, date };

        const expectedAction = {
            type: actions.ADD_REVIEW,
            review: review
        }
        
        expect(actions.addReview(name, email, rating, title, comment, date)).toEqual(expectedAction)
    });

});