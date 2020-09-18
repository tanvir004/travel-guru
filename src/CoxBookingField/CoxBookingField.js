import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './CoxBookingField.css'

const CoxBookingField = () => {
    const [book, setBook] = useState([]);
    const [bookPlaced, setBookPlaced] = useState(false);
    const history = useHistory();

    const handleStartBooking = () => {
        history.push('/coxhotels');
    }

    return (
        <Container>
            <Row>
        <Col>
        <h1 className="text">Cox's Bazar</h1>
        <p className="text">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
        
        </Col>
        <Col className="bookingInfo">
        <Form>
         <Form.Group controlId="formBasicOrigin">
             <Form.Label>Origin(From)</Form.Label>
            <Form.Control type="text" placeholder="Dhaka" /></Form.Group>

             <Form.Group controlId="formBasicDestination"><Form.Label>Destination</Form.Label>
          <Form.Control type="text" placeholder="Cox's Bazar" /></Form.Group>

          <Form.Group controlId="formBasicOrigin">
             <Form.Label>From</Form.Label>
             <input type="date" name="from" id="from" required/>
             <Form.Label>To</Form.Label>
             <input type="date" name="from" id="from" required/></Form.Group>
             <Button onClick={handleStartBooking} variant="warning" type="submit">Start Booking</Button>
          
         
</Form>
        
        </Col>
           </Row>
        </Container>
    );
};

export default CoxBookingField;