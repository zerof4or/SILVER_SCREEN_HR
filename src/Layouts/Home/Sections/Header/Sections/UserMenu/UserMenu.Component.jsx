import React, { memo, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useTranslation } from 'react-i18next';
import { languageChange } from '../../../../../../Helpers';
import { CollapseComponent } from '../../../../../../Components';
import { Switch } from '@material-ui/core';
import i18next from 'i18next';

const parentTranslationPath = 'HeaderView';
const transaltionPath = 'UserMenuComponent.';
export const UserMenuComponent = memo(({ logout }) => {
  const { t } = useTranslation(parentTranslationPath);
  const [languageToggler, setLanguageToggler] = useState(false);
  // const loginResponse = useSelector((state) => state.LoginReducers.loginResponse);
  // const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [languages] = useState([
  //   {
  //     key: 'en',
  //     value: `${transaltionPath}english`,
  //   },
  //   {
  //     key: 'ar',
  //     value: `${transaltionPath}arabic`,
  //   },
  // ]);
  const languageClicked = useCallback(languageChange, []);
  const displayModeHandler = () => {
    setIsDarkMode((item) => {
      localStorage.setItem('displayMode', JSON.stringify({ isDarkMode: !item }));
      if (item) document.body.classList.remove('is-dark-mode');
      else if (!document.body.classList.contains('is-dark-mode'))
        document.body.classList.add('is-dark-mode');
      return !item;
    });
  };

  const languageTogglerClicked = () => {
    setLanguageToggler(!languageToggler);
  };
  // const getOrganizationUserSearch = useCallback(async () => {
  //   setIsLoading(true);
  //   const response = await OrganizationUserSearch({
  //     userName: loginResponse.userName,
  //     pageIndex: 0,
  //     pageSize: 25,
  //   });
  //   if (response && response.result) {
  //     setIsLoading(false);
  //     localStorage.setItem(
  //       'activeUserItem',
  //       JSON.stringify(response.result.find((item) => item.id === loginResponse.userId))
  //     );
  //     if (window.location.pathname.includes('home/Users/edit'))
  //       window.location.href = `/home/Users/edit?id=${loginResponse.userId}`;
  //     else GlobalHistory.push(`/home/Users/edit?id=${loginResponse.userId}`);
  //   } else setIsLoading(false);
  // }, [loginResponse]);
  // const editProfileHandler = () => {
  //   getOrganizationUserSearch();
  // };
  useEffect(() => {
    const localDisplayMode = localStorage.getItem('displayMode');
    if (localDisplayMode && JSON.parse(localDisplayMode).isDarkMode) {
      setIsDarkMode(JSON.parse(localDisplayMode).isDarkMode);
      document.body.classList.add('is-dark-mode');
    }
  }, []);
  return (
    <div className="cards">
      <div className="card-content">
        {/* <Spinner isActive={isLoading} isAbsolute /> */}
        <div className="d-flex-column-center">
          <ButtonBase className="btns theme-menu">
            <div className="d-inline-flex fa-center">
              <span className="mdi mdi-account" />
              <span className="mx-3">{t(`${transaltionPath}profile`)}</span>
            </div>
            <span className="mdi mdi-menu-down" />
          </ButtonBase>
          <div className="separator-h" />
          <ButtonBase className="btns theme-menu">
            <div className="d-inline-flex fa-center">
              <span className="mdi mdi-cog" />
              <span className="mx-3">{t(`${transaltionPath}account-settings`)}</span>
            </div>
            <span className="mdi mdi-menu-down" />
          </ButtonBase>
          <div className="separator-h" />
          <ButtonBase className="btns theme-menu" onClick={displayModeHandler}>
            <div className="d-inline-flex fa-center">
              <span className="mdi mdi-moon-waning-crescent mdi-rotate-315" />
              <span className="mx-3">{t(`${transaltionPath}dark-mode`)}</span>
            </div>
            <Switch checked={isDarkMode} className="switches" />
          </ButtonBase>
          <div className="separator-h" />
          <ButtonBase className="btns theme-menu" onClick={displayModeHandler}>
            <div className="d-inline-flex fa-center">
              <span className="mdi mdi-white-balance-sunny" />
              <span className="mx-3">{t(`${transaltionPath}light-mode`)}</span>
            </div>
            <Switch checked={!isDarkMode} className="switches" />
          </ButtonBase>
          <div className="separator-h" />
          <ButtonBase className="btns theme-menu">
            <div className="d-inline-flex fa-center">
              <span className="mdi mdi-television" />
              <span className="mx-3">{t(`${transaltionPath}create-your-display`)}</span>
            </div>
          </ButtonBase>
          <div className="separator-h" />
          <ButtonBase className="btns theme-menu" onClick={languageTogglerClicked}>
            <div className="d-inline-flex fa-center">
              <span className="mdi mdi-translate" />
              <span className="mx-3">{t(`${transaltionPath}languages`)}</span>
            </div>
            <div className="d-inline-flex fa-center">
              <span>{t(`${transaltionPath}${i18next.language}`)}</span>
              <span className={`mdi mdi-menu-${(languageToggler && 'down') || 'right'} px-1`} />
            </div>
          </ButtonBase>
          <div className="separator-h" />
          <CollapseComponent
            isOpen={languageToggler}
            classes="w-100 px-3"
            component={
              <>
                {i18next.languages.map((item, index) => (
                  <React.Fragment key={`languages${item}`}>
                    <ButtonBase className="btns theme-menu" onClick={() => languageClicked(item)}>
                      <span>{t(`${transaltionPath}${item}`)}</span>
                    </ButtonBase>
                    {index !== i18next.languages.length - 1 && <div className="separator-h" />}
                  </React.Fragment>
                ))}
              </>
            }
          />
          <div className="separator-h" />
          <ButtonBase className="btns theme-menu" onClick={logout}>
            <div className="d-inline-flex fa-center">
              <span className="mdi mdi-logout" />
              <span className="mx-3">{t(`${transaltionPath}logout`)}</span>
            </div>
          </ButtonBase>
        </div>
      </div>
      {/* <div className="card-footer">
        <ButtonBase className="btns theme-solid mb-2" onClick={editProfileHandler}>
          <span>{t(`${transaltionPath}edit-profile`)}</span>
        </ButtonBase>
        <ButtonBase className="btns theme-outline mb-2" onClick={logout}>
          <span>{t(`${transaltionPath}logout`)}</span>
        </ButtonBase>
      </div> */}
    </div>
  );
});
UserMenuComponent.displayName = 'UserMenuComponent';
UserMenuComponent.propTypes = {
  logout: PropTypes.func.isRequired,
};
