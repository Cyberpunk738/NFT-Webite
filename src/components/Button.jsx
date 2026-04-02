import React from 'react';
import './Button.css';

const Button = ({ variant = 'primary', children, onClick, className = '', style, icon }) => {
  return (
    <button 
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick}
      style={style}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
