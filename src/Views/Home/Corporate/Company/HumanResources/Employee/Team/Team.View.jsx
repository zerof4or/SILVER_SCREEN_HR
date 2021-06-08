import { Button, ButtonBase, Fab } from '@material-ui/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FilterButtonComponent, Inputs} from '../../../../../../../Components';
import PopoverComponent from '../../../../../../../Components/Popover/Popover.Component';
import { ContactTypeEnum } from '../../../../../../../Enums';
import './Team.Style.scss';

const parentTranslationPath = 'TeamView';
// const translationPath = '';

export const TeamView = () => {
  const { t } = useTranslation(parentTranslationPath);
  console.log('t: ', t);
  // const [isLoading, setIsLoading] = useState(false);
  const AVATARS = [
    ContactTypeEnum.employee.defaultImg,
    ContactTypeEnum.employee2.defaultImg,
    ContactTypeEnum.employee3.defaultImg,
    ContactTypeEnum.employee4.defaultImg,
    ContactTypeEnum.employee5.defaultImg,
    ContactTypeEnum.employee6.defaultImg,
    ContactTypeEnum.employee7.defaultImg,
  ];
  const [ActionsPopover, setActionsPopover] = useState(null);
  const Names = [
    'Adam Alex',
    'Aaron Ben',
    'Carl  Dan',
    'David  Edward',
    'Fred  Frank',
    'George  Hal',
    'Knutson Lawless',
    'Lawicki  Mccord',
    'McCormack  Miller',
    'Myers  Nugent',
    'Ortiz  Orwig',
    'Ory  Pais',
  ];

  const pickRandom = (array) => {
    if (!Array.isArray(array)) return undefined;
    return array[Math.floor(Math.random() * array.length)];
  };
  const actionsPopoverClickedHandler = (event) => {
    setActionsPopover(event.currentTarget);
  };
  const actionsPopoverCloseHandler = () => {
    setActionsPopover(null);
  };
  return (
    <div className='view-wrapper'>
            <div className='Sub-InnerHeader'>
        <div className='d-inline-flex'>
          <div className='dots-vertical mx-1 '>
            <ButtonBase onClick={actionsPopoverClickedHandler}>
              <span className='mdi mdi-dots-vertical' />
            </ButtonBase>
            <PopoverComponent
              idRef='headerActionsPopoverRef'
              attachedWith={ActionsPopover}
              popoverClasses='header-actions-popover-wrapper'
              handleClose={actionsPopoverCloseHandler}
              component={
                <div className='menu-dots-wraper'>
                  <div className='mx-2 p-1'>
                    <Button>Export filter results... </Button>{' '}
                  </div>
                  <div className='mx-2 p-1'>
                    <Button>Import Contacts </Button>{' '}
                  </div>
                  <div className='mx-2 p-1'>
                    <Button>Show on map </Button>{' '}
                  </div>
                  <div className='mx-2 p-1'>
                    <Button>Print </Button>{' '}
                  </div>
                  <div className='mx-2 p-1'>
                    <Button>Contact Sync </Button>{' '}
                  </div>
                  <div className='mx-2 p-1'>
                    <Button> Merge duplicates </Button>{' '}
                  </div>
                  <div className='mx-2 p-1'>
                    <Button>Export to MailChimp </Button>{' '}
                  </div>
                </div>
              }
            />
          </div>
          <div>
            <div className='mx-2'>
              <FilterButtonComponent
                CollapseComponentclasses='TabsFilter'
              />
            </div>
          </div>

        </div>
        <div className='attendance-check-search'>
          <div className='search-text'>
            <Inputs
              idRef='searchEmployeesRef'
            //  onInputChanged={(event) => FilterHandler(event)}
              endAdornment={<span className='mdi mdi-magnify px-2' />}
              wrapperClasses='theme-primary'
              fieldClasses='inputs theme-primary ml-2'
            />
          </div>
        </div>
      </div>
      <div className='Team-View-wraperr'>
        <div className='card-container-parent'>
          <div className='card-wraper'>
            {[1, 2, 3, 1, 2].map((item, index) => (
              <div className='card-container' key={`teamViewCardKey${index + 1}`}>
                <div className='card-header'>
                  <div className='card-header-title'>
                    <span className='text-title'>Team (Team)</span>
                    <Fab size='small' aria-label='Edit' className='Edit'>
                      <span className='mdi mdi-square-edit-outline' />
                    </Fab>
                  </div>
                </div>
                <div className='card-inner-container'>
                  {[1, 2, 3, 1, 2, 2].map((subItem, subIndex) => (
                    <div
                      className='small-card'
                      key={`teamViewInnerCardKey${index + 1}${subIndex + 0.5}`}>
                      <div className='small-card-container'>
                        <div className=''>
                          <img src={pickRandom(AVATARS)} alt='tag-curve-img' className='user-img' />
                        </div>
                        <div className='names-container'>
                          <div className='main-text'>{pickRandom(Names)}</div>
                          <div className='scaend-text'>{pickRandom(Names)}</div>
                        </div>
                        <div className='actions-container'>
                          <div className='act-bbt'>
                            <Fab size='small' aria-label='Edit' className=''>
                              <span className='mdi mdi-square-edit-outline' />
                            </Fab>
                          </div>
                          <div className=''>
                            <Fab size='small' aria-label='Edit' className=''>
                              <span className='mdi mdi-window-close Deleted ' />
                            </Fab>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
