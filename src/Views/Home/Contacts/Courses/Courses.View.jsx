import { Button, ButtonBase } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { InnerHeaderComponent } from '../../../../Components';
import wallpaper from '../../../../Assets/Images/Defaults/wallpaper-card.png';
import './Courses.Style.scss';

const parentTranslationPath = 'CoursesView';
const translationPath = '';

export const CoursesView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);
  const [activeSideButton, setActiveSideButton] = useState(1);

  const [sideList] = useState([
    {
      key: 1,
      value: t('Requirements'),
    },
    {
      key: 2,
      value: t('Applicants'),
    },
    {
      key: 3,
      value: t('Settings'),
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
      <div className="CoursesView-wraperr">
        <div className="cards-container">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div className="card-wraper" key={`coursesCardKey${index + 1}`}>
              <div className="card-container">
                <div className="card">
                  <img src={wallpaper} alt="tag-curve-img" className="card-img" />
                  <div>
                    <h2>Introduction to Design</h2>
                  </div>
                  <div className="des-text">
                    {' '}
                    Brainstorm to create a list of constraints that may significantly affect the
                    design of courses
                  </div>
                  <div className="bbt-start">
                    <Button>
                      <span>{t(`${translationPath}Start Courses`)}</span>
                    </Button>
                  </div>
                  <div className="action-conteaner">
                    <div className="actions-btt">
                      <span> 5 Lessons</span>
                    </div>
                    <div className="actions-btt btt-center">
                      <span>45 Peoples</span>
                    </div>
                    <div className="actions-btt">
                      <span> 03 hours</span>
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
