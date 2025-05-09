'use client';

import React from 'react';

import { Triangle } from 'react-loader-spinner';

const loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Triangle
        visible={true}
        height='80'
        width='80'
        color='#E62A11' 
        ariaLabel='triangle-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
};

export default loading;
