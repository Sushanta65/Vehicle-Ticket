import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebase.config';
import { UserContext } from './../../App';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app();
 }

const Login = () => {
 
    const [signedInUser, setSignInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let {from} = location.state || {from: { pathname:"/" }}

    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        isSignedIn : true,
        name: '',
        email: '',
        photo: '',
        password: '',
        errorMessage: '',
        userCreated: false,
        
    })
    const handleChange = (e) => {
        
       let isFormValid = true;
        if(e.target.name === "email"){
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value)
        }
        if(e.target.name === "password"){
            const passwordLength = e.target.value.length > 6;
            const passwordChar = /\d{1}/.test(e.target.value);
            isFormValid = passwordLength && passwordChar;
        }
        if(isFormValid){
            const newUser = {...user}
            newUser[e.target.name] = e.target.value;
            setUser(newUser)
        }
    }
    // sign in with google
    const signInWithGoogle = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const user = res.user;
            const newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }
            setUser(newUser)
            setSignInUser(newUser)
            history.replace(from)
        })
        .catch(error => {
            console.log(error)
            console.log(error.message)
            console.log(error.code)
        })
    }
    // sign in with github
    const signInWithGithub = () => {
        var githubProvider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(githubProvider)
        .then(res => {
            const user = res.user;
            const newUser = {
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }
            setSignInUser(newUser)
            setUser(newUser)
            history.replace(from)
        }).catch(error => {
            console.log(error)
            console.log(error.message)
            console.log(error.code)
        })
    }
    // Sign Up with email and password
    const handleSignUp = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password,)
                .then((res) => {
                   const newUser = {...user}
                   newUser.errorMessage = '';
                   newUser.userCreated = true;
                   setUser(newUser)
                   setUserName(res.user.email)
                })
                .catch((error) => {
                    const errorMessage = error.message
                   const newUser = {...user}
                   newUser.userCreated = false;
                   newUser.errorMessage = errorMessage
                   setUser(newUser)
                });
        }
        // Sign In/Login with email and password
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((res) => {
                    const newUser = {...user}
                    newUser.errorMessage = '';
                    newUser.userCreated = true;
                    setUser(newUser)
                    setSignInUser(newUser)
                    history.replace(from)
                    console.log("User Info Update Successfully... ", res.user)
                })
                .catch((error) => {
                    const errorMessage = error.message
                    const newUser = {...user}
                    newUser.userCreated = false;
                    newUser.errorMessage = errorMessage
                    setUser(newUser)
                    
                });
        }
        e.preventDefault()
    }

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignedIn: false,
                email: '',
                name: '',
                photo: '',
                userCreated: false
            }
            setUser(signOutUser)

        }).catch(error => {
            console.log(error.message)
        })
    }
    
    const setUserName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(res => {
            console.log('user update successful..')
        })
        .catch(error => {
            console.log(error)
        })
    }
    const loginHandle = () => {
        setNewUser(!newUser)
        
    }
    return (
        <div className="container">
            <div className="pt-5">
                
                <div className="w-100 m-auto border p-4 signUpArea">
                    <h3>{newUser? "Sign Up Form" : "Login Form"}</h3>
                    <form onSubmit={handleSignUp}>

                        {newUser && <input onBlur={handleChange} className="form-control mt-3" type="text" name="fullname" id="fullname" placeholder="Name" required/>}
                        
                        <input onBlur={handleChange} className="form-control mt-3" id='email' name="email" type="text" placeholder="Enter a Email" required/><small style={{color: "red"}}></small>

                        <input onBlur={handleChange} className="form-control mt-3" type="password" name="password" id='password' placeholder="Enter a Password" required/>

                        {newUser && <input className="form-control mt-3" type="password" name="password" id='password' placeholder="Retype Password" required/>}
                        <p className="text-danger pt-2">{user.errorMessage}</p>
                        {
                            user.userCreated && <p className="text-success">{newUser? 'Sign In' : 'Login'} Successful...</p>
                        }
                        <input className="btn btn-warning w-100 my-2 mt-4" type="submit" value={!newUser? "Login": "Sign Up"}/>

                        <small className=" d-block text-center">{newUser? 'Already have an account?': 'New User?'} 
                        <Link onClick={loginHandle} style={{color: "orange"}}> {newUser? "Login" : "Create an account"}</Link></small>
                        
                    </form>
                </div>
                <small className="text-center text-dark w-100 or">_______________________________ or ______________________________</small>
                <div className="text-center">
                   
                    <button className="googleSignInBtn border py-1 pr-5 my-3" onClick={signInWithGoogle}><i className="fab fa-google px-3"></i> Sign In with google</button><br/>
                    <button className="githubSignInBtn border py-1 pr-5 mb-4" onClick={signInWithGithub} >  <i className="fab fa-github px-3"></i> Sign In with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;