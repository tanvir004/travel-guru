import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import './CoxHotel.css'

const CoxHotel = () => {
    return (
        <section className="hotelItems">
            <div>
            <h1>Stay in Cox's Bazar</h1>
            <Row>
            <Col className="itemsGap" sm={3}>
                <img className="hotelImg" src="https://i.ibb.co/NCrcvZK/Rectangle-26.png" alt=""/><br/><br/>
                <img className="hotelImg" src="https://i.ibb.co/7rCbQMD/Rectangle-27.png" alt=""/><br/><br/>
                <img className="hotelImg" src="https://i.ibb.co/TmvDRw5/Rectangle-28.png" alt=""/>
            </Col>
            <Col sm={3}>
                <h3>Light bright airy stylish apt and safe peaceful stay</h3>
                <p>4 guest 2 bedroom 2 bed 2 bath</p>
                <p>with air conditioning kitchen</p>
                <p>cancellation flexibility available</p><br/><br/>
                <h3>Light bright airy stylish apt and safe peaceful stay</h3>
                <p>4 guest 2 bedroom 2 bed 2 bath</p>
                <p>with air conditioning kitchen</p>
                <p>cancellation flexibility available</p><br/><br/>
                <h3>Light bright airy stylish apt and safe peaceful stay</h3>
                <p>4 guest 2 bedroom 2 bed 2 bath</p>
                <p>with air conditioning kitchen</p>
                <p>cancellation flexibility available</p>

                </Col>
                
            <Col sm={6}>
            
            </Col>
            </Row>
            </div>
            
        </section>
    );
};

export default CoxHotel;