import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ButtonBase } from '@material-ui/core';

export const HeaderMenuPopoverComponent = ({ activeItem, parentIndex }) => {
  const { t } = useTranslation('Shared');
  const getIsActiveMenuItem = useCallback(
    (item) =>
      window.location &&
      ((item.isExact && window.location.pathname === item.path) ||
        window.location.pathname.startsWith(item.path)),
    []
  );
  return (
    activeItem &&
    activeItem.childrens &&
    activeItem.childrens.map((item, index) => (
      <div
        className="header-menu-popover-wrapper childs-wrapper"
        key={`menuPopoverItemKey${(parentIndex + 1) * (index + 1)}`}
      >
        {item && (item.isLastChildrenInMainMenu || item.childrens.length === 0) && (
          <ButtonBase
            className={`menu-popover-item-btn-wrapper${
              (getIsActiveMenuItem(item) && ' is-active') || ''
            }`}
          >
            {item.icon && <span className={item.icon} />}
            {item.name && (
              <span className={`item-group-name${(item.icon && ' px-1') || ''}`}>
                {t(item.name)}
              </span>
            )}
          </ButtonBase>
        )}
        {item && !item.isLastChildrenInMainMenu && item.childrens.length > 0 && (
          <div
            className={`menu-popover-item-group-wrapper${
              (getIsActiveMenuItem(item) && ' is-active') || ''
            }`}
          >
            <span className="item-group-name">{(item.name && t(item.name)) || 'N/A'}</span>
            {/* {activeItem.childrens &&
              activeItem.childrens.map((item, index) => ( */}
            <HeaderMenuPopoverComponent
              activeItem={item}
              parentIndex={index}
              // key={`menuPopoverItemKey${(parentIndex + 1) * (index + 1)}`}
            />
            {/* ))} */}
          </div>
        )}

        {/* {activeItem &&
        activeItem.childrens &&
        activeItem.childrens.map((item, index) => (
          <React.Fragment key={`menuPopoverItemKey${(parentIndex + 1) * (index + 1)}`}>
            {!item.isLastChildrenInMainMenu && item.childrens.length > 0 && (
              <div
                className={`menu-popover-item-group-wrapper${
                  (getIsActiveMenuItem(item) && ' is-active') || ''
                }`}
              >
                <span className="item-group-name">{(item.name && t(item.name)) || 'N/A'}</span>
                <HeaderMenuPopoverComponent activeItem={item.childrens} parentIndex={index} />
              </div>
            )}
          </React.Fragment>
        ))} */}
      </div>
    ))
  );
};

HeaderMenuPopoverComponent.propTypes = {
  activeItem: PropTypes.instanceOf(Object),
  parentIndex: PropTypes.number,
};
HeaderMenuPopoverComponent.defaultProps = {
  activeItem: null,
  parentIndex: 0,
};

export default HeaderMenuPopoverComponent;
