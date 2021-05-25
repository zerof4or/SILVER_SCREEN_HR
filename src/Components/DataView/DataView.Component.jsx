import { Button, ButtonBase } from '@material-ui/core';
import React, { useCallback, useRef, useState } from 'react';
import { TableViewType } from '../../Enums/TableViewType.Enum';
import { useOnClickOutside } from '../../Hubs';
import CollapseComponent from '../Collapse/Collapse.Component';
// import { PropTypes } from 'prop-types';
import './DataView.Style.scss';
import { PropTypes } from 'prop-types';

export const DataView = ({ onViewChanged }) => {
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
  const ClickButtonviewOpation = useCallback(
    (value) => {
      setview(value);
      onViewChanged(value);
      setIsOpenMenu(false);
    },
    [onViewChanged]
  );
  return (
    <div className="DataView-view-wrapper" ref={viewRef}>
      <div className="view-item">
        <div className="button-wrapper-DataView">
          <div className="button-STYLE" label="Sort by">
            <ButtonBase onClick={ViewBBTClicked}>
              <div>
                <span className={`${view.icon}`}></span>
              </div>
              {view.value} {'View'}
              <span className="mdi mdi-chevron-down  arrow" />
            </ButtonBase>
          </div>
          <CollapseComponent
            isOpen={isOpenMenu}
            top={60}
            isAbsolute
            classes="view-menu-collapse-wrapper"
            component={TableViewType.map((item, index) => (
              <div key={`itemKey${index + 1}`} className="view-item w-100">
                <Button onClick={() => ClickButtonviewOpation(item)}>
                  <div className="item-wraper">
                    <div className={`${item.icon}`} />
                    &nbsp;
                    <div className="">
                      {item.value}
                      &nbsp;
                      {'View'}
                    </div>
                  </div>
                </Button>
              </div>
            ))}
          />
        </div>
      </div>
    </div>
  );
};
export default DataView;
DataView.propTypes = {
  onViewChanged: PropTypes.func.isRequired,
};
