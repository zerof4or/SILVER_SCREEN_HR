// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { Button, ButtonBase, Paper, Tab, Tabs } from '@material-ui/core';
import MyAttendance from '../../../../../../StaticJOSN/MyAttendance.json';
import EmployeeAttendance from '../../../../../../StaticJOSN/EmployeeAttendance.json';
import './Shift.Style.scss';
import { InnerHeaderComponent } from '../../../../../../Components';
import { EmployeeAttendanceTabel } from './ShiftTypeView/EmployeeAttendanceView';
import { MyAttendanceView } from './ShiftTypeView/MyAttendance.View';
import { MyShiftView } from './ShiftTypeView/MyShift/MyShift.View';

const parentTranslationPath = 'ShiftView';
// const translationPath = '';
export const ShiftView = () => {
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
      value: t('EmpolyeeShift'),
    },
    {
      key: 2,
      value: t('MyShift'),
    },
    {
      key: 3,
      value: t('ShiftSettings'),
    },
  ]);

  return (
    <div className='ShiftView w-100'>
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
      {(Tabview === 1 && <EmployeeAttendanceTabel />) ||
        (Tabview === 2 && <MyAttendanceView />) ||
        (Tabview === 3 && <MyShiftView />) ||
        ''}
    </div>
  );
};
