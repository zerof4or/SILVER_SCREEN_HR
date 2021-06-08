import React, { useEffect, useRef, useState } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { useTranslation } from 'react-i18next';
import { GlobalHistory, setLogoutAction } from '../../../../Helpers'; //getDownloadableLink,
import { HeaderActionsComponent, HeaderMenuComponent, UserMenuComponent } from './Sections';
import { CollapseComponent } from '../../../../Components';
import { LoginActions } from '../../../../Store/Actions';
import LogoImg from '../../../../Assets/Images/Defaults/logo.png';
import './Header.Style.scss';
import { useOnClickOutside } from '../../../../Hubs';
import PopoverComponent from '../../../../Components/Popover/Popover.Component';
import employeeImg100 from '../../../..//Assets/Images/Defaults/emp100.jpg';
import { StatusMenuComponent } from './Sections/StatusMenu/StatusMenu.Component';
const FirstLettersExp = /\b(\w)/gm;
const parentTranslationPath = 'HeaderView';
const translationPath = '';
export const HeaderComponent = () => {
  const { t } = useTranslation(parentTranslationPath);
  const dispatch = useDispatch();
  const loginResponse = useSelector((state) => state.LoginReducers.loginResponse);
  const userProfileRef = useRef(null);
  const statesRef = useRef(null);
  const [headerActionsPopover, setHeaderActionsPopover] = useState(null);
  const [headerMenuPopover, setHeaderMenuPopover] = useState(null);
  const [imageReq, setImageReq] = useState(null);
  const [statesmod, setstatesmod] = useState('rgb(75, 214, 75)');
  const [isOpenMenu, setIsOpenMenu] = useState({
    userProfile: false,
    status: false,
    events: false,
  });
  const [isopenCollapse, setisopenCollapse] = useState(null);
  const userProfileClicked = () => {
    setIsOpenMenu((item) => ({ ...item, userProfile: !item.userProfile, status: false }));
    setisopenCollapse(!isopenCollapse);
  };
  const statusClicked = () => {
    setIsOpenMenu((item) => ({ ...item, status: !item.status, userProfile: false }));
    setisopenCollapse(!isopenCollapse);
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
    setisopenCollapse(false);
  });

  useOnClickOutside(statesRef, () => {
    if (isOpenMenu.status)
      setIsOpenMenu((item) => ({
        ...item,
        status: false,
      }));
    setisopenCollapse(false);
  });

  setLogoutAction(logoutClicked);
  const actionsPopoverClickedHandler = (event) => {
    setHeaderActionsPopover(event.currentTarget);
  };
  const menuPopoverClickedHandler = (event) => {
    setHeaderMenuPopover(event.currentTarget);
  };
  const actionsPopoverCloseHandler = () => {
    setHeaderActionsPopover(null);
  };
  const menuPopoverCloseHandler = () => {
    setHeaderMenuPopover(null);
  };

  const StatusColorClicked = () => {
    setIsOpenMenu((item) => ({ ...item, status: !item.status }));
  };
  const AllClose = () => {
    setIsOpenMenu((item) => ({ ...item, status: false, userProfile: false }));
  };
  useEffect(() => {
    if (loginResponse) setImageReq(loginResponse);
  }, [loginResponse]);

  const colorstates = JSON.parse(localStorage.getItem('stateColor'));

  useEffect(() => {
    setstatesmod(colorstates);
  }, [colorstates]);

  return (
    <div className='header-wrapper'>
      <div className='section header-logo-wrapper'>
        <img src={LogoImg} alt={t(`${translationPath}silver-screen`)} className='img-logo' />
        {/* <span role='img' aria-label={t('logo')} className='img-logo' /> */}
      </div>
      <div className='section middle-section-wrapper'>
        <HeaderMenuComponent />
        <ButtonBase
          className='btns-icon theme-transparent header-menu-open-btn'
          onClick={menuPopoverClickedHandler}>
          <span className='mdi mdi-menu' />
        </ButtonBase>
        <PopoverComponent
          idRef='headerMenuPopoverRef'
          attachedWith={headerMenuPopover}
          popoverClasses='header-menu-popover-wrapper'
          handleClose={menuPopoverCloseHandler}
          component={<HeaderMenuComponent />}
        />
        <ButtonBase className='btns-icon theme-transparent search-btn'>
          <span className='mdi mdi-magnify' />
        </ButtonBase>
      </div>

      <div className='section last-section-wrapper' ref={statesRef}>
        <HeaderActionsComponent AllClose={AllClose} CloseCollapse={isopenCollapse} />
        <ButtonBase
          className={`btns-icon theme-transparent btns-header-actions${
            (headerActionsPopover && ' is-active') || ''
          }`}
          onClick={actionsPopoverClickedHandler}>
          <span className='mdi mdi-dots-vertical' />
        </ButtonBase>
        <PopoverComponent
          idRef='headerActionsPopoverRef'
          attachedWith={headerActionsPopover}
          popoverClasses='header-actions-popover-wrapper'
          handleClose={actionsPopoverCloseHandler}
          component={<HeaderActionsComponent AllClose={AllClose} />}
        />
        <div className='p-relative' ref={userProfileRef}>
          <div className='btns theme-transparent user-button-wrapper'>
            {loginResponse && loginResponse.fullName && (!imageReq || !imageReq.profileImg) && (
              <Avatar className='avatars-wrapper theme-small'>
                {loginResponse.fullName.match(FirstLettersExp).join('')}
              </Avatar>
            )}
            {isOpenMenu && isOpenMenu && (
              <ButtonBase onClick={statusClicked}>
                <img
                  src={employeeImg100} //{getDownloadableLink(imageReq.profileImg)}
                  alt={t('user-image')}
                  style={{ border: `2.3px solid ${statesmod || ' rgb(75, 214, 75'}` }}
                  className='user-image'
                />
              </ButtonBase>
            )}
            {
              //imageReq && imageReq.fullName && imageReq.fullName||
              <div className='user-name-wrapper'>
                <span className='user-name-text' title={'Abdulaziz Kabalan'}>{'Abdulaziz Kabalan'} </span>
                <ButtonBase
                  className={
                    isOpenMenu.userProfile === true
                      ? 'mdi mdi-chevron-up mx-2'
                      : 'mdi mdi-chevron-down mx-2'
                  }
                  onClick={userProfileClicked}
                />
              </div>
            }
          </div>
          <CollapseComponent
            isOpen={isOpenMenu.userProfile}
            top={60}
            isAbsolute
            classes='user-menu-collapse-wrapper'
            component={<UserMenuComponent logout={logoutClicked} />}
          />
          <CollapseComponent
            isOpen={isOpenMenu.status}
            top={60}
            isAbsolute
            classes='status-menu-collapse-wrapper'
            component={<StatusMenuComponent Clicked={StatusColorClicked} />}
          />
        </div>
      </div>
    </div>
  );
};
// HeaderComponent.propTypes = {
//   headerHeightChanged: PropTypes.func.isRequired,
// };
