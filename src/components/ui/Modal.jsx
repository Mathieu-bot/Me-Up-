import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ children, onClose: propOnClose }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

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
    <AnimatePresence
      // initial={false}
      onExitComplete={() => {
        if (propOnClose) propOnClose();
        else navigate('/');
      }}
    >
      {show && (
      <motion.div
        data-testid={isTest ? 'modal-backdrop' : undefined}
        className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-[51] w-screen h-screen"
        onClick={onBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          data-testid={isTest ? 'modal-dialog' : undefined}
          role="dialog"
          aria-modal="true"
          className="relative rounded-lg m-auto"
          initial={{ 
            scale: 0.95,
            opacity: 0,
            y: 20,
            rotateY: 15,
            transformPerspective: 1000
          }}
          animate={{ 
            scale: 1,
            opacity: 1,
            y: 0,
            rotateY: 0,
            transformPerspective: 1000
          }}
          exit={{ 
            scale: 0.95,
            opacity: 0,
            y: -20,
            rotateY: -10,
            transformPerspective: 1000
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 300,
            bounce: 0.3,
            duration: 0.7
          }}
        >
          {children}
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
