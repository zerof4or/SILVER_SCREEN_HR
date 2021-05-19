import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CollapseComponent } from '../../../../../../Components';
import { NotificationsMenuComponent } from '../NotificationsMenu/NotificationsMenu.Component';
import { useOnClickOutside } from '../../../../../../Hubs';
import { CalendarmMenuComponent } from '../CalendarmMenu/CalendarmMenu.Component';
export const HeaderActionsComponent = ({ AllClose, CloseCollapse }) => {
  const [isOpenMenu, setIsOpenMenu] = useState({
    notifications: false,
    calendar: false,
  });
  const statesRef = useRef(null);
  const calendarRef = useRef(null);
  const NotificationsClicked = () => {
    setIsOpenMenu((item) => ({ ...item, notifications: !item.notifications, calendar: false }));
    AllClose();
 
  };

  const CalendarClicked = () => {
    setIsOpenMenu((item) => ({ ...item, calendar: !item.calendar, notifications: false }));
    AllClose();

  };
  useOnClickOutside(statesRef, () => {
    if (isOpenMenu.notifications)
      setIsOpenMenu((item) => ({
        ...item,
        notifications: false,
      }));
  });
  useOnClickOutside(statesRef, () => {
    if (isOpenMenu.calendar)
      setIsOpenMenu((item) => ({
        ...item,
        calendar: false,
      }));
  });
  useEffect(() => {
    if(CloseCollapse)
    setIsOpenMenu((item) => ({ ...item, calendar: false, notifications: false }));
  }, [CloseCollapse])
 

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
      <div className='header-action-item-wrapper' ref={calendarRef}>
        <Badge className='header-action-item' badgeContent={5} max={9}>
          <ButtonBase onClick={CalendarClicked}>
            <span className='mdi mdi-calendar-month-outline' />
          </ButtonBase>
        </Badge>
        <CollapseComponent
          isOpen={isOpenMenu.calendar}
          top={60}
          isAbsolute
          classes='calendar-menu-collapse-wrapper'
          component={<CalendarmMenuComponent />}
        />
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
        <Badge className='header-action-item' badgeContent={5} max={9}>
          <ButtonBase onClick={NotificationsClicked}>
            <span className='mdi mdi-bell' />
          </ButtonBase>
        </Badge>
        <CollapseComponent
          isOpen={isOpenMenu.notifications}
          top={60}
          isAbsolute
          classes='notifications-menu-collapse-wrapper'
          component={<NotificationsMenuComponent />}
        />
      </div>
    </div>
  );
};
HeaderActionsComponent.propTypes = {
  AllClose: PropTypes.func.isRequired,
  CloseCollapse: PropTypes.bool.isRequired,
};
