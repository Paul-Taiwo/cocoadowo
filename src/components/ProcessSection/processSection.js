import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProcessSVG from '../../images/svgs/processing_qj6a.svg';
import './processSection.css';

const ProcessSection = () => (
    <>
        <div className="bg1">
            <Container className="ptb-15 ptb-md-5">

                    <h5 className="header">The Process</h5>
                <Row>
                    <Col className="mx-auto p-5" lg={{span: 6, order: 2}}>
                        <img className="w-100 img-responsive" src={ ProcessSVG } width="400" alt="Process" />
                    </Col>
                    <Col lg={{span: 6}} className="p-3 p-lg-5">
                        <p className="font-20">Cocoa is a small perennial tree crop that is intercropped with crops such as cassava,
                            banana, maize, oil palm, coconut and other cash crops for a diversified income.
                            Investment in its production is long term.
                        </p>
                        <p className="font-20">Farm sponsors can pledge money to cultivate a farm project for a return on income generated after harvest, which has a ten years’ investment lifecycle.
                            <br />The funding commitment covers farm inputs, seeds, farm tools, logistics,
                            operation, crop yield insurance, harvesting and post-harvest activities.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="bg2">
            <Container className="ptb-15 ptb-md-5" style={{border: '1px solid blue'}}>
                    <h5 className="header header-right">Improving and Diversifying Farmer Income</h5>

                <Row>
                    <Col className="mx-auto p-5" lg={{span: 6}}>
                        <img className="w-100 img-responsive" src={ ProcessSVG } width="400" alt="Process" />
                    </Col>
                    <Col lg={{span: 6}} className="p-3 p-lg-5" style={{border: '1px solid red'}}>
                        <p className="font-20">
                            Poverty and deforestation are part of the urgent challenges facing 
                            farmers in West Africa today. Despite progress, some farmers haven’t 
                            experienced improvements in their income or living conditions at an adequate 
                            pace and deforestation continues with farming occurring in protected forest areas.

                        </p>
                        <p className="font-20">
                            Cocoadowo is taking a different approach that creates a pathway for farmers 
                            and their communities to thrive. Our effective, scalable and innovative solution 
                            enables everyone to empower farmers, from anywhere in the world.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
);

export default ProcessSection;