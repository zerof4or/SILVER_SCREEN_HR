import ButtonBase from '@material-ui/core/ButtonBase';
import React, { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PopoverComponent from '../../../../../../Components/Popover/Popover.Component';
import { GlobalHistory } from '../../../../../../Helpers';
import { HomeMenu } from '../../../../../../Menus';
import { HeaderMenuPopoverComponent } from './Sections';

export const HeaderMenuComponent = () => {
  const { t } = useTranslation('Shared');
  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const activeItemRef = useRef(null);
  const headerMenuClicked = useCallback(
    (item, index) => (event) => {
      if (item.childrens && item.childrens.length > 0) activeItemRef.current = event.currentTarget;
      setActiveItemIndex(index);
      setActiveItem(item);
      if (!item.isRoute && item.isRoute !== undefined) return;
      if (item.path) GlobalHistory.push(item.path);
      if (item.externalPath) window.open(item.externalPath, '_blank');
    },
    []
  );
  const popoverCloseHandler = () => {
    activeItemRef.current = null;
    setActiveItem(null);
    setActiveItemIndex(null);
  };
  const getIsActiveMenuBtn = useCallback(
    (item) =>
      window.location &&
      ((item.isExact && window.location.pathname === item.path) ||
        window.location.pathname.startsWith(item.path)),
    []
  );
  return (
    <div className='header-menu-wrapper'>
      {HomeMenu.map((item, index) => (
        <ButtonBase
          className={`btns theme-transparent header-menu-btn theme-big${
            (getIsActiveMenuBtn(item) && ' is-active') || ''
          }`}
          key={`headerMenuBtnsKey${index}`}
          onClick={headerMenuClicked(item, index)}>
          {item.icon && <span className={item.icon} />}
          {item.name && <span className='px-1'>{t(item.name)}</span>}
          {item.childrens && item.childrens.length > 0 && (
            <span className={`mdi mdi-chevron-${(activeItemIndex === index && 'up') || 'down'}`} />
          )}
        </ButtonBase>
      ))}
      <PopoverComponent
        idRef='headerMenuPopoverRef'
        attachedWith={activeItemRef.current}
        handleClose={popoverCloseHandler}
        popoverClasses='popoverClassesheaderMenuPopover'
        component={<HeaderMenuPopoverComponent activeItem={activeItem} /> || <span />}
      />
    </div>
  );
};
