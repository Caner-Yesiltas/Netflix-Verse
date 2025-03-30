
"use client"
import React from 'react'
import UserCard from './UserCard';
import { useAuthContext } from '@/context/AuthContext';


const profileImages = [
    "/images/default-blue.png",
    "/images/default-red.png",
    "/images/default-slate.png",
    "/images/default-green.png",
  ];

const CardContainer = () => {
    const {currentUser} = useAuthContext();
  return (
    <div className='flex items-center justify-center gap-10 mt-10 flex-wrap' >
      {profileImages.map((image, index)=>
    
    <UserCard key={index} image={image} name={index===0 && currentUser ? currentUser?. displayName:`Guest-${index+1}` } />
    )}
    </div>
  )
}

export default CardContainer
