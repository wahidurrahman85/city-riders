import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';
import firebaseConfig from './Firebase.config';
firebase.initializeApp(firebaseConfig);

function App() {
const [user, setUser] = useState({
  isSignedIn: false,
  name: '',
  email: '',
  password: '',
  photo: ''
})

const provider = new firebase.auth.GoogleAuthProvider();

const handleSignin = () => {
  firebase.auth()
  .signInWithPopup(provider)
  .then(result => {
    console.log(result)
     var credential = result.credential;
    var token = credential.accessToken;
       const  {displayName, photoURL, email} = result.user;
       const signInUser = {
         isSignedIn : true,
         name: displayName,
         email: email,
         photo: photoURL
       }
       setUser(signInUser)
       console.log(displayName, photoURL, email)
  
  }).catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
   
}

const handleSignOut = () => {
  firebase.auth().signOut()
  .then(result => {
    const signOutUser = {
      isSignedIn : false,
      name: '',
      email: '',
      photo: ''
    }


    setUser(signOutUser)
  }).catch((error) => {
    // An error happened.
  });
}

const handleChange = (e) => {
  let isFormValid = true;
  if(e.target.name === 'email'){
    isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
   
  }
  if(e.target.password === 'password'){
    const isPasswordValid = e.target.value.length > 6;
    const passwordHasNuber =  /\d{1}/.test(e.target.value);
    isFormValid = isPasswordValid && passwordHasNuber;
  }
  if(isFormValid){
    const newUserInfo = {...user};
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  }
}

const handleSubmit = () => {

}
  return (
    <div className="App">
      
      {
        user.isSignedIn ?  <button  onClick={handleSignOut}> Sign Out</button> :
         <button  onClick={handleSignin}> Sign in</button>
      }

       {
         user.isSignedIn && 
         <div>
            <p>Welcome,  {user.name}</p>
            <p> Your Email: {user.email}</p>
            <img src={user.photoURL} alt="phot"/>
           
           
            </div>
       }

       <h1> Our Authentication</h1>
       <form onSubmit={handleSubmit}>
       <input type="email" onBlur={handleChange} name="email" placeholder="Your E-mail address" id="" required/>
       <br/>
       <input type="password"  onBlur={handleChange} name="password" placeholder="Your Password" id="" required/>
       <br/>
       <input type="submit" value="Submit"/>
       </form>
    </div>
  );
}

export default App;
