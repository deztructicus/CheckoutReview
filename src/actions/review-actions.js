export const ADD_REVIEW = "ADD_REVIEW";

export const addReview = (name, email, rating, title, comment, date, img) => {

    return {
        type: ADD_REVIEW,
        review: { name, email, rating, title, comment, date, img }
    }

}