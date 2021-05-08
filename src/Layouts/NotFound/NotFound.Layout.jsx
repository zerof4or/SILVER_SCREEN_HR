import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from 'react-i18next';
import NotFound from '../../Assets/Images/Defaults/404.png';
import './NotFound.scss';

const parentTranslationPath = 'Shared';
const translationPath = 'NotFoundViews.';
const NotFoundLayout = () => {
  const { t } = useTranslation(parentTranslationPath);

  return (
    navigator.onLine && (
      <Grid container className="no-data-result">
        <Grid item className="no-data-text">
          <h1 className="no-data-title">404</h1>
          <h3 className="no-data-result-subtitle">{t(`${translationPath}Error-page-not-found`)}</h3>
        </Grid>
        <Grid item>
          <img src={NotFound} alt={t(`${translationPath}not-found`)} className="no-data-img" />
        </Grid>
      </Grid>
    )
  );
};
export default NotFoundLayout;
