import React from 'react';
import styles from './Modal.module.css';
export function Modal({ children, handleCloseModel, isSalesModal }) {
  return (
    <div className={styles.modal}>
      <div
        className='modal'
        style={{
          border: '4px solid',
          borderColor: isSalesModal ? '#ff4500' : '#555',
          textAlign: 'center',
        }}
      >
        {children}
        <button
          onClick={handleCloseModel}
          className={isSalesModal ? 'sales-button' : ''}
        >
          close
        </button>
      </div>
    </div>
  );
}
