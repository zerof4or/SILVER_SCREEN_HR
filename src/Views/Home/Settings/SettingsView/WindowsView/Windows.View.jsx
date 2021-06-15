import { Button } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalHistory } from '../../../../../Helpers';
import './Windows.Style.scss';

const parentTranslationPath = 'WindowsView';

export const WindowsView = () => {
  const { t } = useTranslation(parentTranslationPath);
  console.log('t: ', t);
  return (
    <div className='View-WindowsView mt-5'>
      <Button className='View-card' onClick={() => GlobalHistory.push('/home/settings/Languages')}>
        <div className='card-img'>
          <img
            src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/language-512.png'
            alt='tag-curve-img'
            className='card-img'
          />
        </div>
        <div className='card-title-wraper'>
          <div className='card-main-title'>Languages</div>
          <div className='card-sub-title'>change your system to another view Languages</div>
        </div>
      </Button>
      <Button
        className='View-card'
        onClick={() => GlobalHistory.push('/home/settings/BackgroundSettings')}>
        <div className='card-img'>
          <img
            src='https://img.icons8.com/carbon-copy/2x/image.png'
            alt='tag-curve-img'
            className='card-img'
          />
        </div>
        <div className='card-title-wraper'>
          <div className='card-main-title'>Login Background Photos</div>
          <div className='card-sub-title'>change your Login to another Background Photos</div>
        </div>
      </Button>
      <Button className='View-card'>
        <div className='card-img'>
          <img
            src='https://icon-library.com/images/profile-icon-png/profile-icon-png-20.jpg'
            alt='tag-curve-img'
            className='card-img'
          />
        </div>
        <div className='card-title-wraper'>
          <div className='card-main-title'>Profile</div>
          <div className='card-sub-title'>change your Profile to another detales</div>
        </div>
      </Button>
      <Button className='View-card'>
        <div className='card-img'>
          <img
            src='https://image.flaticon.com/icons/png/512/22/22966.png'
            alt='tag-curve-img'
            className='card-img'
          />
        </div>
        <div className='card-title-wraper'>
          <div className='card-main-title'>my location</div>
          <div className='card-sub-title'>show your location </div>
        </div>
      </Button>
      <Button className='View-card'>
        <div className='card-img'>
          <img
            src='https://icons.veryicon.com/png/o/miscellaneous/decon/menu-hide-b.png'
            alt='tag-curve-img'
            className='card-img'
          />
        </div>
        <div className='card-title-wraper'>
          <div className='card-main-title'>Menu</div>
          <div className='card-sub-title'>show your location </div>
        </div>
      </Button>
    </div>
  );
};
