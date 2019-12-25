import React from 'react';

export default function({ id, name, onChange, defaultChecked }) {
  return (
    <div className="switch-wrapper">
      <input defaultChecked={defaultChecked} onChange={onChange} type="checkbox" id={id} className="switch-input"/>
      <label htmlFor={id} className="switch-label">{name || 'Switch'}</label>
    </div>
  );
}
