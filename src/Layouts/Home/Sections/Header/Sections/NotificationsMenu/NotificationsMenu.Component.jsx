import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

const parentTranslationPath = 'HeaderView';
const transaltionPath = 'NotificationsMenuComponent.';
export const NotificationsMenuComponent = memo(() => {
  const { t } = useTranslation(parentTranslationPath);
  // const loginResponse = useSelector((state) => state.LoginReducers.loginResponse);
  // const [isLoading, setIsLoading] = useState(false); , useState

  return (
    <div className='cards'>
      <div className='card-content'>
        {/* <Spinner isActive={isLoading} isAbsolute /> */}
        <div className='d-flex-column-center main-title-staus'>
          <span className='mx-3'>{t(`${transaltionPath}Notification`)}</span>
        </div>
        <div className='separator-h' />
      </div>
      {/* <div className="card-footer">
        <ButtonBase className="btns theme-solid mb-2" onClick={editProfileHandler}>
          <span>{t(`${transaltionPath}edit-profile`)}</span>
        </ButtonBase>        <div className='separator-h' />
        <ButtonBase className="btns theme-outline mb-2" onClick={logout}>
          <span>{t(`${transaltionPath}logout`)}</span>
        </ButtonBase>
      </div> */}
    </div>
  );
});
NotificationsMenuComponent.displayName = 'NotificationsMenuComponent';
NotificationsMenuComponent.propTypes = {};
