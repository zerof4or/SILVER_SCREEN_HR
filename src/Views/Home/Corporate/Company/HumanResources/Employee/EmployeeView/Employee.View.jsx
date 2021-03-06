import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonBase, Paper, Tab, Tabs } from '@material-ui/core';
import ContactsDummyData from '../../../../../../../StaticJOSN/ContactsDummyData.json';
import './Employee.Style.scss';
import { EmployeeTabelView } from './EmployeeTypeView/EmployeeTabel.View';
import {
  DialogComponent,
  FilterButtonComponent,
  Inputs,
  LocationButtonComponent,
  Spinner,
} from '../../../../../../../Components';
import { NoSearchResultComponent } from '../../../../../../../Components/NoSearchResultComponent/NoSearchResultComponent';
import DataView from '../../../../../../../Components/DataView/DataView.Component';
import { EmployeeCard } from './EmployeeTypeView/EmployeeCard.View';
import PopoverComponent from '../../../../../../../Components/Popover/Popover.Component';
import { SorterLettersButtonComponent } from '../../../../../../../Components/Buttons/SorterLettersButtonComponent';
const parentTranslationPath = 'EmployeeView';
const translationPath = '';
export const EmployeeView = () => {
  const { t } = useTranslation(parentTranslationPath);
  const [selectedEmployeesCount, setSelectedEmployeesCount] = useState(0);
  const [disabledOpations, setdisabledOpations] = useState(true);
  const [ViewType, setViewType] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [employees, setEmployees] = useState(ContactsDummyData);
  const [open, setopen] = useState(false);
  const [ActionsPopover, setActionsPopover] = useState(null);
  const [filter] = useState({
    pageIndex: 1,
    pageSize: 60,
  });
  const actionsPopoverClickedHandler = (event) => {
    setActionsPopover(event.currentTarget);
  };
  const actionsPopoverCloseHandler = () => {
    setActionsPopover(null);
  };
  const close = () => {
    setopen(false);
  };
  const FilterHandler = (value) => {
    const result = ContactsDummyData.result.filter((item) =>
      item.name.toLowerCase().includes(value.target.value.toLowerCase())
    );
    console.log(result);
    setEmployees({
      result: result,
      totalCount: result.length,
    });
  };
  useEffect(() => {
    if (selectedEmployeesCount > 0) {
      setdisabledOpations(false);
    } else {
      setdisabledOpations(true);
    }
  }, [selectedEmployeesCount]);
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <div className='EmployeeHumanResourcesView w-100'>
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
              onInputChanged={(event) => FilterHandler(event)}
              endAdornment={<span className='mdi mdi-magnify px-2' />}
              wrapperClasses='theme-primary'
              fieldClasses='inputs theme-primary ml-2'
            />
          </div>
        </div>
      </div>
      <div className='Employee-wraper'>
        <Spinner isActive={isLoading} isAbsolute />
        <div className='action-contener  w-100'>
          <div className='action-tabel-wraper'>
            <div className='bbt-dark space'>
              <ButtonBase disabled={disabledOpations}>
                <span className='mdi mdi-account-plus ' />
                &nbsp; Assign to Project
              </ButtonBase>
            </div>
            <div className='bbt-dark space'>
              <ButtonBase disabled={disabledOpations}>
                <span className='mdi mdi-playlist-plus' />
                &nbsp;
              </ButtonBase>
            </div>
            <div className='bbt-dark space'>
              <ButtonBase disabled={disabledOpations}>
                <span className='mdi mdi-email' />
              </ButtonBase>
            </div>
            <div className='bbt-dark space'>
              <ButtonBase disabled={disabledOpations}>
                <span className='mdi mdi-forum' />
              </ButtonBase>
            </div>
            <div className='bbt-dark space'>
              <ButtonBase disabled={disabledOpations}>
                <span className='mdi mdi-video-plus' />
              </ButtonBase>
            </div>
            <div className='bbt-gray space'>
              <ButtonBase disabled={disabledOpations} onClick={() => setopen(true)}>
                <span className='mdi mdi-delete' />
              </ButtonBase>
            </div>
            <div className='bbt-gray space'>
              <ButtonBase disabled={disabledOpations}>
                <span className='mdi mdi-archive' />
              </ButtonBase>
            </div>
            <div className='total-title-wraper'>
              <span className='total-title'>Total contacts:</span>
              <span className='total-num px-1'>{`${selectedEmployeesCount} From   (   ${ContactsDummyData.totalCount}  )`}</span>
            </div>
          </div>
          <div className='DataView-bbt'>
            <DataView onViewChanged={(item) => setViewType(item.key)} />
          </div>
          <div className='bbt-primary space'>
            <ButtonBase>
              <span className='mdi mdi-account-plus ' />
              &nbsp; Add new employee
            </ButtonBase>
          </div>
          <div></div>
        </div>
        <div className='EmployeeTabelView-wraper'>
          {(employees.totalCount === 0 && <NoSearchResultComponent />) ||
            (ViewType !== 1 ? (
              <EmployeeCard
                data={employees}
                parentTranslationPath={parentTranslationPath}
                translationPath={translationPath}
                filter={filter}
              />
            ) : (
              <EmployeeTabelView
                data={employees}
                parentTranslationPath={parentTranslationPath}
                translationPath={translationPath}
                filter={filter}
                onSelectedRowsCountChanged={(newValue) => setSelectedEmployeesCount(newValue)}
              />
            ))}
        </div>
      </div>
      <DialogComponent
        titleText={t('DeleteDialog.confirm-message')}
        saveText={t('DeleteDialog.Confirm')}
        saveType='button'
        maxWidth='md'
        dialogContent={
          <div className='d-flex-column-center'>
            <span className='mdi mdi-close-octagon c-danger mdi-40px' />
            <span>{`${t('DeleteText')}  ${'name'}`}</span>
          </div>
        }
        saveClasses='btns theme-solid bg-danger w-100 mx-2 mb-2'
        isOpen={open}
        onSaveClicked={close}
        onCloseClicked={close}
        onCancelClicked={close}
      />
    </div>
  );
};
/* eslint-disable no-unused-vars */
//import { useSelector } from 'react-redux';
// const [isLoading, setIsLoading] = useState(false);
// const [activeSideButton, setActiveSideButton] = useState(1);
// const [activeItem, setActiveItem] = useState(null);
// const loginResponse = useSelector((state) => state.login.loginResponse);
//InnerHeaderComponent
