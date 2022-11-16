import React from 'react';
import './Title.css';
export const Title = ({ title, subtitle }) => {
  return (
    <div className='title-block'>
      <h1 className='title'>{title}</h1>
      <br />
      <h2 className='subtitle'>{subtitle}</h2>
    </div>
  );
};
