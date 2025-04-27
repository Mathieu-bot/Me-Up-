import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children, onClose: propOnClose }) => {
  const navigate = useNavigate();
  const handleClose = propOnClose || (() => navigate("/"));

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [handleClose]);

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const isTest = process.env.NODE_ENV === 'test';

  return createPortal(
    <div
      data-testid={isTest ? 'modal-backdrop' : undefined}
      className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-40 w-screen h-screen"
      onClick={onBackdropClick}
    >
      <div
        data-testid={isTest ? 'modal-dialog' : undefined}
        role="dialog"
        aria-modal="true"
        className="relative rounded-lg shadow-lg p-6 m-auto "
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
