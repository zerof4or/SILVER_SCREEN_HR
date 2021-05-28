// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { Button, ButtonBase, Paper, Tab, Tabs } from '@material-ui/core';
import MyAttendance from '../../../../../../StaticJOSN/MyAttendance.json';
import EmployeeAttendance from '../../../../../../StaticJOSN/EmployeeAttendance.json';
import './Leaves.Style.scss';
import { InnerHeaderComponent } from '../../../../../../Components';
import { LeavePoliceView } from './LeavesView/LeavePolice.View';
import { LeavesBlanceView } from './LeavesView/LeavesBlance.View';

const parentTranslationPath = 'LeavesView';
// const translationPath = '';
export const LeavesView = () => {
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
      value: t('Timeoff/Leavepolice'),
    },
    {
      key: 2,
      value: t('Leaves Blance'),
    },
    {
      key: 3,
      value: t('MyLeaves'),
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
      {(Tabview === 1 && <LeavePoliceView />) || (Tabview === 2 && <LeavesBlanceView />) || ''}
    </div>
  );
};
