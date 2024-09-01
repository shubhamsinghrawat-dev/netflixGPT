import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, PROFILEIMG } from './../utils/constant';
import { toggleGptSearchView } from './../utils/gptSlice';
import LanguageSelect from './LanguageSelect';
import { lang } from './../utils/languageConstant';

const MainHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  const handleSignOut = () => {
    signOut(auth).then(() => { 
    }).catch((error) => {
      // console.log("An error happened.")
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if (window.location.pathname === '/') {
          navigate('/browse');
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-5">
        <div className="justify-center flex items-center w-full md:w-auto mb-4 md:mb-0">
          <Link to="/">
            <img src={LOGO} className="w-36" alt="Logo" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4 px-5">
          <a href="#" className="hover:text-gray-300">TV Shows</a>
          <a href="#" className="hover:text-gray-300">Movies</a>
          <a href="#" className="hover:text-gray-300">New & Popular</a>
        </nav>
        <div className="flex items-center space-x-4">
          {showGptSearch && (
            <div className="relative">
              <LanguageSelect />
            </div>
          )}
          <button 
            className="bg-red-500 text-white px-3 py-1 font-semibold rounded-lg md:mr-4"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ? "Open GPT" : "Home"}
          </button>
          <div className="relative">
            <h4 className="text-gray-300 hover:bg-gray-800 rounded-md p-2">
              {user?.displayName && `${lang[langKey]?.Greeting}, ${user.displayName}`}
            </h4>
          </div>
          <div className="relative group">
            <img 
              src={PROFILEIMG} 
              alt="Profile" 
              className="h-8 w-8 border-2 border-gray-700 cursor-pointer"
            />
            <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-lg hidden group-hover:block z-50">
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">Account</a>
              <a 
                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800"
                onClick={handleSignOut}
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
