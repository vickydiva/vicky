import React, { useState, useEffect } from "react";
//import '../styles/modal.css';

const Modal = ({ onClose }) => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => clearTimeout(timer); // Cleanup function
    } else {
      onClose(); // Close the modal when countdown reaches 0
    }
  }, [count, onClose]);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Working with Hooks</h2>
        <p>
          <i>Welcome to React class</i>
        </p>
        <h3>Closing in {count}...</h3>
      </div>
    </div>
  );
};

const WithModals = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="modal-box">
      <button className="modal-click" onClick={openModal}>Open Modal</button>
      <div className="modal-it" style={{ display: showModal ? "block" : "none" }}>
        {showModal && <Modal  onClose={() => setShowModal(false)} />}
    </div>
    </div>
  );
};

export default WithModals;
