/* eslint-disable no-undef */
import { Button } from '@material-ui/core';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
const transaltionPath = 'CalendarmMenuComponent.';

export const CalendarmMenuComponent = memo(() => {
  const parentTranslationPath = 'HeaderView';
  const { t } = useTranslation(parentTranslationPath);

  return (
    <div className='cards'>
      <div className='card-content-Calendar'>
        {/* <Spinner isActive={isLoading} isAbsolute /> */}
        <div className='d-flex-column-center main-title-staus'>
          <span className='mx-3'>{t(`${transaltionPath}your-Calendar`)}</span>
        </div> 
      </div>
      <div className='card-content-CalendarmMenuComponent'>
        <div className='CalendarmMenu-wraper'>
          <div className='description'>
            <div className='main-title'>Meeting With Abdel Azeez</div>
            <div className='sub-title'>you have to day meeting with Abdel Azeez GM</div>
          </div>
          <div>
            <div className='time'>8:30 AM</div>
            <div className='date'>4/5/2021</div>
          </div>
        </div>
        <div className='separator-h' />
        {
          ////////////////////////////////////////////////////////////////////////////////////////
        }
        <div className='CalendarmMenu-wraper'>
          <div className='description'>
            <div className='main-title'>Hand over of rented equipment</div>
            <div className='sub-title'>you have over of rented equipment with Abdel Azeez </div>
          </div>
          <div>
            <div className='time'>7:05 AM</div>
            <div className='date'>4/5/2018</div>
          </div>
        </div>
        <div className='separator-h' />
        <div className='CalendarmMenu-wraper'>
          <div className='description'>
          <div className='main-title'>Signing Contracts </div>
            <div className='sub-title'>Contracts Wite Clinet</div>
          </div>
          <div>
            <div className='time'>3:41 AM</div>
            <div className='date'>7/9/2020</div>
          </div>
        </div>
        <div className='separator-h' />
        <div className='CalendarmMenu-wraper'>
          <div className='description'>
            <div className='main-title'>Start Advertisement Project</div>
            <div className='sub-title'>palning to Start Advertisement Project</div>
          </div>
          <div>
            <div className='time'>5:55 AM</div>
            <div className='date'>9/4/2021</div>
          </div>
        </div>
        <div className='separator-h' />
        <div className='CalendarmMenu-wraper'>
          <div className='description'>
            <div className='main-title'>Meeting With Malek Hamad</div>
            <div className='sub-title'>you have to day meeting with Abdel Azeez GM</div>
          </div>
          <div>
            <div className='time'>11:25 AM</div>
            <div className='date'>4/4/2019</div>
          </div>
        </div>
        <div className='separator-h' />
        {
          ////////////////////////////////////////////////////////////////////////////////////////
        }
        <div className='CalendarmMenu-bbt' >
        <Button className='w-100 '>
          <span className='create-states'>{t(`${transaltionPath}see-your-all-Calendar`)}</span>
        </Button></div>
        <div className='separator-h' />
        <div />
      </div>
    </div>
  );
});
CalendarmMenuComponent.displayName = 'CalendarmMenuComponent';
CalendarmMenuComponent.propTypes = {};
