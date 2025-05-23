import React from 'react'
import CardContainer from './components/CardContainer';
export const metadata= {
    title:"Profile Page"
};
const Profile = () => {
  return (
    <div className='flex items-center justify-center pt-20' >
      <div className='flex flex-col' >
      <h1 className='text-3xl md:text-6xl text-white' >Who's watching🎬 </h1>
      <CardContainer/>
      </div>
    </div>
  )
}

export default Profile;
