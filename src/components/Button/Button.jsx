import React from 'react';
import './Button.css';

const Button = ({ onClickBtn, children }) => {
  return (
    <button className="" onClick={onClickBtn}>
      {children}
    </button>
  );
};

export default Button;
