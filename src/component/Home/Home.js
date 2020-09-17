import React from 'react';
import './Home.css'
import { Button, Card, CardDeck, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="cardItem">
            <CardDeck>
  <Card className="card">
    <Card.Img variant="top" src="https://i.ibb.co/Z2bFKNc/Cox.jpg" />
    <Card.Body>
      <Card.Title>Cox's Bazar</Card.Title>
      <Card.Text>
      Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
        <Link to='/coxbookingfield'><Button variant="warning">Booking</Button></Link>
        </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/7Q5PSY0/Sreemongol.png" />
    <Card.Body>
      <Card.Title>Sreemangal</Card.Title>
      <Card.Text>
      Sreemangal is an Upazila of Moulvibazar District in the Sylhet Division of Bangladesh.The top attractions to visit in Sreemangal are: Lawachara National Park. Ham Ham Waterfall. Madhabpur Lake. Baikka Beel Wetland Sanctuary. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="sreemangalbooking"><Button variant="warning">Booking</Button></Link>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://i.ibb.co/cDqNRNr/sundorbon.png" />
    <Card.Body>
      <Card.Title>Sundarban</Card.Title>
      <Card.Text>
      The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link to="sundarbanbooking"><Button variant="warning">Booking</Button></Link>
    
    
    </Card.Footer>
  </Card>
</CardDeck>
        </div>
    );
};

export default Home;