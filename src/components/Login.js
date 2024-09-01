import React, { useRef, useState } from 'react';
import Header from './LoginHeader';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';


const Login = () => {
  const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    };

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () =>{
        const message = checkValidateData(
          email.current.value,
          password.current.value,
          isSignInForm ? '' : fullName.current.value,
          !isSignInForm
        );
        setErrorMessage(message);
        if(message) return;

        if(!isSignInForm){
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: fullName.current.value
              }).then(() => {     
                const {uid, email, displayName} = auth.currentUser;
                dispatch(addUser({uid:uid, email:email, displayName:displayName}));  
              }).catch((error) => {
                setErrorMessage(error.message);
              });
            //   console.log(user)   
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" +errorMessage);
            });
        }
        else{
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;   
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" +errorMessage);
          });
        }
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg')" }}>
            </div>        
            <Header />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md p-8 space-y-8 bg-black bg-opacity-75 rounded-lg">
                    <h2 className="text-3xl font-bold text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h2>
                    <form className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
                        {!isSignInForm && (
                            <div>
                                <label className="block text-sm font-medium text-gray-400">Full Name</label>
                                <input 
                                    id="name" 
                                    name="name" 
                                    type="text"      
                                    ref={fullName}
                                    className="w-full p-3 mt-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                                />
                            </div>
                        )}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                            <input 
                                id="email" 
                                name="email" 
                                type="email"  
                                ref={email}
                                className="w-full p-3 mt-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-400">Password</label>
                            <input 
                                id="password" 
                                name="password" 
                                type="password"  
                                ref={password}
                                className="w-full p-3 mt-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-white"
                            />
                        </div>
                        <p className="text-red-500">{errorMessage}</p>
                        <button 
                            type="submit" 
                            className="w-full p-3 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
                            onClick={handleButtonClick}
                        >
                            {isSignInForm ? "Sign In" : "Sign Up"}
                        </button>
                        <div className="flex justify-between mt-4 text-sm text-gray-400">
                            <div>
                                <input type="checkbox" id="remember" className="mr-2" /> 
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="#" className="hover:underline">Need help?</a>
                        </div>
                    </form>
                    <div className="mt-6 text-center text-gray-400">
                        <p>
                            {isSignInForm ? "New to Netflix?" : "Already Registered"} <button 
                                className="text-white hover:underline" 
                                onClick={toggleSignInForm}>
                                {isSignInForm ? "Sign up now" : "Sign in now"}
                            </button>.
                        </p>
                    </div>
                    <div className="mt-4 text-xs text-gray-400">
                        <p>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-500 hover:underline">Learn more</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
