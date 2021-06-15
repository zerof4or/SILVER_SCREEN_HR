import React from 'react';
import { PropTypes } from 'prop-types';
import image from '../../Assets/Images/Defaults/loader.gif';
import imageWhite from '../../Assets/Images/Defaults/loaderisWhite.gif';
import './Spinner.Style.scss';

export const Spinner = ({ isActive, isAbsolute, isWhite }) => {
  const StateMode = JSON.parse(localStorage.getItem('displayMode'));

  return (
    <>
      {isActive && (
        <div className={`spinner-wrapper${isAbsolute ? '  is-absolute' : ''}`}>
          <div className='app-spinner'>
            {((isWhite || (StateMode&&StateMode.isDarkMode)) && (
              <img src={imageWhite} alt='...' className='img-spinner' />
            )) || <img src={image} alt='...' className='img-spinner' />}
          </div>
        </div>
      )}
    </>
  );
};
export default Spinner;
Spinner.propTypes = {
  isActive: PropTypes.bool.isRequired,
  isAbsolute: PropTypes.bool,
  isWhite: PropTypes.bool,
};
Spinner.defaultProps = {
  isAbsolute: false,
  isWhite: false,
};
