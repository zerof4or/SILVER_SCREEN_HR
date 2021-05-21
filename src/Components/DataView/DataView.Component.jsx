import { Button, ButtonBase } from '@material-ui/core';
import React, { useCallback, useRef, useState } from 'react';
import { TableViewType } from '../../Enums/TableViewType.Enum';
import { useOnClickOutside } from '../../Hubs';
import CollapseComponent from '../Collapse/Collapse.Component';
// import { PropTypes } from 'prop-types';
import './DataView.Style.scss';
import { PropTypes } from 'prop-types';

// eslint-disable-next-line react/prop-types
export const DataView = ({onviewChanged}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [view, setview] = useState({
    key: 1,
    value: 'Table',
    icon: 'mdi mdi-table-large',
  });
  const viewRef = useRef(null);
  useOnClickOutside(viewRef, () => {
    if (isOpenMenu) setIsOpenMenu(false);
  });

  const ViewBBTClicked = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const ClickButtonviewOpation = useCallback((value) => {
    setview(value);
    onviewChanged(value)
    setIsOpenMenu(false);
  }, [onviewChanged]);
  return (
    <div className='DataView-view-wrapper' ref={viewRef}>
      <div className='view-item'>
        <div className=''>
          <div className='button-wrapper'>
            <div className='filter-button'>
              <ButtonBase onClick={ViewBBTClicked}>
                <div>
                  <span className={`${view.icon}`}></span>
                </div>
                {view.value} {'View'}
                <span className='mdi mdi-chevron-down  arrow' />
              </ButtonBase>
            </div>
            <CollapseComponent
              isOpen={isOpenMenu}
              top={60}
              isAbsolute
              classes='view-menu-collapse-wrapper'
              component={TableViewType.map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <div className='view-item w-100'>
                  <Button key={`itemKey${index + 1}`} onClick={() => ClickButtonviewOpation(item)}>
                    <div className='item-wraper'>
                      <span className={`${item.icon}`} /> {item.value}
                    </div>
                  </Button>
                </div>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataView;
DataView.propTypes = {
  onviewChanged: PropTypes.string
};
