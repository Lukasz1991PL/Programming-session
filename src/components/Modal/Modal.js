import React from 'react';

import './Modal.css';
export function Modal({ children, handleCloseModel }) {
  return (
    <div className='modal-backdrop'>
      <div className='modal'>
        {children}
        <button onClick={handleCloseModel}>close</button>
      </div>
    </div>
  );
}
