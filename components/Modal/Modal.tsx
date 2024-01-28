// Modal.js
import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center z-100 justify-center">
      <div className="modal-content bg-gradient-to-r from-sikkaMaroon to-sikkaMaroonGrad rounded-lg  p-2 w-full h-full">
        {/* <video
          className="w-full h-full object-cover"
          src="/video/finished.webm"
          autoPlay
          loop
        
        ></video> */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
