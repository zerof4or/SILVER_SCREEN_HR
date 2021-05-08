import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
// import defaultLogo from '../../../assets/images/defaults/logo-crm.svg';
import { showSuccess, showError, GlobalHistory, languageChange } from '../../../Helpers';
import { config } from '../../../Configs';
// import { ApplicationLogin } from '../../services';
import { LoginActions } from '../../../Store/Actions';
import { CheckboxesComponent, Inputs, SelectComponent } from '../../../Components';
import './Login.Style.scss';

const parentTranslationPath = 'LoginView';
const translationPath = '';
const LoginView = () => {
  const { t } = useTranslation(parentTranslationPath);
  const loginResponse = useSelector((state) => state.LoginReducers.loginResponse);
  console.log(loginResponse);
  const dispatch = useDispatch(LoginActions.login);
  // const history = useHistory();
  const [loginDto, setLoginDto] = useState({
    identity: '',
    password: '',
    rememberMe: false,
    organizationId: config.organizationsId,
    applicationId: config.applicationId,
  });
  const [animationStartClasses, setAnimationStartClasses] = useState('');
  const [animationStart, setAnimationStart] = useState(false);
  const [isclick, setisclick] = useState(false);
  const validationHandler = () => {
    if (!loginDto.password || !loginDto.identity) return false;
    if (!loginDto.password) return false;
    return true;
  };
  const handleSubmit = (event) => {
    setisclick(true);
    event.preventDefault();
    if (validationHandler()) dispatch(LoginActions.login(loginDto));
  };
  useEffect(() => {
    if (loginResponse && !animationStart) {
      if (loginResponse.token) {
        localStorage.setItem('session', JSON.stringify(loginResponse));
        showSuccess('Login Succssfuly');
        setAnimationStartClasses(' in-animate');
        setAnimationStart(true);
        setTimeout(() => {
          GlobalHistory.push('/home');
        }, 300);
        setisclick(false);
      } else {
        showError(t(`${loginResponse.Message}`));
        setisclick(false);
      }
    }
  }, [loginResponse, animationStart, t]);
  const controlsHandler = useCallback(
    (input, process) => (event) => {
      setLoginDto({ ...loginDto, [input]: event.target[process] });
    },
    [setLoginDto, loginDto]
  );
  return (
    <div className="login-wrapper">
      <div className="login-content-wrapper">
        <div className="text-section-wrapper">
          <div className="text-section-content">
            <span className="texts-header ">{t(`${translationPath}welcome-to`)}</span>
            <span className="texts-header ">SILVER SCREEN</span>
            <span className="texts c-black-dark fz-30px">{t(`${translationPath}login-desc`)}</span>
          </div>
        </div>
        <div className="box-section-wrapper">
          <div className="box-content">
            <div className="d-flex-v-center-h-between">
              <div className="logo-wrapper">
                {/* <img src={defaultLogo} className='logo' alt={t(`${translationPath}company-logo`)} /> */}
                <span className="logo-name">SILVER SCREEN</span>
              </div>
              <div className="px-2">
                <SelectComponent
                  data={i18next.languages}
                  value={i18next.language}
                  onSelectChanged={languageChange}
                  themeClass="theme-underline"
                />
              </div>
            </div>
            <form noValidate className="form-wrapper" onSubmit={handleSubmit}>
              <Inputs
                idRef="identityRef"
                wrapperClasses="theme-underline"
                label={t(`${translationPath}identity`)}
                inputPlaceholder={t(`${translationPath}ex-desc`)}
                value={loginDto.identity}
                onInputChanged={controlsHandler('identity', 'value')}
              />
              <Inputs
                idRef="passwordRef"
                wrapperClasses="theme-underline"
                type="password"
                label={t(`${translationPath}password`)}
                value={loginDto.password}
                onInputChanged={controlsHandler('password', 'value')}
              />
              <div className="d-flex-v-center-h-between mb-3">
                <CheckboxesComponent
                  idRef="rememberMeRef"
                  parentTranslationPath={parentTranslationPath}
                  translationPath={translationPath}
                  label="remember-me"
                  singleChecked={loginDto.rememberMe}
                  themeClass="theme-secondary"
                  onSelectedCheckboxClicked={() => {
                    setLoginDto((items) => ({ ...items, rememberMe: !items.rememberMe }));
                  }}
                />
                <Link className="links" to="/account/identity-verification">
                  {t(`${translationPath}forgot-password`)}
                </Link>
              </div>
              <div className="d-flex-v-center-h-end">
                <div className={`animated-btn-wrapper${animationStartClasses}`}>
                  <Button
                    className="btns theme-solid"
                    type="submit"
                    disabled={isclick || !loginDto.identity || !loginDto.password}
                  >
                    <span>{t(`${translationPath}start`)}</span>
                  </Button>
                  <span className="mdi mdi-chevron-double-right animated-icon" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="light-shadow" />
    </div>
  );
};
export default LoginView;
