import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureCard from '../Card/Card';
import returnsSVG from '../../images/boomerang.png';
import paymentSVG from '../../images/svgs/wallet_aym5.svg';
import trackingSVG from '../../images/svgs/growing_qwt2.svg';

const FeatureSection = () => {
    const features = [
        {
            img: returnsSVG,
            title: 'Returns After Harvest',
            body: 'The one-off funding yields over a hundred percent returns on a long term. Farm sponsors are rewarded year by year after harvest which is continuing within the ten years’ project lifecycle.'
        },
        {
            img: paymentSVG,
            title: 'Payment',
            body: 'Farm projects are funded from a debit card, via internet banking and by bank deposit. Upon maturity of investment, interest and capital are paid into the sponsors verified bank account.'
        },
        {
            img: trackingSVG,
            title: 'Tracking',
            body: 'We perform due diligence to ensure proper management of participating farms by our farmer partners. We provide sponsors with real-time update on funded farm project including a process and income flowchart, making it easy to track farm project at every stage of development.'
        },
    ]
    return (
        <Container>
            <Row className="text-center ptb-15 ptb-md-5">
                <Col lg={4}>
                    <FeatureCard
                        title={features[0].title}
                        body={features[0].body}
                        imgSrc={features[0].img}
                    />
                </Col>
                <Col lg={4}>
                    <FeatureCard 
                        title={features[1].title} 
                        body={features[1].body} 
                        imgSrc={features[1].img}
                    />
                </Col>
                <Col lg={4}>
                    <FeatureCard 
                        title={features[2].title} 
                        body={features[2].body}
                        imgSrc={features[2].img}
                    />
                </Col>
            </Row>
        </Container>
    );
}
export default FeatureSection;