// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line no-unused-vars
import { Button, ButtonBase, Paper, Tab, Tabs } from '@material-ui/core';
import { InnerHeaderComponent } from '../../../../../../Components';
import { EmployeeView } from './EmployeeView/Employee.View';
import { TeamView } from './Team/Team.View';

const parentTranslationPath = 'EmployeeManagementView';
// const translationPath = '';
export const EmployeeManagementView = () => {
  const { t } = useTranslation(parentTranslationPath);
  const [Tabview, setTabview] = useState(1);
  const [activeSideButton, setActiveSideButton] = useState(1);
  const activeSideButtonChange = useCallback((value) => {
    setTabview(value);
    setActiveSideButton(value);
  }, []);

  const [sideList] = useState([
    {
      key: 1,
      value: t('Empolyee'),
    },
    {
      key: 2,
      value: t('ORG Chart'),
    },
    {
      key: 3,
      value: t('Team'),
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
      {(Tabview === 1 && <EmployeeView />) ||
        (Tabview === 2 && <div />) ||
        (Tabview === 3 && <TeamView />)}
    </div>
  );
};
