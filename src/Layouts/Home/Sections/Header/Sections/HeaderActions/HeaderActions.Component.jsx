import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CollapseComponent } from '../../../../../../Components';
import { NotificationsMenuComponent } from '../NotificationsMenu/NotificationsMenu.Component';
import { useOnClickOutside } from '../../../../../../Hubs';
export const HeaderActionsComponent = () => {
  const [isOpenMenu, setIsOpenMenu] = useState({
    notifications: false,
  });
  const statesRef = useRef(null);
  console.log('statesRef: ', statesRef);
  const NotificationsClicked = () => {
    setIsOpenMenu((item) => ({ ...item, notifications: !item.notifications }));
  };

  useOnClickOutside(statesRef, () => {
    if (isOpenMenu.notifications)
      setIsOpenMenu((item) => ({
        ...item,
        notifications: false,
      }));
  });

  return (
    <div className='header-actions-wrapper childs-wrapper'>
      <div className='header-action-item-wrapper'>
        <Badge className='header-action-item' badgeContent={54} max={9}>
          <ButtonBase>
            <span className='mdi mdi-plus' />
          </ButtonBase>
        </Badge>
      </div>
      <div className='header-action-item-wrapper'>
        <Badge className='header-action-item' badgeContent={32} max={9}>
          <ButtonBase>
            <span className='mdi mdi-checkbox-multiple-marked' />
          </ButtonBase>
        </Badge>
      </div>
      <div className='header-action-item-wrapper'>
        <Badge className='header-action-item' badgeContent={16} max={9}>
          <ButtonBase>
            <span className='mdi mdi-calendar-month-outline' />
          </ButtonBase>
        </Badge>
      </div>
      <div className='header-action-item-wrapper'>
        <Badge className='header-action-item' badgeContent={27} max={9}>
          <ButtonBase>
            <span className='mdi mdi-forum' />
          </ButtonBase>
        </Badge>
      </div>
      <div className='header-action-item-wrapper'>
        <Badge className='header-action-item' badgeContent={6} max={9}>
          <ButtonBase>
            <span className='mdi mdi-video' />
          </ButtonBase>
        </Badge>
      </div>
      <div className='header-action-item-wrapper'>
        <Badge className='header-action-item' badgeContent={24} max={9}>
          <ButtonBase>
            <span className='mdi mdi-email' />
          </ButtonBase>
        </Badge>
      </div>
      <div className='header-action-item-wrapper'>
        <Badge className='header-action-item' badgeContent={4} max={9}>
          <ButtonBase onClick={NotificationsClicked}>
            <span className='mdi mdi-bell' />
          </ButtonBase>
        </Badge>
      </div>

      <CollapseComponent
        isOpen={isOpenMenu.notifications}
        top={60}
        isAbsolute
        classes='notifications-menu-collapse-wrapper'
        component={<NotificationsMenuComponent />}
      />
    </div>
  );
};
HeaderActionsComponent.propTypes = { NotificationsClicked: PropTypes.func.isRequired };
