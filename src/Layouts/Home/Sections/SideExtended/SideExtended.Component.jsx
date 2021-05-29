import React from 'react';
import PropTypes from 'prop-types';
import './SideExtended.Style.scss';
import { useTranslation } from 'react-i18next';
import ButtonBase from '@material-ui/core/ButtonBase';
import { FilterByTreeComponent } from '../../../../Components';
import { treeListTest } from './FilterByTreeTempData';
const parentTranslationPath = 'Shared';
const translationPath = '';
export const SideExtendedComponent = ({ isOpenSideExtended, onChangeSideExtended }) => {
  const { t } = useTranslation(parentTranslationPath);
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
      <div className="side-extended-body-wrapper">
        <FilterByTreeComponent
          treeList={treeListTest}
          parentTranslationPath={parentTranslationPath}
          translationPath={translationPath}
        />
      </div>
    </div>
  );
};

SideExtendedComponent.propTypes = {
  onChangeSideExtended: PropTypes.func.isRequired,
  isOpenSideExtended: PropTypes.bool.isRequired,
};
