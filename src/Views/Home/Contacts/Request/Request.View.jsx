import { ButtonBase } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { InnerHeaderComponent, Inputs } from '../../../../Components';
import './Request.Style.scss';

const parentTranslationPath = 'RequestView';
// const translationPath = '';

export const RequestView = () => {
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
      <div className="RequestView-check-header">
        <div className="attendance-check-filter">
          <div className="dots-vertical">
            <ButtonBase>
              <span className="mdi mdi-dots-vertical" />
            </ButtonBase>
          </div>
          <div className="filter-button">
            <ButtonBase>
              <span className="mdi mdi-filter" />
              Filter
            </ButtonBase>
          </div>
          <div className="location-button">
            <ButtonBase>Import</ButtonBase>
          </div>
        </div>
        <div className="attendance-check-search">
          <div className="leave-button">
            <ButtonBase>New Termination Type</ButtonBase>
          </div>
          <div className="search-text">
            <Inputs
              onInputChanged={() => {}}
              endAdornment={<span className="mdi mdi-magnify px-2" />}
              wrapperClasses="theme-primary"
              fieldClasses="inputs theme-primary ml-2"
            />
          </div>
        </div>
      </div>
      <div className="Request-View-wraperr">
        <div className="hedar-title"> Review Templates</div>
        <div className="cards-container">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div className="card-wraper" key={`reviewTemplatesCardKey${index + 1}`}>
              <div className="card-container">
                <div className="card-header">
                  <div className="card-icon">
                    <div className="icon-container">
                      <span className="mdi mdi-briefcase-variant" />
                    </div>
                  </div>
                  <div className="card-data">
                    <div className="name">End Of Contract </div>
                    <div className="time">Dec, 15, 2020 </div>
                  </div>
                  <div className="">
                    <div className="dots-vertical">
                      <ButtonBase>
                        <span className="mdi mdi-dots-vertical" />
                      </ButtonBase>
                    </div>
                  </div>
                </div>
                <div className="card-footar">
                  <div className="fisrt">
                    <div className="button">
                      <ButtonBase>New Reques</ButtonBase>
                    </div>
                  </div>
                  <div className="ReViews">
                    <div className="ReViews-value">Reviews : 05</div>
                  </div>
                  <div className="second">
                    <div className="button-Accept">
                      <ButtonBase>Accept</ButtonBase>
                    </div>
                    <div className="button-Reject">
                      <ButtonBase>Reject</ButtonBase>
                    </div>
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
