import React from "react";
import PropTypes from 'prop-types';

const ResumeModal = ({ imageUrl, onClose }) => {
  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={imageUrl} alt="resume" />
      </div>
    </div>
  );
};

// Add PropTypes validation
ResumeModal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ResumeModal;
