"use client";
import React, { useEffect, useState } from 'react'
import GoogleIcon from '../../../../public/icons/GoogleIcon';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photoURL: "",
  });
  
  const router = useRouter();
  const { createUser, currentUser, googleProvider } = useAuthContext();

  useEffect(() => {
    if (currentUser) {
      router.push("/profile"); 
      
    }
  }, [currentUser, router]);

  const handleChange = (e) => {
    setInfo({...info, [e.target.name]:e.target.value})
  }

  const { firstName, lastName, email, password, photoURL } = info;

 const handleSubmit = (e) => {
    const displayName = `${firstName} ${lastName}`;
    e.preventDefault();
    console.log(info);
    createUser(email, password, displayName, photoURL);
  }

  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <form onSubmit={handleSubmit} >
              <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
                Sign Up
              </h2>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="firstName"
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={handleChange}
                />
                <label htmlFor="floating_text">First Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="lastName"
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={handleChange}
                />
                <label htmlFor="floating_text">Last Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="email"
                  className="peer"
                  type="email"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label htmlFor="floating_email">Email</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="password"
                  className="peer"
                  type="password"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label htmlFor="floating_password">Password</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="photoURL"
                  className="peer"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label htmlFor="floating_photoURL">Profile Picture URL (optional)</label>
              </div>
              <button className="btn-danger" type="submit">
                Register
              </button>
              <button
                className="flex justify-between text-center items-center btn-danger"
                type="button"
                onClick={googleProvider}
              >
                Continue with Google
                <GoogleIcon color="currentColor" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
