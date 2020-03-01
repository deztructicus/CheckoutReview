import React from 'react';
import dateFormat from 'dateformat';
import defaultImg from 'res/photos/defaultImg.png';
import { Row, Col } from 'react-bootstrap';
import Rating from 'components/common/Rating';

const ReviewWidget = (props) => {
    const { title, name, rating, date, comment, img } = { ...props };
    return (
        <div className="widget">
            <div className="widget-header">
                <Row>
                    <Col md={2} lg={1} xs={2}>
                        <img src={img || defaultImg} className="avatar" alt={`${name}'s avatar`} />
                    </Col>
                    <Col md={10} lg={11} xs={9}>

                        <div><span className="emphasize">{name}</span> </div>
                        <div>
                            <Rating rating={rating} readonly />
                        </div>
                        <h6>
                            Reviewed on {dateFormat(date, "fullDate")}
                        </h6>
                    </Col>
                </Row>
            </div>
            <div className="widget-body">
                <h5>{title}</h5>
                {comment}
            </div>

        </div>);
}

const ReviewsPanel = (props) => {


    const { reviews = [] } = { ...props };

    const ReviewWidgets = [];


    reviews.forEach((review, i) => {
        ReviewWidgets.push(<ReviewWidget name={review.name} date={review.date} title={review.title} rating={review.rating} comment={review.comment} img={review.img} key={i} />);
    });

    return ReviewWidgets;
}

export default ReviewsPanel;