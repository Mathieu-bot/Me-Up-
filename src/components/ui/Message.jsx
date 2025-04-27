import React, { useEffect, useRef } from 'react';

const Message = ({ type, text }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (text) ref.current?.focus();
  }, [text]);
  if (!text) return null;
  const baseClass = 'p-3 rounded-md mb-4';
  const isError = type === 'error';
  const typeClass = isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700';
  const role = isError ? 'alert' : 'status';
  const ariaLive = isError ? 'assertive' : 'polite';
  return (
    <div
      ref={ref}
      tabIndex="-1"
      className={`${baseClass} ${typeClass}`}
      role={role}
      aria-live={ariaLive}
    >
      {text}
    </div>
  );
};

export default Message;
