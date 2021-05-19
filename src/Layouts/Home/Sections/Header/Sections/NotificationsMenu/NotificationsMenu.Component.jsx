/* eslint-disable no-undef */
import { Button } from '@material-ui/core';
import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';
import LogoImg from '../../../../../../Assets/Images/Defaults/emp100.jpg';
import employeeImg3 from '../../../../../../Assets/Images/Defaults/emp3.jpg';
import employeeImg4 from '../../../../../../Assets/Images/Defaults/emp4.jpg';
import employeeImg5 from '../../../../../../Assets/Images/Defaults/emp5.jpg';
import employeeImg6 from '../../../../../../Assets/Images/Defaults/emp6.jpg';
const transaltionPath = 'NotificationsMenuComponent.';
export const NotificationsMenuComponent = memo(() => {
  const parentTranslationPath = 'HeaderView';
  const { t } = useTranslation(parentTranslationPath);
  // const loginResponse = useSelector((state) => state.LoginReducers.loginResponse);
  // const [isLoading, setIsLoading] = useState(false); , useState

  return (
    <div className='cards'>
      <div className='card-content-'>
        {/* <Spinner isActive={isLoading} isAbsolute /> */}
        <div className='d-flex-column-center main-title-staus'>
          <span className='mx-3'>{t(`${transaltionPath}Notification`)}</span>
        </div>
      </div>
      <div className='card-content-NotificationsMenuComponent'>
        <div className='Notification-wraper'>
          <img src={LogoImg} alt={t(`silver-screen`)} className='img-Notification-user' />
          <div className='Notification-from'>
            <div className='d-inline-flex'>
              {' '}
              <div className='Notification-user'> Malek Ziayd</div>{' '}
              <div className='Notification-msg'> feed back of projct</div>{' '}
            </div>
            <span className='Notification-time'> 4 days ago</span>
          </div>
          <span className='mdi mdi-circle-medium status' />
        </div>
        <div className='separator-h' />
        {
          ////////////////////////////////////////////////////////////////////////////
        }
        <div className='Notification-wraper'>
          <img src={employeeImg3} alt={t(`silver-screen`)} className='img-Notification-user' />
          <div className='Notification-from'>
            <div className='d-inline-flex'>
              {' '}
              <div className='Notification-user'> Anwar Asif</div>
              {''}
              <div className='Notification-msg'> feed back of assest</div>{' '}
            </div>
            <span className='Notification-time'> 4 days ago</span>
          </div>
          <span className='mdi mdi-circle-medium status' />
        </div>
        <div className='separator-h' />
        <div className='Notification-wraper'>
          <img src={employeeImg4} alt={t(`silver-screen`)} className='img-Notification-user' />
          <div className='Notification-from'>
            <div className='d-inline-flex'>
              {' '}
              <div className='Notification-user'>Tamer yesr</div>{' '}
              <div className='Notification-msg'> Notification</div>{' '}
            </div>
            <span className='Notification-time'> 4 days ago</span>
          </div>
          <span className='mdi mdi- status' />
        </div>
        <div className='separator-h' />
        <div className='Notification-wraper'>
          <img src={employeeImg5} alt={t(`silver-screen`)} className='img-Notification-user' />
          <div className='Notification-from'>
            <div className='d-inline-flex'>
              {' '}
              <div className='Notification-user'>Mohammad Mohy </div>
              {''}
              <div className='Notification-msg'> feed back of projct</div>{' '}
            </div>
            <span className='Notification-time'> 4 days ago</span>
          </div>
          <span className='mdi mdi-circle-medium status' />
        </div>
        <div className='separator-h' />
        <div className='Notification-wraper'>
          <img src={employeeImg6} alt={t(`silver-screen`)} className='img-Notification-user' />
          <div className='Notification-from'>
            <div className='d-inline-flex'>
              {' '}
              <div className='Notification-user'>Khalil Kabalan</div>
              {''}
              <div className='Notification-msg'> feed back of projct</div>{' '}
            </div>
            <span className='Notification-time'> 4 days ago</span>
          </div>
          <span className='mdi mdi-circle-medium status' />
        </div>
        <div className='separator-h' />
        {
          ////////////////////////////////////////////////////////////////////////////
        }
        <Button className='w-100'>
          {' '}
          <span className='create-states'>{t(`${transaltionPath}see-your-all-Notification`)}</span>
        </Button>
        <div className='separator-h' />

        <div />
      </div>
    </div>
  );
});
NotificationsMenuComponent.displayName = 'NotificationsMenuComponent';
NotificationsMenuComponent.propTypes = {};
