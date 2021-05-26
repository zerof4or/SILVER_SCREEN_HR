// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { Button, ButtonBase, Paper, Tab, Tabs } from '@material-ui/core';
import MyAttendance from '../../../../../../StaticJOSN/MyAttendance.json';
import EmployeeAttendance from '../../../../../../StaticJOSN/EmployeeAttendance.json';
import './Attendance.Style.scss';
import { InnerHeaderComponent } from '../../../../../../Components';
import { EmployeeAttendanceTabel } from './AttendanceTypeView/EmployeeAttendanceView';
import { MyAttendanceView } from './AttendanceTypeView/MyAttendance.View';

const parentTranslationPath = 'AttendanceView';
// const translationPath = '';
export const AttendanceView = () => {
  const { t } = useTranslation(parentTranslationPath);
  const [employees, setEmployees] = useState(MyAttendance);
  const [Tabview, setTabview] = useState(1);
  console.log('employees: ', employees);
  const [activeSideButton, setActiveSideButton] = useState(1);
  const activeSideButtonChange = useCallback((value) => {
    setTabview(value);
    setActiveSideButton(value);
    if (value === 2) setEmployees(EmployeeAttendance);
    else {
      setEmployees(MyAttendance);
    }
  }, []);

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
      {(Tabview === 1 && <MyAttendanceView />) || (Tabview === 2 && <EmployeeAttendanceTabel />) ||''}
    </div>
  );
};
