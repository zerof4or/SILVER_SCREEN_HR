import React from 'react';
import { PropTypes } from 'prop-types';
import image from '../../Assets/Images/Defaults/loader.gif';
import './Spinner.Style.scss';

export const Spinner = ({ isActive, isAbsolute }) => (
  <>
    {isActive && (
      <div className={`spinner-wrapper${isAbsolute ? '  is-absolute' : ''}`}>
        <div className="app-spinner">
          <img src={image} alt="..." />
          <span className="fz-15px">Please Wait ...</span>
        </div>
      </div>
    )}
  </>
);
export default Spinner;
Spinner.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isAbsolute: PropTypes.bool,
};
Spinner.defaultProps = {
  isAbsolute: false,
};
