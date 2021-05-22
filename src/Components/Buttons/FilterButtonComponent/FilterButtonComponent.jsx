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
        <ButtonBase onClick={ViewCollaps}>
          <div>
            <span className={`${icon} ${iconClass}`} />
          </div>
          {t(`${translationPath}${defaultTitle}`)}
          <span className='mdi mdi-chevron-down mx-1' />
        </ButtonBase>
      </div>
      <CollapseComponent
        isOpen={isOpenMenu}
        top={60}
        isAbsolute
        classes={CollapseComponentclasses}
        component={CollapseComponentView}
      />
    </div>
  );
};
export default FilterButtonComponent;
FilterButtonComponent.propTypes = {
  onviewChanged: PropTypes.string,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  translationPath: PropTypes.string,
  parentTranslationPath: PropTypes.string,
  translationPathForData: PropTypes.string,
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
  CollapseComponentclasses: 'view-menu-collapse-wrapper',
};
