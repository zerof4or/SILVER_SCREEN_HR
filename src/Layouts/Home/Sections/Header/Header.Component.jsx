import React, { useEffect, useRef, useState } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { useTranslation } from 'react-i18next';
import { getDownloadableLink, GlobalHistory, setLogoutAction } from '../../../../Helpers';
import { HeaderActionsComponent, HeaderMenuComponent, UserMenuComponent } from './Sections';
import { CollapseComponent } from '../../../../Components';
import { LoginActions } from '../../../../Store/Actions';
import LogoImg from '../../../../Assets/Images/Defaults/logo.png';
import './Header.Style.scss';
import { useOnClickOutside } from '../../../../Hubs';

const FirstLettersExp = /\b(\w)/gm;
const parentTranslationPath = 'HeaderView';
const translationPath = '';
export const HeaderComponent = () => {
  const { t } = useTranslation(parentTranslationPath);
  const dispatch = useDispatch();
  const loginResponse = useSelector((state) => state.LoginReducers.loginResponse);
  const userProfileRef = useRef(null);
  const [imageReq, setImageReq] = useState(null);
  const [isOpenMenu, setIsOpenMenu] = useState({
    userProfile: false,
    notifications: false,
    events: false,
  });
  const userProfileClicked = () => {
    setIsOpenMenu((item) => ({ ...item, userProfile: !item.userProfile }));
  };
  const logoutClicked = () => {
    localStorage.removeItem('session');
    dispatch(LoginActions.logout());
    setTimeout(() => {
      GlobalHistory.push('/account/login');
    }, 100);
  };
  useOnClickOutside(userProfileRef, () => {
    if (isOpenMenu.userProfile)
      setIsOpenMenu((item) => ({
        ...item,
        userProfile: false,
      }));
  });
  setLogoutAction(logoutClicked);
  useEffect(() => {
    if (loginResponse) setImageReq(loginResponse);
  }, [loginResponse]);
  return (
    <div className="header-wrapper">
      <div className="section header-logo-wrapper">
        <img src={LogoImg} alt={t(`${translationPath}silver-screen`)} className="img-logo" />
        {/* <span role='img' aria-label={t('logo')} className='img-logo' /> */}
      </div>
      <div className="section middle-section-wrapper">
        <HeaderMenuComponent />
        <ButtonBase className="btns-icon theme-transparent search-btn">
          <span className="mdi mdi-magnify" />
        </ButtonBase>
      </div>
      <div className="section last-section-wrapper">
        <HeaderActionsComponent />
        <div className="p-relative" ref={userProfileRef}>
          <ButtonBase
            className="btns theme-transparent user-button-wrapper"
            onClick={userProfileClicked}
          >
            {loginResponse && loginResponse.fullName && (!imageReq || !imageReq.profileImg) && (
              <Avatar className="avatars-wrapper theme-small">
                {loginResponse.fullName.match(FirstLettersExp).join('')}
              </Avatar>
            )}
            {imageReq && imageReq.profileImg && (
              <img
                src={getDownloadableLink(imageReq.profileImg)}
                alt={t('user-image')}
                className="user-image"
              />
            )}
            {imageReq && imageReq.fullName && (
              <div className="user-name-wrapper">
                <span className="user-name-text">{imageReq.fullName}</span>
                <span className="mdi mdi-chevron-down mx-2" />
              </div>
            )}
          </ButtonBase>
          <CollapseComponent
            isOpen={isOpenMenu.userProfile}
            top={60}
            isAbsolute
            classes="user-menu-collapse-wrapper"
            component={<UserMenuComponent logout={logoutClicked} />}
          />
        </div>
      </div>
    </div>
  );
};
// HeaderComponent.propTypes = {
//   headerHeightChanged: PropTypes.func.isRequired,
// };
