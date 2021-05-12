import React from 'react';
import PropTypes from 'prop-types';

export const SideExtendedComponent = ({ isOpenSideExtended, onChangeSideExtended }) => {
  return <div className="side-extended-wrapper childs-wrapper"></div>;
};

SideExtendedComponent.propTypes = {
  onChangeSideExtended: PropTypes.func.isRequired,
  isOpenSideExtended: PropTypes.bool.isRequired,
};
