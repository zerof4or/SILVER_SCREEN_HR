import React from 'react';
import PropTypes from 'prop-types';

export const HeaderMenuPopoverComponent = ({ activeItem }) => {
  return (
    <div className="header-menu-popover-wrapper childs-wrapper">
      <div className=""></div>
    </div>
  );
};

HeaderMenuPopoverComponent.propTypes = {
  activeItem: PropTypes.instanceOf(Object),
};
HeaderMenuPopoverComponent.defaultProps = {
  activeItem: null,
};

export default HeaderMenuPopoverComponent;
