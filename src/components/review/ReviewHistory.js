import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import FadeIn from 'react-fade-in';
import { connect } from 'react-redux';
import Rating from 'components/common/Rating';
import ReviewsPanel from './ReviewsPanel';

class ReviewHistory extends Component {

    render() {

        let { reviewStats, reviews = [] } = { ...this.props };
        let { averageRating = 0, rated5 = 0, rated4 = 0, rated3 = 0, rated2 = 0, rated1 = 0 } = { ...reviewStats };

        rated5 = Math.round((rated5 / reviews.length) * 100);
        rated4 = Math.round((rated4 / reviews.length) * 100);
        rated3 = Math.round((rated3 / reviews.length) * 100);
        rated2 = Math.round((rated2 / reviews.length) * 100);
        rated1 = Math.round((rated1 / reviews.length) * 100);

        return (
            <div className="panel">
                <Container>
                    <FadeIn>
                        <Row>
                            <Col md={5} lg={4} xl={3} >


                                {(averageRating === 0 ?
                                    <div className="widget has-shadow" id="noRatingsWidget">
                                        <div className="widget-header">

                                            <h2>Customer Reviews</h2>
                                            <p>No Ratings</p>
                                        </div>
                                    </div>
                                    :
                                    <div className="widget has-shadow" id="ratingsWidget">
                                        <div className="widget-header">

                                            <h2>Customer Reviews</h2>
                                            <h2><Rating large rating={averageRating} readonly /></h2>
                                            <p>{Number.parseFloat(averageRating).toPrecision(2)} out of 5</p>
                                            <p>Based on {reviews.length} buyer rating(s)</p>
                                        </div>
                                        <div className="widget-body">
                                            <Row>
                                                <Col md={4}>5 Star</Col>
                                                <Col><Progress percent={rated5} /></Col>
                                            </Row>
                                            <Row>
                                                <Col md={4}>4 Star</Col>
                                                <Col><Progress percent={rated4} /></Col>
                                            </Row>
                                            <Row>
                                                <Col md={4}>3 Star</Col>
                                                <Col><Progress percent={rated3} /></Col>
                                            </Row>
                                            <Row>
                                                <Col md={4}>2 Star</Col>
                                                <Col><Progress percent={rated2} /></Col>
                                            </Row>
                                            <Row>
                                                <Col md={4}>1 Star</Col>
                                                <Col><Progress percent={rated1} /></Col>
                                            </Row>
                                        </div>
                                    </div>)}
                            </Col>
                            <Col md={7} lg={8} xl={9} className="widget has-shadow">
                                {/* Begin Comment Widget */}
                                <FadeIn>
                                    <ReviewsPanel reviews={reviews} />
                                </FadeIn>
                            </Col>
                        </Row>
                    </FadeIn>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reviews: state.reviews,
        reviewStats: state.reviewStats
    }
}

export default connect(mapStateToProps)(ReviewHistory);