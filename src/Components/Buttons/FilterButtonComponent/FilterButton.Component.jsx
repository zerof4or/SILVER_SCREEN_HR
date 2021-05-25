import { ButtonBase } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import CollapseComponent from '../../Collapse/Collapse.Component';
import { useOnClickOutside } from '../../../Hubs';
import { useTranslation } from 'react-i18next';
import './FilterButtonComponent.Style.scss';
export const FilterButtonComponent = ({
  defaultTitle,
  icon,
  iconClass,
  translationPath,
  CollapseComponentclasses,
  parentTranslationPath,
  CollapseComponentView,
  top,
}) => {
  const { t } = useTranslation(parentTranslationPath);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const FilterButtonRef = useRef(null);
  useOnClickOutside(FilterButtonRef, () => {
    if (isOpenMenu) setIsOpenMenu(false);
  });
  const ViewCollaps = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div className='FilterButtonComponent-wrapper' ref={FilterButtonRef}>
      <div className='Button-root'>
        <CollapseComponent
          isOpen={isOpenMenu}
          top={top}
          isAbsolute
          classes={CollapseComponentclasses}
          component={CollapseComponentView}
        />
        <ButtonBase onClick={ViewCollaps}>
          <div>
            <span className={`${icon} ${iconClass}`} />
          </div>
          {t(`${translationPath}${defaultTitle}`)}
          <span className={isOpenMenu ? 'mdi mdi-chevron-up  mx-1' : 'mdi mdi-chevron-down mx-1'} />
        </ButtonBase>
      </div>
    </div>
  );
};
export default FilterButtonComponent;
FilterButtonComponent.propTypes = {
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  translationPath: PropTypes.string,
  parentTranslationPath: PropTypes.string,
  top: PropTypes.number,
  CollapseComponentclasses: PropTypes.string,
  CollapseComponentView: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.func,
    PropTypes.node,
  ]),
  defaultTitle: PropTypes.string,
};
FilterButtonComponent.defaultProps = {
  translationPath: '',
  parentTranslationPath: '',
  icon: 'mdi mdi-filter',
  iconClass: '',
  CollapseComponentView: '',
  defaultTitle: 'Filter',
  top: 40,
  CollapseComponentclasses: 'Filter-menu-collapse-wrapper',
};
