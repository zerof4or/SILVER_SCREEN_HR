import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HomeMenu } from '../../../../Menus';
import { useHistory } from 'react-router';
import { ButtonBase } from '@material-ui/core';
import './SideMenu.Style.scss';

export const SideMenuComponent = ({ isOpenSideExtended, onChangeSideExtended }) => {
  const [sideMenuElements, setSideMenuElements] = useState([]);
  const history = useHistory();
  const getIsActiveMenuItem = useCallback(
    (item) =>
      window.location &&
      ((item.isExact && window.location.pathname === item.path) ||
        window.location.pathname.startsWith(item.path)),
    []
  );
  const getActiveGroupOfChildrens = useCallback(
    (childrens) => {
      if (!childrens) return [];
      const activeItemIndex = childrens.findIndex((child) => getIsActiveMenuItem(child));
      if (activeItemIndex !== -1) {
        if (
          childrens[activeItemIndex].childrens &&
          childrens[activeItemIndex].childrens.length > 0 &&
          !childrens[activeItemIndex].isLastChildrenInSideMenu
        )
          return getActiveGroupOfChildrens(childrens[activeItemIndex].childrens);
      } else if (
        childrens &&
        childrens.length > 0 &&
        childrens[0].childrens &&
        childrens[0].childrens.length > 0
      )
        return [];
      return childrens;
    },
    [getIsActiveMenuItem]
  );
  const navigationClickHandler = useCallback(
    (item) => () => {
      if (item.path) history.push(item.path);
      if (item.externalPath) window.open(item.externalPath, '_blank');
    },
    [history]
  );
  useEffect(() => {
    const activeChildrens = getActiveGroupOfChildrens(HomeMenu);
    setSideMenuElements(activeChildrens || []);
    history.listen(() => {
      const activeChildrens = getActiveGroupOfChildrens(HomeMenu);
      setSideMenuElements(activeChildrens || []);
    });
  }, [getActiveGroupOfChildrens, history]);

  return (
    <div className="side-menu-wrapper childs-wrapper">
      <ButtonBase
        className={`btns-side-extended${(isOpenSideExtended && ' is-active') || ''}`}
        onClick={onChangeSideExtended}
      >
        <span className="mdi mdi-filter" />
      </ButtonBase>
      {sideMenuElements.map((item, index) => (
        <ButtonBase
          className={`btns-side-menu-item${(getIsActiveMenuItem(item) && ' is-active') || ''}`}
          key={`sideMenuItemKey${index}`}
          onClick={navigationClickHandler(item)}
        >
          <span className={item.icon} />
        </ButtonBase>
      ))}
    </div>
  );
};

SideMenuComponent.propTypes = {
  onChangeSideExtended: PropTypes.func.isRequired,
  isOpenSideExtended: PropTypes.bool.isRequired,
};
