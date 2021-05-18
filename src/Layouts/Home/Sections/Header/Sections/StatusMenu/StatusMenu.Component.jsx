import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useTranslation } from 'react-i18next';
import { Button } from '@material-ui/core';

const parentTranslationPath = 'HeaderView';
const transaltionPath = 'StatusMenuComponent.';
export const StatusMenuComponent = memo(({ Clicked }) => {
  const { t } = useTranslation(parentTranslationPath);
  // const loginResponse = useSelector((state) => state.LoginReducers.loginResponse);
  // const [isLoading, setIsLoading] = useState(false); , useState
  const colorstates = JSON.parse(localStorage.getItem('stateColor'));
  console.log('colorstates: ', colorstates);
  const ChangeClickedHandler = (value) => {
    localStorage.setItem('stateColor', JSON.stringify(value));
  };

  return (
    <div className='cards'>
      <div className='card-content'>
        {/* <Spinner isActive={isLoading} isAbsolute /> */}
        <div className='d-flex-column-center main-title-staus'>
          <span className='mx-3'>{t(`${transaltionPath}Status`)}</span>
        </div>
        <div className='d-flex-column-center'>
          <div className='separator-h' />
          <ButtonBase
            className={
              colorstates === 'rgb(75, 214, 75)' ? 'btns theme-menuselectd ' : 'btns theme-menu'
            }
            onClick={() => {
              ChangeClickedHandler('rgb(75, 214, 75)');
              Clicked();
            }}>
            <div className='d-inline-flex fa-center'>
              <span className='mdi mdi-square-rounded-outline square-Online' />
              <span className='mx-3'>{t(`${transaltionPath}online`)}</span>
            </div>
          </ButtonBase>
          <div className='separator-h' />
          <ButtonBase
            className={
              colorstates === 'rgb(211, 198, 13)' ? 'btns theme-menuselectd ' : 'btns theme-menu'
            }
            onClick={() => {
              ChangeClickedHandler('rgb(211, 198, 13)');
              Clicked();
            }}>
            <div className='d-inline-flex fa-center'>
              <span className='mdi mdi-square-rounded-outline square-Away' />
              <span className='mx-3'>{t(`${transaltionPath}Away`)}</span>
            </div>
          </ButtonBase>
          <div className='separator-h' />
          <ButtonBase
            className={
              colorstates === 'rgb(214, 75, 75)' ? 'btns theme-menuselectd ' : 'btns theme-menu'
            }
            onClick={() => {
              ChangeClickedHandler('rgb(214, 75, 75)');
              Clicked();
            }}>
            <div className='d-inline-flex fa-center'>
              <span className='mdi mdi-square-rounded-outline square-disturb' />
              <span className='mx-3'>{t(`${transaltionPath}do-not-disturb`)}</span>
            </div>
          </ButtonBase>
          <div className='separator-h' />
          <ButtonBase
            className={
              colorstates === 'rgb(209, 216, 209)' ? 'btns theme-menuselectd ' : 'btns theme-menu'
            }
            onClick={() => {
              ChangeClickedHandler('rgb(209, 216, 209)');
              Clicked();
            }}>
            <div className='d-inline-flex fa-center'>
              <span className='mdi mdi-square-rounded-outline square-invisible' />
              <span className='mx-3'>{t(`${transaltionPath}invisible`)}</span>
            </div>
          </ButtonBase>
          <div className='separator-h' />
          <Button>
            {' '}
            <span className='create-states'>{t(`${transaltionPath}create-your-own-status`)}</span>
          </Button>

          <div />
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
StatusMenuComponent.displayName = 'StatusMenuComponent';
StatusMenuComponent.propTypes = { Clicked: PropTypes.func.isRequired };
