/* eslint-disable no-unused-vars */
import { Button, ButtonBase, Paper, Tab, Tabs } from '@material-ui/core';
import React, { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  FilterButtonComponent,
  InnerHeaderComponent,
  Inputs,
  LocationButtonComponent,
  SorterLettersButtonComponent,
} from '../../../../../../../../Components';
import PopoverComponent from '../../../../../../../../Components/Popover/Popover.Component';
import { ContactTypeEnum } from '../../../../../../../../Enums';
import { GlobalHistory } from '../../../../../../../../Helpers';
import './Styles/Department.Style.scss';
const parentTranslationPath = 'ContactsView';
const translationPath = '';

export const DepartmentView = () => {
  const { t } = useTranslation(parentTranslationPath);
  const pathName = window.location.pathname.split('/home/')[1].split('/view')[0];
  const [isLoading, setIsLoading] = useState(false);
  const [open, setopen] = useState(false);
  const [ActionsPopover, setActionsPopover] = useState(null);
  const [activeSideButton, setActiveSideButton] = useState(1);
  const count = [
    1, 2, 1, 2, 1, 2, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
    2, 3, 2, 3,
  ];
  const AVATARS = [
    ContactTypeEnum.employee.defaultImg,
    ContactTypeEnum.employee2.defaultImg,
    ContactTypeEnum.employee3.defaultImg,
    ContactTypeEnum.employee4.defaultImg,
    ContactTypeEnum.employee5.defaultImg,
    ContactTypeEnum.employee6.defaultImg,
    ContactTypeEnum.employee7.defaultImg,
  ];

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
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const pickRandom = (array) => {
    if (!Array.isArray(array)) return undefined;
    return array[Math.floor(Math.random() * array.length)];
  };
  // const loginResponse = useSelector((state) => state.login.loginResponse);
  const actionsPopoverClickedHandler = (event) => {
    setActionsPopover(event.currentTarget);
  };
  const actionsPopoverCloseHandler = () => {
    setActionsPopover(null);
  };
  const close = () => {
    setopen(false);
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
                CollapseComponentView={
                  <div className='CollapseComponentView-wraper'>
                    <Paper square>
                      <Tabs
                        value={value}
                        indicatorColor='primary'
                        textColor='primary'
                        className='tab-filter'
                        onChange={handleChange}
                        aria-label='disabled tabs example'>
                        <Tab
                          label={
                            <div>
                              <div>
                                <span className='mdi mdi-star' />{' '}
                              </div>
                              <div> Favorite </div>
                            </div>
                          }
                        />
                        <Tab
                          label={
                            <div>
                              <div>
                                <span className='mdi mdi-account-tie' />
                              </div>
                              <div> Owners </div>
                            </div>
                          }
                        />
                        <Tab
                          label={
                            <div>
                              <div>
                                <span className='mdi mdi-account-search' />
                              </div>
                              <div> Advanced Filte</div>
                            </div>
                          }
                        />
                      </Tabs>
                    </Paper>
                  </div>
                }
              />
            </div>
          </div>
          <div className='mx-2'>
            <LocationButtonComponent CollapseComponentclasses='Location-menu-emp' />
          </div>
          <div className='mx-1'>
            <SorterLettersButtonComponent onViewChanged={(items) => console.log(items)} />
          </div>
        </div>
        <div className='attendance-check-search'>
          <div className='search-text'>
            <Inputs
              idRef='searchEmployeesRef'
              onInputChanged={(event) => console.log(event)}
              endAdornment={<span className='mdi mdi-magnify px-2' />}
              wrapperClasses='theme-primary'
              fieldClasses='inputs theme-primary ml-2'
            />
          </div>
        </div>
      </div>
      <div className='DepartmentView'>
        <div className='Department-wraper'>
          <div className='hedar-title'>Directors Mangment</div>
          <div className='cards-container'>
            {count.map((x, index) => (
              <div className='card-wraper' key={`count${index + 1}`}>
                <div className='card-container'>
                  <div className='card'>
                    <img src={pickRandom(AVATARS)} alt='tag-curve-img' className='card-img' />
                    <div className='card-title'>
                      <div className='card-title-container'>
                        <div className='des-title'>
                          <span>software</span>
                        </div>
                      </div>
                      <div className='name'>{pickRandom(Names)}</div>
                      <div className='title'>Mangment</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='Department-wraper'>
          <div className='hedar-title'>Marketing Department</div>
          <div className='cards-container'>
            {[1, 2, 3].map((x, index) => (
              <div className='card-wraper' key={`data${index + 1}`}>
                <div className='card-container'>
                  <div className='card'>
                    <img src={pickRandom(AVATARS)} alt='tag-curve-img' className='card-img' />
                    <div className='card-title'>
                      <div className='card-title-container'>
                        <div className='des-title'>
                          <span>software</span>
                        </div>
                      </div>
                      <div className='name'>{pickRandom(Names)}</div>
                      <div className='title'>Marketing</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='Department-wraper'>
          <div className='hedar-title'>Department Photography</div>
          <div className='cards-container'>
            {[1, 2].map((x, index) => (
              <div className='card-wraper' key={`wraper${index + 1}`}>
                <div className='card-container'>
                  <div className='card'>
                    <img src={pickRandom(AVATARS)} alt='tag-curve-img' className='card-img' />
                    <div className='card-title'>
                      <div className='card-title-container'>
                        <div className='des-title'>
                          <span>software</span>
                        </div>
                      </div>
                      <div className='name'>{pickRandom(Names)}</div>
                      <div className='title'>Photography</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
