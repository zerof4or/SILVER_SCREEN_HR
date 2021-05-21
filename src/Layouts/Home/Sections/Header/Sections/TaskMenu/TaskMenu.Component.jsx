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
      <div className='card-content-TaskMenuComponent'>
        <div className='TaskMenu-wraper'>
          <div className='task-number'>01</div>
          <div className='description'>
            <div className='main-title'>
              {' '}
              <div className='task-titel'>Start Marketing Campaign for ABC company</div>
              <div className='title-type' style={{ color: '#000000', backgroundColor: '#ffde38' }}>
                in progress
              </div>
            </div>
            <div className='sub-title'>you have to day meeting with Abdel Azeez GM</div>
            <div className='loder-line'>
              <div className='line-procces' style={{ width: '37%' }} />
            </div>
            <div className='time-description'>
              <div className=''>5/7</div>
              <div className=''>4 hours Remainung</div>
            </div>
          </div>
        </div>
        <div className='separator-h' />
        {
          ////////////////////////////////////////////////
        }
        <div className='TaskMenu-wraper'>
          <div className='task-number'>02</div>
          <div className='description'>
            <div className='main-title'>
              {' '}
              <div className='task-titel'>Desgine web company</div>
              <div
                className='title-type'
                style={{ color: '#ffffff', backgroundColor: '#43d377cc' }}>
                Complted
              </div>
            </div>
            <div className='sub-title'>done tahnk you</div>
            <div className='loder-line'>
              <div className='line-procces' style={{ width: '95%' }} />
            </div>
            <div className='time-description'>
              <div className=''>5/7</div>
              <div className=''>2 hours Remainung</div>
            </div>
          </div>
        </div>
        <div className='separator-h' />

        <div className='TaskMenu-wraper'>
          <div className='task-number'>03</div>
          <div className='description'>
            <div className='main-title'>
              {' '}
              <div className='task-titel'>Desgine databace orcale</div>
              <div
                className='title-type'
                style={{ color: '#ffffff', backgroundColor: '#cf2525cc' }}>
                Not Complted
              </div>
            </div>
            <div className='sub-title'>not commiled the task of this sprint</div>
            <div className='loder-line'>
              <div className='line-procces' style={{ width: '10%' }} />
            </div>
            <div className='time-description'>
              <div className=''>2/10</div>
              <div className=''>15 hours Remainung</div>
            </div>
          </div>
        </div>
        <div className='separator-h' />
        {
          ////////////////////////////////////////////////
        }

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
