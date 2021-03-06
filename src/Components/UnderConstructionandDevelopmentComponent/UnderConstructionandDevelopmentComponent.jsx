import React from 'react';
import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import UnderDevelopment from '../../Assets/Images/Defaults/UnderConstructionandDevelopmentComponent.gif';
import UnderDevelopment2 from '../../Assets/Images/Defaults/UnderConstructionandDevelopmentComponent2.gif';
import './UnderConstructionandDevelopmentComponent.scss';
import InnerHeaderComponent from '../../Components/InnerHeader/InnerHeader.Component';
export const UnderConstructionandDevelopmentComponent = () => {
  const { t } = useTranslation('Shared');
  const translationPath = 'NotFoundViews.';

  return (
    navigator.onLine && (
      <div className='d-inline-flex fa-center w-100'>
        <InnerHeaderComponent component={<></>} />
        <Grid container className='no-search-result-Under'>
          <Grid item className='no-result-text'>
            <h1 className='no-result-title'>
              {t(`${translationPath}this-page-Under-Construction-and-Development`)}
            </h1>
            <h3 className='no-search-result-subtitle'>
              {t(`${translationPath}It-will-be-present-in-the-shortest-time`)}
            </h3>
          </Grid>
          <Grid item>
            <img
              src={UnderDevelopment}
              alt={t(`${translationPath}UnderConstructionandDevelopment`)}
              className='no-search-img'
            />  <img
            src={UnderDevelopment2}
            alt={t(`${translationPath}UnderConstructionandDevelopment`)}
            className='no-search-img2'
          />
          </Grid>
        </Grid>
      </div>
    )
  );
};
