// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonBase } from '@material-ui/core';
import LeavePoliceData from '../../../../../../../StaticJOSN/LeavePoliceData.json';
import '../Leaves.Style.scss';
import { DialogComponent, Inputs } from '../../../../../../../Components';
import { LeavePolice } from '../LeaveTabelView/LeavePoliceTabel';
import { NoSearchResultComponent } from '../../../../../../../Components/NoSearchResultComponent/NoSearchResultComponent';

const parentTranslationPath = 'LeavePoliceView';
const translationPath = '';
export const LeavePoliceView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // eslint-disable-next-line no-unused-vars
  const [ViewType, setViewType] = useState(1);
  const [employees, setEmployees] = useState(LeavePoliceData);
  console.log('employees: ', employees);
  const [open, setopen] = useState(false);
  const [filter] = useState({
    pageIndex: 1,
    pageSize: 60,
  });
  const close = () => {
    setopen(false);
  };
  const FilterHandlerMyAttendance = (value) => {
    const result = LeavePoliceData.result.filter((item) =>
      item.Employeename.toLowerCase().includes(value.target.value.toLowerCase())
    );
    console.log(result);
    setEmployees({
      result: result,
      totalCount: result.length,
    });
  };

  return (
    <div className='AttendanceView w-100'>
      <div className='Sub-InnerHeader'>
        <div className='d-inline-flex'>
          <div className='bbt-primary space'>
            <ButtonBase>
              <span className='mdi mdi-account-plus ' />
              &nbsp; Add new employee
            </ButtonBase>
          </div>
        </div>

        <div className='attendance-check-search'>
          <div className='search-text'>
            <Inputs
              idRef='searchEmployeesRef'
              onInputChanged={(event) => FilterHandlerMyAttendance(event)}
              endAdornment={<span className='mdi mdi-magnify px-2' />}
              wrapperClasses='theme-primary'
              fieldClasses='inputs theme-primary ml-2'
            />
          </div>
        </div>
      </div>
      <div className='Employee-wraper'>
        <div className='EmployeeTabelView-wraper'>
          {(employees.totalCount === 0 && <NoSearchResultComponent />) || (
            <LeavePolice
              data={employees}
              parentTranslationPath={parentTranslationPath}
              translationPath={translationPath}
              filter={filter}
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
