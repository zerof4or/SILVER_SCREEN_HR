import { ButtonBase, Fab } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { InnerHeaderComponent } from '../../../../Components';
import './Shift.Style.scss';

const parentTranslationPath = 'ShiftView';
// const translationPath = '';

export const ShiftView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);
  const [activeSideButton, setActiveSideButton] = useState(1);

  const [sideList] = useState([
    {
      key: 3,
      value: 'Employees Shift',
    },
    {
      key: 2,
      value: t('My Shift'),
    },
    {
      key: 1,
      value: 'Shift Settings',
    },
  ]);
  const activeSideButtonChange = useCallback((value) => {
    setActiveSideButton(value);
    // if (value === 2) GlobalHistory.push('');
  }, []);
  return (
    <div className="view-wrapper">
      <InnerHeaderComponent
        component={
          <>
            {sideList.map((item, index) => (
              <ButtonBase
                className={`header-side-menu-button ${
                  item.key === activeSideButton ? 'is-active' : ''
                }`}
                onClick={() => activeSideButtonChange(item.key)}
                key={`headerSideMenuBtnKey${index + 1}`}
              >
                {item.value}
              </ButtonBase>
            ))}
          </>
        }
      />
      <div className="hedar-options"> </div>
      <div className="Shift-View-wraperr">
        <div className="hedar-title">Shift Policess </div>
        <div className="cards-container">
          {[1, 2, 3, 1, 2, 3].map((item, index) => (
            <div className="card-wraper" key={`ShiftCardKey${index + 1}`}>
              <div className="card-container">
                <div className="card">
                  <div className="Shift-data">
                    <div className="Shiftname"> Morning shift </div>
                    <div className="Shifttime">16:15PM - 05:15AM </div>
                  </div>
                  <div className="Shift-OPTONS">
                    <span className="">
                      <Fab size="small" aria-label="Edit" className="">
                        <span className="mdi mdi-pencil-outline Edit" title={t('Edit')} />
                      </Fab>
                    </span>
                    <span className="OPTONS-conteaner">
                      <Fab size="small" aria-label="Edit" className="">
                        <span className="mdi mdi-delete Deleted " title={t('Edit')} />
                      </Fab>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
