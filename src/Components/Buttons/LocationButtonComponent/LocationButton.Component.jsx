import React, { useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import './LocationButton.Style.scss';
import { ButtonBase } from '@material-ui/core';
import CollapseComponent from '../../Collapse/Collapse.Component';
import { useOnClickOutside } from '../../../Hubs';
import { useTranslation } from 'react-i18next';
import { AutocompleteComponent } from '../../Autocomplete/Autocomplete.Component';
import { COUNTRY_NAMES } from '../../../Enums/CountryNames';

export const LocationButtonComponent = ({
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
  const LocationButtonRef = useRef(null);
  useOnClickOutside(LocationButtonRef, () => {
    if (isOpenMenu) setIsOpenMenu(false);
  });
  const ViewCollaps = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <div
      className='LocationButtonComponent-wrapper'
      // ref={LocationButtonRef}
    >
      <div className='Location-container'>
        <CollapseComponent
          isOpen={isOpenMenu}
          top={top}
          isAbsolute
          classes={CollapseComponentclasses}
          component={
            CollapseComponentView || (
              <>
                <div className='LocationButtonComponent-auto-wraper'>
                  <div className='Location-inputs-wraper'>
                    <div className='county-title'> Country/Region </div>
                    <div className='county-entry'>
                      <AutocompleteComponent
                        idRef='paymentTypeIdRef'
                        multiple={false}
                        data={COUNTRY_NAMES || []}
                        displayLabel={(option) => option.label || ''}
                        withoutSearchButton
                        isWithError
                        parentTranslationPath={parentTranslationPath}
                        translationPath={translationPath}
                        onChange={(event, newValue) => {
                          console.log(newValue);
                        }}
                      />
                    </div>
                  </div>
                  <div className='Location-inputs-wraper'>
                    <div className='county-title'> City </div>
                    <div className='county-entry'>
                      <AutocompleteComponent
                        idRef='paymentTypeIdRef'
                        multiple={false}
                        data={COUNTRY_NAMES || []}
                        displayLabel={(option) => option.label || ''}
                        withoutSearchButton
                        isWithError
                        parentTranslationPath={parentTranslationPath}
                        translationPath={translationPath}
                        onChange={(event, newValue) => {
                          console.log(newValue);
                        }}
                      />
                    </div>
                  </div>
                  <div  className='line w-100' />
                  <div className='bbt-wrpaer-filter'>
                    <div className='bbt-primary small-secondary px-2 '>
                    <ButtonBase onClick={ViewCollaps}>Cancel</ButtonBase>
                    </div>
                    <div className='bbt-primary small '>
                      <ButtonBase>Apply Filters</ButtonBase>
                    </div>
                  </div>
                </div>
              </>
            ) ||
            undefined
          }
        />
      </div>
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
  onViewChanged: PropTypes.func,
  icon: PropTypes.string,
  iconClass: PropTypes.string,
  translationPath: PropTypes.string,
  parentTranslationPath: PropTypes.string,
  translationPathForData: PropTypes.string,
  top: PropTypes.number,
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
  translationPathForData: undefined,
  onViewChanged: undefined,
  icon: 'mdi mdi-map-marker-radius  ',
  iconClass: '',
  top: 40,
  CollapseComponentView: '',
  defaultTitle: 'Location',
  CollapseComponentclasses: 'Location-menu-collapse-wrapper',
};
