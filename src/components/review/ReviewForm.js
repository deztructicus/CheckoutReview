import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import { addReview } from 'actions/review-actions';
import { connect } from 'react-redux';
import Rating from 'components/common/Rating';
import { Formik } from 'formik';
import * as Yup from 'yup';

function ReviewForm(props) {

    // Schema for yup
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, "*Names must have at least 2 characters")
            .max(100, "*Names can't be longer than 50 characters")
            .required("*Name is required"),
        title: Yup.string()
            .min(2, "*Title must have at least 2 characters")
            .max(100, "*Title can't be longer than 100 characters")
            .required("*Title is required"),
        email: Yup.string()
            .email("*Must be a valid email address")
            .max(100, "*Email must be less than 100 characters")
            .required("*Email is required"),
        comments: Yup.string()
            .max(500, "*Your review must not be longer than 500 characters")
            .min(5, "*Comments must be longer than 5 characters")
            .required("*Comments are required"),
        rating: Yup.number()
            .max(5, "*You can't rate higher than 5 stars")
            .min(1, "*Please select a rating")
            .required("*Rating required")
    });

    return (
        <div className="panel">
            <Container>
                <Row>
                    <Col md={12}>

                        <Formik initialValues={{ name: "", email: "", rating: 0, title: "", comments: "" }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                // When button submits form and form is in the process of submitting, submit button is disabled
                                setSubmitting(true);

                                props.addReview(values.name, values.email, values.rating, values.title, values.comments, new Date());

                                // Resets form after submission is complete
                                resetForm();

                                // Sets setSubmitting to false after form is reset
                                setSubmitting(false);
                            }}

                            validationSchema={validationSchema}>
                            {/* Callback function containing Formik state and helpers that handle common form actions */}
                            {({ values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                setFieldValue,
                                isSubmitting }) => (
                                    <Form onSubmit={handleSubmit}>
                                        <FadeIn>
                                            <Form.Group as={Row} controlId="formReviewName">
                                                <Form.Label column md="1">
                                                    Name
                                                </Form.Label>
                                                <Col md="4">
                                                    <Form.Control
                                                        placeholder="Enter name"
                                                        type="text"
                                                        name="name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.name}
                                                        className={touched.name && errors.name ? "error" : null}
                                                    />
                                                    <Form.Group as={Row}>
                                                        {touched.name && errors.name ? (

                                                            <Col md="12">
                                                                <div className="error-message" id="nameErrorMsg">{errors.name}</div>
                                                            </Col>
                                                        ) : null}
                                                    </Form.Group>
                                                </Col>

                                            </Form.Group>
                                            <Form.Group as={Row} controlId="formReviewEmail">
                                                <Form.Label column md="1">
                                                    Email
                                                </Form.Label>
                                                <Col md="4">
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        placeholder="Enter email"
                                                        className={touched.email && errors.email ? "error" : null}
                                                    />
                                                    <Form.Group as={Row}>
                                                        {touched.email && errors.email ? (

                                                            <Col md="12">
                                                                <div className="error-message" id="emailErrorMsg">{errors.email}</div>
                                                            </Col>
                                                        ) : null}
                                                    </Form.Group>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="formReviewRating">
                                                <Form.Label column md="1">
                                                    Rating
                                                </Form.Label>
                                                <Col md="4">
                                                    <Rating large rating={values.rating} name="rating" onChange={(rating) => setFieldValue("rating", rating)} />
                                                    <Form.Group as={Row}>
                                                        {touched.rating && errors.rating ? (

                                                            <Col md="12">
                                                                <div className="error-message" id="ratingErrorMsg">{errors.rating}</div>
                                                            </Col>
                                                        ) : null}
                                                    </Form.Group>
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} controlId="formReviewTitle">
                                                <Form.Label column md="1">
                                                    Title
                                                </Form.Label>
                                                <Col md="4">

                                                    <Form.Control
                                                        placeholder="Title for your review"
                                                        type="text"
                                                        name="title"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.title}
                                                        className={touched.title && errors.title ? "error" : null}
                                                    />
                                                    <Form.Group as={Row}>
                                                        {touched.title && errors.title ? (

                                                            <Col md="12">
                                                                <div className="error-message" id="titleErrorMsg">{errors.title}</div>
                                                            </Col>
                                                        ) : null}
                                                    </Form.Group>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="formReviewCommentBox">
                                                <Col sm="12">
                                                    <Form.Control
                                                        as="textarea"
                                                        rows="5"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        name="comments"
                                                        placeholder="Comments"
                                                        value={values.comments}
                                                        className={touched.comments && errors.comments ? "error" : null}
                                                    />
                                                    <Form.Group as={Row}>
                                                        {touched.comments && errors.comments ? (

                                                            <Col md="12">
                                                                <div className="error-message"  id="commentsErrorMsg">{errors.comments}</div>
                                                            </Col>
                                                        ) : null}
                                                    </Form.Group>
                                                </Col>
                                            </Form.Group>


                                            <div className="text-right">
                                                <Button variant="primary" type="submit" disabled={isSubmitting}>Add Review</Button>
                                            </div>
                                        </FadeIn>
                                    </Form>
                                )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const mapActionsToProps = (dispatch) => {

    return {
        addReview: (name, email, rating, title, comment, date, img) => {
            dispatch(addReview(name, email, rating, title, comment, date, img));
        }
    }
}

export default connect(null, mapActionsToProps)(ReviewForm);