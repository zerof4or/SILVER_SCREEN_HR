import { ButtonBase } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { InnerHeaderComponent, Inputs } from '../../../../Components';
import { ContactTypeEnum } from '../../../../Enums';
import { GlobalHistory } from '../../../../Helpers';
import './Department.Style.scss';

const parentTranslationPath = 'DepartmentView';
// const translationPath = '';
export const DepartmentView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);
  const [activeSideButton, setActiveSideButton] = useState(1);
  const count = [1, 2, 1, 2, 1, 2];
  const AVATARS = [
    ContactTypeEnum.employee.defaultImg,
    ContactTypeEnum.employee2.defaultImg,
    ContactTypeEnum.employee3.defaultImg,
    ContactTypeEnum.employee4.defaultImg,
    ContactTypeEnum.employee5.defaultImg,
    ContactTypeEnum.employee6.defaultImg,
    ContactTypeEnum.employee7.defaultImg,
  ];

  const Names = [
    'Adam Alex',
    'Aaron Ben',
    'Carl  Dan',
    'David  Edward',
    'Fred  Frank',
    'George  Hal',
    'Knutson Lawless',
    'Lawicki  Mccord',
    'McCormack  Miller',
    'Myers  Nugent',
    'Ortiz  Orwig',
    'Ory  Pais',
  ];

  const pickRandom = (array) => {
    if (!Array.isArray(array)) return undefined;
    return array[Math.floor(Math.random() * array.length)];
  };
  const [sideList] = useState([
    {
      key: 1,
      value: 'Employees',
    },
    {
      key: 2,
      value: t('ORG Chart'),
    },
    {
      key: 3,
      value: 'Team',
    },
  ]);
  const activeSideButtonChange = useCallback((value) => {
    setActiveSideButton(value);
    if (value === 2) GlobalHistory.push('/home/Administration/Organizational-chart');
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
      <div className="attendance-check-header">
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
            <ButtonBase>Location</ButtonBase>
          </div>
        </div>
        <div className="attendance-check-search">
          <div className="leave-button">
            <ButtonBase>Add New Leave</ButtonBase>
          </div>
          <div className="search-text">
            <Inputs
              idRef="searchDepartmentRef"
              onInputChanged={() => {}}
              endAdornment={<span className="mdi mdi-magnify px-2" />}
              wrapperClasses="theme-primary"
              fieldClasses="inputs theme-primary ml-2"
            />
          </div>
        </div>
      </div>
      <div className="Department-wraper">
        <div className="hedar-title">Directors Mangement</div>
        <div className="cards-container">
          {count.map((x, index) => (
            <div className="card-wraper" key={`directorsManagementCardKey${index + 1}`}>
              <div className="card-container">
                <div className="card">
                  <img src={pickRandom(AVATARS)} alt="tag-curve-img" className="card-img" />
                  <div className="card-title">
                    <div className="card-title-container">
                      <div className="des-title">
                        <span>software</span>
                      </div>
                    </div>
                    <div className="name">{pickRandom(Names)}</div>
                    <div className="title">Mangment</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Department-wraper">
        <div className="hedar-title">Marketing Department</div>
        <div className="cards-container">
          {[1, 2, 3].map((x, index) => (
            <div className="card-wraper" key={`marketingDepartmentCardKey${index + 1}`}>
              <div className="card-container">
                <div className="card">
                  <img src={pickRandom(AVATARS)} alt="tag-curve-img" className="card-img" />
                  <div className="card-title">
                    <div className="card-title-container">
                      <div className="des-title">
                        <span>software</span>
                      </div>
                    </div>
                    <div className="name">{pickRandom(Names)}</div>
                    <div className="title">Marketing</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Department-wraper">
        <div className="hedar-title">Department Photography</div>
        <div className="cards-container">
          {[1, 2].map((x, index) => (
            <div className="card-wraper" key={`departmentPhotographyCardKey${index + 1}`}>
              <div className="card-container">
                <div className="card">
                  <img src={pickRandom(AVATARS)} alt="tag-curve-img" className="card-img" />
                  <div className="card-title">
                    <div className="card-title-container">
                      <div className="des-title">
                        <span>software</span>
                      </div>
                    </div>
                    <div className="name">{pickRandom(Names)}</div>
                    <div className="title">Photography</div>
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
