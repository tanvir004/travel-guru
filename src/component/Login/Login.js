import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  // const [loginUser, setLoginUser] = useState({
  //   email: '',
  //   password: '',
  //   error:''    
  // })

  
    firebase.initializeApp(firebaseConfig);
    const handelGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            console.log(signedInUser)
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    const handelFacebookSignIn = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });

    }

  //   const handleLoginSubmit = () => {
  //     firebase.auth().createUserWithEmailAndPassword(loginUser.email, loginUser.password).catch(function(error) {
  //       // Handle Errors here.
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       // ...
  //     });

  // }
    return (

        <section>
            <div >
            <Row>
                 <Col xs={6} md={4}>
                     
                </Col>
                <Col xs={6} md={4}>
                
    <div className="loginItem">
    <Form>
    <h1>Login</h1>
        <Form.Group controlId="formBasicEmail">
       <Form.Control type="email" placeholder="username or email" />
       <Form.Text className="text-muted">
       </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
      <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
     <Form.Check type="checkbox" label="Remember me" />
     </Form.Group>
     <Button variant="warning" className="loginBtn" type="submit">login</Button>
     <p>Don't have an account? <a>create account</a></p>
  </Form>
    </div>
            <div className="thirdBtnArea">
            <p>_________________or_________________</p>
            <img className="icon" src="https://i.ibb.co/5hvrqYB/google.png" alt=""/>
            <button className="thirdPartyLgBtn"  onClick={handelGoogleSignIn}>Google sign in</button><br/>
            <img className="icon" src="https://i.ibb.co/Rz5bW2t/fb.png" alt=""/>
            <button className="thirdPartyLgBtn"  onClick={handelFacebookSignIn}>Facebook sign in</button>
            </div>
                </Col>
               <Col xs={6} md={4}>
                     
                 </Col>
                  </Row>
            </div>
        </section>
        
    );
};

export default Login;