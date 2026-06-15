import { useEffect, useState } from 'react';

export default function Toast({ show, text }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <span className="toast__dot" />
      {text}
    </div>
  );
}
