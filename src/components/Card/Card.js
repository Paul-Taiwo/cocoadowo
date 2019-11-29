import React from 'react';
import { Card } from 'react-bootstrap';

const FeatureCard = (props) => (
    <Card className="mx-auto p-3 mb-4 border-0" style={{ width: '18rem' }}>
        <Card.Img className="mx-auto w-150" variant="top" src={props.imgSrc} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.body}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default FeatureCard;