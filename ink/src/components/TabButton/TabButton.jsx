// TabButton.js
import React from 'react';

export default function TabButton({ onClick, text, active }) {
  return (
    <button className={`cards-button ${active ? 'active' : ''}`} onClick={onClick}>
      {text}
    </button>
  );
}
