import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
const LoginHeader = () => {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browse");
      }
       else {
        dispatch((removeUser));
        navigate("/");
      }
    });
    return()=>unsubscribe();
  }, [])
  return (      
    <div className="absolute top-5 left-5">
      <img 
        src={LOGO} 
        alt="Netflix Logo" 
        className="w-36"
      />
    </div>
  );
}

export default LoginHeader;
