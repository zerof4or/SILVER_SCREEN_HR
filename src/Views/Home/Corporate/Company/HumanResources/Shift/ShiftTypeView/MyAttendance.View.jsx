// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonBase, Paper, Tab, Tabs } from '@material-ui/core';
import MyAttendance from '../../../../../../../StaticJOSN/MyAttendance.json';
import MonthlyAttendance from '../../../../../../../StaticJOSN/MyMonthlyAttendance.json';
import '../Shift.Style.scss';
import {
  DialogComponent,
  FilterButtonComponent,
  Inputs,
  LocationButtonComponent,
  AutocompleteComponent,
} from '../../../../../../../Components';
import { NoSearchResultComponent } from '../../../../../../../Components/NoSearchResultComponent/NoSearchResultComponent';
import { COUNTRY_NAMES } from '../../../../../../../Enums/CountryNames';
import { DubleButtonComponentComponent } from '../../../../../../../Components/Buttons/DubleButtonComponent';
import { MyDayleAttendanceTabel } from './ComponentsViews/MyDayleAttendanceTabel';
import { MyMonthlyAttendanceTabel } from './ComponentsViews/MyMonthlyAttendanceTabel';
const parentTranslationPath = 'MyAttendance';
const translationPath = '';
export const MyAttendanceView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // eslint-disable-next-line no-unused-vars
  const [ViewType, setViewType] = useState(1);
  const [employees, setEmployees] = useState('');
  const [open, setopen] = useState(false);
  const [filter] = useState({
    pageIndex: 1,
    pageSize: 60,
  });

  const close = () => {
    setopen(false);
  };
  const FilterHandlerMyAttendance = (value) => {
    const result = MyAttendance.result.filter((item) =>
      item.Employeename.toLowerCase().includes(value.target.value.toLowerCase())
    );
    console.log(result);
    setEmployees({
      result: result,
      totalCount: result.length,
    });
  };
  const FilterHandlerMonthlyAttendance = (value) => {
    const result = MonthlyAttendance.result.filter((item) =>
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
      setEmployees(MyAttendance);
    } else setEmployees(MonthlyAttendance);
  }, [ViewType]);
  return (
    <div className='ShiftView w-100'>
      <div className='Sub-InnerHeader'>
        <div className='d-inline-flex'>
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
            <DubleButtonComponentComponent
              Titleone='dayle View'
              Titletow='monthly View'
              Titletriple='Weekly View'
              triple
              onViewChanged={(Type) => setViewType(Type)}
            />
          </div>
        </div>

        <div className='attendance-check-search'>
          <div className='bbt-primary space'>
            <ButtonBase>
              <span className='mdi mdi-account-plus ' />
              &nbsp; Add new New shift
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
              <MyDayleAttendanceTabel
                data={employees}
                parentTranslationPath={parentTranslationPath}
                translationPath={translationPath}
                filter={filter}
              />
            ) : (
              <MyMonthlyAttendanceTabel
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
