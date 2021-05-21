/* eslint-disable no-undef */
import { Button } from '@material-ui/core';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
const transaltionPath = 'TaskMenu.';

export const TaskMenu = memo(() => {
  const parentTranslationPath = 'HeaderView';
  const { t } = useTranslation(parentTranslationPath);

  return (
    <div className='cards'>
      <div className='card-content-TaskMenu'>
        {/* <Spinner isActive={isLoading} isAbsolute /> */}
        <div className='d-flex-column-center main-title-staus'>
          <span className='mx-3'>{t(`${transaltionPath}your-Task`)}</span>
        </div>
      </div>
      <div className='card-content-CalendarmMenuComponent'>
        <div className='CalendarmMenu-wraper'>
          <div className='task-number'>01</div>
          <div className='description'>
            <div className='main-title'>Meeting With Abdel Azeez</div>
            <div className='sub-title'>you have to day meeting with Abdel Azeez GM</div>
          </div>
        </div>
        <div className='separator-h' />

        <div className='CalendarmMenu-bbt'>
          <Button className='w-100 '>
            <span className='create-states'>{t(`${transaltionPath}see-your-all-Task`)}</span>
          </Button>
        </div>
        <div className='separator-h' />
        <div />
      </div>
    </div>
  );
});
TaskMenu.displayName = 'TaskMenu';
TaskMenu.propTypes = {};
