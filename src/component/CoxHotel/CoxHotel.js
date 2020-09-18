import React from 'react';
import { Row, Col, Button } from "react-bootstrap";
import './CoxHotel.css'

const CoxHotel = () => {
    return (
        <section className="hotelItems">
            <div>
            <h1>Stay in Cox's Bazar</h1>
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

                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.3749798571!2d91.93286129364228!3d21.450883578571922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1600413915230!5m2!1sen!2sbd" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>                 */}
            
            </Col>
            </Row>
            </div>
            
        </section>
    );
};

export default CoxHotel;