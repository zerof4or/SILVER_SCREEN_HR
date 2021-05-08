import { ButtonBase, Fab } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { InnerHeaderComponent, Inputs } from '../../../../Components';
import './Refferral.Style.scss';

const parentTranslationPath = 'RefferralView';
// const translationPath = '';

export const RefferralView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);
  const [activeSideButton, setActiveSideButton] = useState(1);
  const [Show, setShow] = useState(false);

  const activeSideButtonChange = useCallback((value) => {
    setActiveSideButton(value);
    // if (value === 2) GlobalHistory.push('');
  }, []);
  const [value, setValue] = React.useState(0);
  const SearchButtonChange = useCallback(() => {
    if (Show) setShow(false);
    else setShow(true);
  }, [Show]);

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
            <ButtonBase>Create new Vecancy</ButtonBase>
          </div>
          <div className="search-text">
            {!Show && (
              <ButtonBase onClick={() => SearchButtonChange()}>
                <span className="mdi mdi-magnify px-2 heme-primary ml-2" />
              </ButtonBase>
            )}
            {Show && (
              <Inputs
                onInputChanged={() => {}}
                endAdornment={
                  <ButtonBase
                    onClick={() => SearchButtonChange()}
                    className="btns-icon theme transparent mx-2"
                  >
                    <span className="mdi mdi-magnify" />
                  </ButtonBase>
                }
                wrapperClasses="theme-primary"
                fieldClasses="inputs theme-primary ml-2"
              />
            )}
          </div>
        </div>
      </div>
      <div className="Refferral-View-wraperr">
        <div className="cards-container">
          {[1, 2, 7, 3, 4, 8, 5].map((item, index) =>
            item % 2 === 0 ? (
              <div className="card-wraper" key={`refferralCardKey${index + 1}`}>
                <div className="card-container">
                  <div className="card-header">
                    <div className="card-icon">
                      <div className="icon-container">
                        <div className="dots-vertical">
                          <Rating
                            max={1}
                            name="pristine"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-data">
                      <div className="name">End Of Contract </div>
                    </div>
                    <div className="mune-container">
                      <div className="dots-vertical">
                        <ButtonBase>
                          <span className="mdi mdi-dots-vertical" />
                        </ButtonBase>
                      </div>
                    </div>
                  </div>
                  <div className="card-center">
                    <div className="button">
                      <ButtonBase>Start Reqranment </ButtonBase>
                    </div>
                  </div>
                  <div className="card-footar">
                    <div className="card-footar-container">
                      <div className="button">
                        <ButtonBase>Job Descriptions</ButtonBase>
                      </div>
                      <div className="button">
                        <ButtonBase>Share Trackers</ButtonBase>
                      </div>
                      <div className="button">
                        <ButtonBase>Referral</ButtonBase>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card-wraper" key={`refferralCardKey${index + 1}`}>
                <div className="card-tow-container">
                  <div className="card-tow-SUB-container">
                    <div className="card-header">
                      <div className="card-data">
                        <div className="name">End Of Contract </div>
                      </div>
                      <div className="mune-container-tow">
                        <div className="card-tow-icon">
                          <div className="card-tow-icon">
                            <div className="card-tow-icon-container">
                              <div className="Edit-card-tow">
                                <Fab size="small" aria-label="Edit" className="">
                                  <span className="mdi mdi-pencil-outline Edit" title={t('Edit')} />
                                </Fab>
                              </div>
                              <div className="Rating-card-tow">
                                <Rating
                                  max={1}
                                  name="pristine"
                                  value={value}
                                  onChange={(event, newValue) => {
                                    setValue(newValue);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footar">
                      <div className="card-footar-container">
                        <div className="button">
                          <ButtonBase>Job Descriptions</ButtonBase>
                        </div>
                        <div className="button">
                          <ButtonBase>Share Trackers</ButtonBase>
                        </div>
                        <div className="button">
                          <ButtonBase>Referral</ButtonBase>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-last-footar">14 Application</div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
