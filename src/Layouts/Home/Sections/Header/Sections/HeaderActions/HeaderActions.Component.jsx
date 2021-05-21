import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CollapseComponent } from '../../../../../../Components';
import { NotificationsMenuComponent } from '../NotificationsMenu/NotificationsMenu.Component';
import { useOnClickOutside } from '../../../../../../Hubs';
import { CalendarmMenuComponent } from '../CalendarmMenu/CalendarmMenu.Component';
import { MessagesMenuComponent } from '../MessagesMenu/MessagesMenu.Component';
import { TaskMenu } from '../TaskMenu/TaskMenu.Component';
export const HeaderActionsComponent = ({ AllClose, CloseCollapse }) => {
  const [isOpenMenu, setIsOpenMenu] = useState({
    notifications: false,
    calendar: false,
    TaskMenu: false,
    Messages: false,
  });
  const notificationsRef = useRef(null);
  const calendarRef = useRef(null);
  const MessagesRef = useRef(null);
  const TaskMenuRef = useRef(null);

  const NotificationsClicked = () => {
    setIsOpenMenu((item) => ({
      ...item,
      notifications: !item.notifications,
      calendar: false,
      Messages: false,
      TaskMenu: false,
    }));
    AllClose();
  };

  const MessagesClicked = () => {
    setIsOpenMenu((item) => ({
      ...item,
      Messages: !item.Messages,
      calendar: false,
      notifications: false,
      TaskMenu: false,
    }));
    AllClose();
  };
  const TaskMenuClicked = () => {
    setIsOpenMenu((item) => ({
      ...item,
      Messages: false,
      calendar: false,
      notifications: false,
      TaskMenu: !item.TaskMenu,
    }));
    AllClose();
  };
  const CalendarClicked = () => {
    setIsOpenMenu((item) => ({
      ...item,
      calendar: !item.calendar,
      notifications: false,
      Messages: false,
      TaskMenu: false,
    }));
    AllClose();
  };
  useOnClickOutside(notificationsRef, () => {
    if (isOpenMenu.notifications)
      setIsOpenMenu((item) => ({
        ...item,
        notifications: false,
      }));
  });
  useOnClickOutside(calendarRef, () => {
    if (isOpenMenu.calendar)
      setIsOpenMenu((item) => ({
        ...item,
        calendar: false,
      }));
  });

  useOnClickOutside(MessagesRef, () => {
    if (isOpenMenu.Messages)
      setIsOpenMenu((item) => ({
        ...item,
        Messages: false,
      }));
  });
  useOnClickOutside(TaskMenuRef, () => {
    if (isOpenMenu.TaskMenu)
      setIsOpenMenu((item) => ({
        ...item,
        TaskMenu: false,
      }));
  });
  useEffect(() => {
    if (CloseCollapse)
      setIsOpenMenu((item) => ({
        ...item,
        calendar: false,
        notifications: false,
        TaskMenu: false,
        Messages: false,
      }));
  }, [CloseCollapse]);

  return (
    <div className='header-actions-wrapper childs-wrapper' ref={notificationsRef}>
      <div className='header-action-item-wrapper'>
        <Badge className='header-action-item' badgeContent={0} max={9}>
          <ButtonBase>
            <span className='mdi mdi-plus' />
          </ButtonBase>
        </Badge>
      </div>
      <div className='header-action-item-wrapper'>
        
        <Badge className='header-action-item' badgeContent={32} max={9}>
          <ButtonBase onClick={TaskMenuClicked}>
            <span className='mdi mdi-checkbox-multiple-marked' />
            
          </ButtonBase>
          <CollapseComponent
          isOpen={isOpenMenu.TaskMenu}
          top={60}
          isAbsolute
          classes='TaskMenu-menu-collapse-wrapper'
          component={<TaskMenu/>}
        />
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
      <div className='header-action-item-wrapper' ref={MessagesRef}>
        <Badge className='header-action-item' badgeContent={1} max={9}>
          <ButtonBase onClick={MessagesClicked}>
            <span className='mdi mdi-forum' />
          </ButtonBase>
        </Badge>
        <CollapseComponent
          isOpen={isOpenMenu.Messages}
          top={60}
          isAbsolute
          classes='calendar-menu-collapse-wrapper'
          component={<MessagesMenuComponent />}
        />
      </div>
      <div className='header-action-item-wrapper'>
        <Badge className='header-action-item' badgeContent={0} max={9}>
          <ButtonBase>
            <span className='mdi mdi-video' />
          </ButtonBase>
        </Badge>
      </div>
      <div className='header-action-item-wrapper'>
        <Badge className='header-action-item' badgeContent={0} max={9}>
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
