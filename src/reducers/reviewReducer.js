
import { ADD_REVIEW } from '../actions/review-actions';

const defaultState = {
    reviews: [],
    reviewStats: {
        averageRating: 0,
    }
}

const rootReducer = (state = defaultState, action) => {

    const reviews = state.reviews;

    switch (action.type) {
        case ADD_REVIEW:
            reviews.unshift(action.review);
            break;

        default: break;
    }

    // Extract stats based from Review
    const groupByRating = reviews.reduce((stats, review) => {
        stats["rated" + review.rating] = stats["rated" + review.rating] + 1 || 1;
        stats.sum = (stats.sum || 0) + review.rating;
        return stats;
    }, {});

    // calculate average if theres at least 1 rating. If none, set average to zero
    let averageRating = reviews.length > 0 ? groupByRating.sum / reviews.length : 0;

    // Clear sum variable as its no longer needed
    delete groupByRating.sum;

    return {
        ...state,
        reviews,
        reviewStats: { ...groupByRating, averageRating }
    };
}

export default rootReducer;