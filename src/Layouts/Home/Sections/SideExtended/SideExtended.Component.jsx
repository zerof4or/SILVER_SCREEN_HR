import React from 'react';
import PropTypes from 'prop-types';
import './SideExtended.Style.scss';
import { useTranslation } from 'react-i18next';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Fade } from '@material-ui/core';
import AddingList from './lists/AddingList/AddingList';
export const SideExtendedComponent = ({ isOpenSideExtended, onChangeSideExtended }) => {
  const { t } = useTranslation('Shared');
  return (
    <div
      className={`side-extended-wrapper childs-wrapper${
        (isOpenSideExtended && ' is-open-side-extended') || ''
      }`}
    >
      <div className="action-wrapper">
        <div className="title-wrapper">
          <span className="mdi mdi-filter" />
          <span className="px-1">{t('filter-by')}</span>
        </div>
        <ButtonBase className="btns-icon theme-outline toggler-btn" onClick={onChangeSideExtended}>
          <span className={`mdi mdi-chevron-${(isOpenSideExtended && 'left') || 'right'}`} />
        </ButtonBase>
      </div>
      <div className="side-extended-body-wrapper"></div>
      <div className='favorite-by-wrapper'>
            <Fade in={!!isOpenSideExtended} unmountOnExit>
              <div className='filter-by-title px-3'>{t('favorite-list')}</div>
            </Fade>
            <ButtonBase className='favorite-button mr-1' >
              <span className='mdi mdi-playlist-plus' />
            </ButtonBase>
          </div>
          <div className='adding-list-wrapper'>
            <Fade >
              <AddingList />
            </Fade>
          </div>
    </div>
  );
};

SideExtendedComponent.propTypes = {
  onChangeSideExtended: PropTypes.func.isRequired,
  isOpenSideExtended: PropTypes.bool.isRequired,
};
