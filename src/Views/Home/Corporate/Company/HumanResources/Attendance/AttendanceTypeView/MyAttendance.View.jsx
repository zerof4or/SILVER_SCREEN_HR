// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonBase, Paper, Tab, Tabs } from '@material-ui/core';
import MyAttendance from '../../../../../../../StaticJOSN/MyAttendance.json';
import './../Attendance.Style.scss';
import { Sorterletters } from '../../../../../../../Components/Sorterletters/Sorterletters.Component';
import {
  DialogComponent,
  FilterButtonComponent,
  Inputs,
  LocationButtonComponent,
} from '../../../../../../../Components';
import { NoSearchResultComponent } from '../../../../../../../Components/NoSearchResultComponent/NoSearchResultComponent';
import { AutocompleteComponent } from '../../../../../../../Components/AutocompleteComponent/AutocompleteComponent';
import { COUNTRY_NAMES } from '../../../../../../../Enums/CountryNames';
import { EmployeeTabelView } from './ComponentsViews/EmployeeAttendanceTabel';
const parentTranslationPath = 'MyAttendance';
const translationPath = '';
export const MyAttendanceView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // eslint-disable-next-line no-unused-vars
  const [ViewType, setViewType] = useState(1);
  const [employees, setEmployees] = useState(MyAttendance);
  const [open, setopen] = useState(false);
  const [filter] = useState({
    pageIndex: 1,
    pageSize: 60,
  });

  const close = () => {
    setopen(false);
  };
  const FilterHandler = (value) => {
    const result = MyAttendance.result.filter((item) =>
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
              CollapseComponentView={
                <div className='Location-auto-wraper'>
                  <AutocompleteComponent
                    idRef='paymentTypeIdRef'
                    labelValue='payment-type'
                    multiple={false}
                    data={COUNTRY_NAMES || []}
                    displayLabel={(option) => option.label || ''}
                    withoutSearchButton
                    isWithError
                    parentTranslationPath={parentTranslationPath}
                    translationPath={translationPath}
                    onChange={(event, newValue) => {
                      console.log(newValue);
                    }}
                  />
                </div>
              }
            />
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
              onInputChanged={(event) => FilterHandler(event)}
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
            (ViewType !== 1 ? (
              <div>dd</div>
            ) : (
              <EmployeeTabelView
                data={employees}
                parentTranslationPath={parentTranslationPath}
                translationPath={translationPath}
                filter={filter}
                //onSelectedRowsCountChanged={(newValue) => setSelectedEmployeesCount(newValue)}
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
