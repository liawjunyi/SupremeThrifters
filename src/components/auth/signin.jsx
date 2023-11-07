import React, {useState} from 'react';
import {auth} from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
const SignIn = () =>{
    
    const [email,setEmail] = useState('');
    const [pass, setPass] = useState('');

    const signIn = (e) =>{

        
        e.preventDefault(); //prevents the page from being reloaded
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {

            console.log(userCredential);


        })
        .catch((error) => {

            console.log(error);
        })


    }

    return(

        <div className='sign-in-container'>
            <form onSubmit={signIn}>

                <h1>Log In</h1>
                <input type="email" placeholder='enter email:' value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" placeholder='enter pass:' value={pass} onChange={(e) => setPass(e.target.value)}/>

                <button type='submit'>Log in</button>
            </form>
        </div>


    )
}

export default SignIn;