// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonBase, Paper, Tab, Tabs } from '@material-ui/core';
import EmployeeAttendance from '../../../../../../../StaticJOSN/EmployeeAttendance.json';
import EmployeeMonthlyAttendance from '../../../../../../../StaticJOSN/EmployeeMonthlyAttendance.json';
import './../Attendance.Style.scss';
import {
  DialogComponent,
  DubleButtonComponentComponent,
  FilterButtonComponent,
  Inputs,
  LocationButtonComponent,

} from '../../../../../../../Components';
import { NoSearchResultComponent } from '../../../../../../../Components/NoSearchResultComponent/NoSearchResultComponent';
import { EmployeeDayleAttendanceTabel } from './ComponentsViews/EmployeeDayleAttendanceTabel';
import { EmployeeMonthlyAttendanceTabel } from './ComponentsViews/EmployeeMonthlyAttendanceTabel';
import { SorterLettersButtonComponent } from '../../../../../../../Components/Buttons/SorterLettersButtonComponent';
const parentTranslationPath = 'EmployeeAttendanceTabel';
const translationPath = '';
export const EmployeeAttendanceTabel = () => {
  const { t } = useTranslation(parentTranslationPath);
  // eslint-disable-next-line no-unused-vars
  const [ViewType, setViewType] = useState(1);
  const [employees, setEmployees] = useState(EmployeeAttendance);
  const [open, setopen] = useState(false);
  const [filter] = useState({
    pageIndex: 1,
    pageSize: 60,
  });

  const close = () => {
    setopen(false);
  };
  const FilterHandlerMyAttendance = (value) => {
    const result = EmployeeAttendance.result.filter((item) =>
      item.Employeename.toLowerCase().includes(value.target.value.toLowerCase())
    );
    console.log(result);
    setEmployees({
      result: result,
      totalCount: result.length,
    });
  };
  const FilterHandlerMonthlyAttendance = (value) => {
    const result = EmployeeMonthlyAttendance.result.filter((item) =>
      item.Employeename.toLowerCase().includes(value.target.value.toLowerCase())
    );
    console.log(result);
    setEmployees({
      result: result,
      totalCount: result.length,
    });
  };

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (ViewType === 1) {
      setEmployees(EmployeeAttendance);
    } else setEmployees(EmployeeMonthlyAttendance);
  }, [ViewType]);

  return (
    <div className='AttendanceView w-100'>
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
          <div className='mx-2'>
            <LocationButtonComponent
              CollapseComponentclasses='Location-menu-emp'
            />
          </div>{' '}
          <div className='mx-2'>
            <DubleButtonComponentComponent
              Titleone='dayle View'
              Titletow='monthly View'
              onViewChanged={(Type) => setViewType(Type)}
            />
          </div>
          <div className='mx-1'>
            <SorterLettersButtonComponent onViewChanged={(items) => console.log(items)} />
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
                ViewType === 1
                  ? FilterHandlerMyAttendance(event)
                  : FilterHandlerMonthlyAttendance(event)
              }
              endAdornment={<span className='mdi mdi-magnify px-2' />}
              wrapperClasses='theme-primary'
              fieldClasses='inputs theme-primary ml-2'
            />
          </div>
        </div>
      </div>
      <div className='Employee-wraper'>
        <div className='EmployeeTabelView-wraper'>
          {(employees.totalCount === 0 && <NoSearchResultComponent />) ||
            (ViewType === 1 ? (
              <EmployeeDayleAttendanceTabel
                data={employees}
                parentTranslationPath={parentTranslationPath}
                translationPath={translationPath}
                filter={filter}
              />
            ) : (
              <EmployeeMonthlyAttendanceTabel
                data={employees}
                parentTranslationPath={parentTranslationPath}
                translationPath={translationPath}
                filter={filter}
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
