import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';

import classes from './Hero.module.css';

const Hero = () => 
    (
        <Jumbotron className={[classes.hero].join(' ')}>
            <Container>
            <div className={classes.jumbotron_text}>
                <h2>Accelerating Investment In Sustainable Farming</h2>
                <p>
                    Cocoadowo is an agroforestry enterprise offering an end to end agriculture 
                    services with strong commitment on deforestation-free cocoa
                    farming and increased food security.
                </p>
                <p>
                    <Button className="btnGreen">Get Started</Button>
                </p>
            </div>
            </Container>
        </Jumbotron>
);

export default Hero;