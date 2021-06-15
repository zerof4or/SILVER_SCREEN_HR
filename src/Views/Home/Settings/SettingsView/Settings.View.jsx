import { ButtonBase } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { InnerHeaderComponent } from '../../../../Components';
import './Settings.Style.scss';
import { WindowsView } from './WindowsView/Windows.View';

const parentTranslationPath = 'SettingsView';

export const SettingsView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);
  const [activeSideButton, setActiveSideButton] = useState(1);

  const activeSideButtonChange = useCallback((value) => {
    setActiveSideButton(value);
    // if (value === 2) GlobalHistory.push('');
  }, []);
  // const [value, setValue] = React.useState(0);

  const [sideList] = useState([
    {
      key: 1,
      value: 'Reqranment',
    },
    {
      key: 2,
      value: t('Application'),
    },
    {
      key: 3,
      value: 'Settings',
    },
  ]);

  return (
    <div className='view-wrapper'>
      <InnerHeaderComponent
        component={
          <>
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
          </>
        }
      />
      <div className='View-wraperr mt-5'>
        <WindowsView />
      </div>
    </div>
  );
};
