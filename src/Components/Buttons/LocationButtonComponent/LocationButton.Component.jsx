import React, { useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import './LocationButton.Style.scss';
import { ButtonBase } from '@material-ui/core';
import CollapseComponent from '../../Collapse/Collapse.Component';
import { useOnClickOutside } from '../../../Hubs';
import { useTranslation } from 'react-i18next';

export const LocationButtonComponent = ({
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
  console.log('isOpenMenu: ', isOpenMenu);
  const LocationButtonRef = useRef(null);
  useOnClickOutside(LocationButtonRef, () => {
    if (isOpenMenu) setIsOpenMenu(false);
  });
  const ViewCollaps = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div className='LocationButtonComponent-wrapper' ref={LocationButtonRef}>
      <CollapseComponent
        isOpen={isOpenMenu}
        top={40}
        isAbsolute
        classes={CollapseComponentclasses}
        component={CollapseComponentView || undefined}
      />
      <div className='Button-root'>
        <ButtonBase onClick={ViewCollaps}>
          <div>
            <span className={`${icon} ${iconClass} mx-2`} />
          </div>
          {t(`${translationPath}${defaultTitle}`)}
          <span className={isOpenMenu ? 'mdi mdi-chevron-up mx-2' : 'mdi mdi-chevron-down mx-2'} />
        </ButtonBase>
      </div>
    </div>
  );
};
export default LocationButtonComponent;
LocationButtonComponent.propTypes = {
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
LocationButtonComponent.defaultProps = {
  translationPath: '',
  parentTranslationPath: '',
  icon: 'mdi mdi-map-marker-radius  ',
  iconClass: '',
  CollapseComponentView: '',
  defaultTitle: 'Location',
  CollapseComponentclasses: 'Location-menu-collapse-wrapper',
};
