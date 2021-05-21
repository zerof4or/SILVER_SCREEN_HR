import { ButtonBase } from '@material-ui/core'; //Button,
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from '../../Hubs';
import CollapseComponent from '../Collapse/Collapse.Component';
// import { PropTypes } from 'prop-types';
import './LocationComponent.Style.scss';
import { PropTypes } from 'prop-types';
import CountriesAutocomplete from './Countries/CountriesAutocomplete';

// eslint-disable-next-line react/prop-types
export const LocationComponent = ({ onviewChanged }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const viewRef = useRef(null);
  useOnClickOutside(viewRef, () => {
    if (isOpenMenu) setIsOpenMenu(false);
  });

  const ViewBBTClicked = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  // const ClickButtonviewOpation = useCallback((value) => {
  //   setview(value);
  //   onviewChanged(value)
  //   setIsOpenMenu(false);
  // }, [onviewChanged]);
  return (
    <div className='DataView-view-wrapper' ref={viewRef}>
      <div className='view-item'>
        <div className=''>
          <div className='button-wrapper'>
            <div className='filter-button'>
              <ButtonBase onClick={ViewBBTClicked}>
                <div>
                  <span className={`${'s'}`}></span>
                </div>
                <span className='mdi mdi-map-marker-radius  ' />
                {'Location'}
                <span className='mdi mdi-chevron-down  ' />
              </ButtonBase>
            </div>
            <CollapseComponent
              isOpen={isOpenMenu}
              top={60}
              isAbsolute
              classes='Location-menu-collapse-wrapper'
              component={<CountriesAutocomplete />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LocationComponent;
LocationComponent.propTypes = {
  onviewChanged: PropTypes.string,
};
