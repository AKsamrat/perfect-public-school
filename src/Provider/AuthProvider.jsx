import React, { createContext, useEffect, useState } from 'react';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import axios from 'axios';
import { toast } from 'react-toastify';
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  //create user

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with google

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //logOut

  const logOut = () => {
    return signOut(auth);
  };

  //profileupdsate

  const profileUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: { name },
      photoURL: { photo },
    });
  };

  const allInfo = {
    user,
    createUser,
    signIn,
    googleLogin,
    logOut,
    profileUpdate,
    loading,
    setUser,
    setReload,
    setLoading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      const loggedUser = { email: currentUser?.email };
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        // axios
        //   .post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {
        //     withCredentials: true,
        //   })
        //   .then(res => {
        //     if (res.data.token) {
        //       localStorage.setItem('access-token', res.data.token);
        //     }
        //     console.log('token Response', res.data);
        //   });
      } else {
        // localStorage.removeItem('access-token');
        // axios
        //   .post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, {
        //     withCredentials: true,
        //   })
        //   .then(res => {
        //     console.log(res.data);
        //   });

        setUser(null);

        setLoading(false);
        toast.success('Logout Successfully');
      }
    });

    return () => {
      return unsubscribe();
    };
  }, [reload]);
  return (
    <AuthContext.Provider value={allInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
