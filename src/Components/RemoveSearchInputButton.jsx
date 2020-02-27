import React from 'react';

export default function RemoveSearchInputButton({ handleChange }) {
  return (
    <div
      className="block animated fadeIn"
      style={{ animationDuration: '0.3s' }}
    >
      <button onClick={() => handleChange('')} className="delete"></button>
    </div>
  );
}
