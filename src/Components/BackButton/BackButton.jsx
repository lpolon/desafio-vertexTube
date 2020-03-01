import React from 'react';
import { useHistory } from 'react-router-dom';

import './BackButton.css';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function() {
  return (
    <div
      className="backbutton-container icon is-size-4 has-text-info animated fadeInLeft"
      style={{ animationDuration: '0.6s' }}
      onClick={useHistory().goBack}
    >
      <FA icon={faArrowLeft} />
    </div>
  );
}
