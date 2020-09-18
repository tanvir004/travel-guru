import React, { useState } from 'react';
import { Row, Col, Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import './SreemangalHotels.css'

const SreemangalHotels = () => {
    return (
        <section className="hotelItems">
            <div>
            <h1>Stay in Sreemangal</h1>
            <Row>
            <Col className="itemsGap">
                <img className="hotelImg" src="https://i.ibb.co/NCrcvZK/Rectangle-26.png" alt=""/><br/><br/>
                <img className="hotelImg" src="https://i.ibb.co/7rCbQMD/Rectangle-27.png" alt=""/><br/><br/>
                <img className="hotelImg" src="https://i.ibb.co/TmvDRw5/Rectangle-28.png" alt=""/>
            </Col>
            <Col>
                <h3>Light bright airy stylish apt and safe peaceful stay</h3>
                <p>4 guest 2 bedroom 2 bed 2 bath</p>
                <p>with air conditioning kitchen</p>
                <p>cancellation flexibility available</p><br/><br/><br></br><br></br><br></br>
                <h3>Light bright airy stylish apt and safe peaceful stay</h3>
                <p>4 guest 2 bedroom 2 bed 2 bath</p>
                <p>with air conditioning kitchen</p>
                <p>cancellation flexibility available</p><br/><br/><br/><br/><br></br><br></br><br></br>
                <h3>Light bright airy stylish apt and safe peaceful stay</h3>
                <p>4 guest 2 bedroom 2 bed 2 bath</p>
                <p>with air conditioning kitchen</p>
                <p>cancellation flexibility available</p>

                </Col>
                
            <Col className="mapArea">
            <h3 className="mapText">Map</h3>

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29087.566832746306!2d91.70753466476843!3d24.313523696129216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37517a7a9ac91745%3A0x50f827893a88c955!2sSreemangal!5e0!3m2!1sen!2sbd!4v1600413659104!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
            
            </Col>
            </Row>
            </div>
            
        </section>
    );
};

export default SreemangalHotels;