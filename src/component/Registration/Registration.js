import React, { useState } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const Registration = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error:'',
        success: false,
        newUser: false
      })
    //   console.log(user)


    const handleChange = (e) => {
        let isFormValid = true;
        console.log(e.target.value);
        if(e.target.name ==='email'){
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
            
        }
        if(e.target.name === 'password'){
            const isPassValid = e.target.value.length>6;
            const passHasNum = /\d{1}/.test(e.target.value);
            isFormValid = isPassValid && passHasNum;

        }
        if (isFormValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);


        }
        

    }

    const handleSubmit = (e) => {
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserInfo(user)
                
            })
            .catch(function(error) {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                var errorMessage = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });

        }
        e.preventDefault();

    }

    const updateUserInfo = (user) => {
        var userInfo = firebase.auth().currentUser;

        userInfo.updateProfile({
            displayName: user.name,
            password: user.password
        })
        .then(function(){

        }).catch(function(error){

        })
    }


    return (
        <section>
            <div >
            <Row>
                 <Col xs={6} md={4}>
                     
                </Col>
                <Col xs={6} md={4}>
                
    <div className="loginItem">
    <Form onSubmit ={handleSubmit}>
    <h1>Registration</h1>

        <Form.Group controlId="formBasicEmail">   
       <Form.Control name="email" type="email" onBlur={handleChange} placeholder="username or email" required />
       <Form.Text className="text-muted">
       </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">   
      <Form.Control name="name" type="text" onBlur={handleChange} placeholder="Name" required />
       <Form.Text className="text-muted">
       </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
      <Form.Control name="password" type="password" onBlur={handleChange} placeholder="Password" required />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Control name="confirmPass" type="password" onBlur={handleChange} placeholder="Confirm Password" required />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label="Remember me" />
     </Form.Group>
     <Button variant="warning" className="loginBtn" type="submit" onClick={handleSubmit}>Creat Account</Button>
    <p style={{color: 'red'}}>{user.error}</p>
    {user.success && <p style={{color: 'green'}}>User created Successfully</p>}
     
  </Form>
    </div>
            <div className="thirdBtnArea">
            </div>
                </Col>
               <Col xs={6} md={4}>
                     
                 </Col>
                  </Row>
            </div>
        </section>
    );
};

export default Registration;