// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { Button, ButtonBase, Paper, Tab, Tabs } from '@material-ui/core';
import MyAttendance from '../../../../../../StaticJOSN/MyAttendance.json';
import EmployeeAttendance from '../../../../../../StaticJOSN/EmployeeAttendance.json';
import './Attendance.Style.scss';
import { MyAttendanceTabelView } from './AttendanceTypeView/MyAttendanceTabel.View';
import { Sorterletters } from '../../../../../../Components/Sorterletters/Sorterletters.Component';
import {
  DialogComponent,
  FilterButtonComponent,
  InnerHeaderComponent,
  Inputs,
} from '../../../../../../Components';
import { NoSearchResultComponent } from '../../../../../../Components/NoSearchResultComponent/NoSearchResultComponent';
import { EmployeeAttendanceTabel } from './AttendanceTypeView/EmployeeAttendanceTabel';
const parentTranslationPath = 'AttendanceView';
const translationPath = '';
export const AttendanceView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [selectedEmployeesCount, setSelectedEmployeesCount] = useState(0);
  const [employees, setEmployees] = useState(MyAttendance);
  const [open, setopen] = useState(false);
  const [totalCount, settotalCount] = useState('');
  const [activeSideButton, setActiveSideButton] = useState(1);
  const [filter] = useState({
    pageIndex: 1,
    pageSize: 60,
  });

  const activeSideButtonChange = useCallback((value) => {
    setActiveSideButton(value);
    if (value === 2) setEmployees(EmployeeAttendance);
    else {
      setEmployees(MyAttendance);
    }
  }, []);
  const close = () => {
    setopen(false);
  };
  const FilterHandler = (value) => {
    const result = MyAttendance.result.filter((item) =>
      item.name.toLowerCase().includes(value.target.value.toLowerCase())
    );
    setEmployees({
      result: result,
      totalCount: result.length,
    });
    settotalCount(result.length);
  };

  const FilterHandlerEmployee = (value) => {
    const result = EmployeeAttendance.result.filter((item) =>
      item.Employeename.toLowerCase().includes(value.target.value.toLowerCase())
    );
    setEmployees({
      result: result,
      totalCount: result.length,
    });
    settotalCount(result.length);
  };

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [sideList] = useState([
    {
      key: 1,
      value: t('MyAttendance'),
    },
    {
      key: 2,
      value: t('EmpolyeeAttendance'),
    },
    {
      key: 3,
      value: t('AttendanceSettings'),
    },
  ]);

  return (
    <div className='AttendanceView w-100'>
      <InnerHeaderComponent
        component={
          <>
            <div>
              {sideList.map((item, index) => (
                <ButtonBase
                  className={`header-side-menu-button ${
                    item.key === activeSideButton ? 'is-active' : ''
                  }`}
                  onClick={() => activeSideButtonChange(item.key)}
                  key={`headerSideMenuBtnKey${index + 1}`}>
                  {item.value}
                </ButtonBase>
              ))}
            </div>
          </>
        }
      />
      <div className='Sub-InnerHeader'>
        <div className='d-inline-flex'>
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
          <div className='mx-1'>
            <Sorterletters />
          </div>
        </div>

        <div className='attendance-check-search'>
          <div className='bbt-primary space'>
            <ButtonBase>
              <span className='mdi mdi-account-plus ' />
              &nbsp; Add new employee
            </ButtonBase>
          </div>
          <div className='search-text'>
            <Inputs
              idRef='searchEmployeesRef'
              onInputChanged={(event) =>
                value === 2 ? FilterHandlerEmployee(event) : FilterHandler(event)
              }
              endAdornment={<span className='mdi mdi-magnify px-2' />}
              wrapperClasses='theme-primary'
              fieldClasses='inputs theme-primary ml-2'
            />
          </div>
        </div>
      </div>
      <div className='AttendanceView-wraper'>
        <div className='AttendanceViewTabelView-wraper'>
          {(totalCount === 0 && <NoSearchResultComponent />) ||
            (activeSideButton === 1 && (
              <MyAttendanceTabelView
                data={employees}
                parentTranslationPath={parentTranslationPath}
                translationPath={translationPath}
                filter={filter}
                // onSelectedRowsCountChanged={(newValue) => setSelectedEmployeesCount(newValue)}
              />
            )) || (
              <EmployeeAttendanceTabel
                data={employees}
                parentTranslationPath={parentTranslationPath}
                translationPath={translationPath}
                filter={filter}
                // onSelectedRowsCountChanged={(newValue) => setSelectedEmployeesCount(newValue)}
              />
            )}
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
