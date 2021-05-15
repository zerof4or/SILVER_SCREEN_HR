//, useDispatch , useEffect, useCallback // import { useSelector } from 'react-redux';  InnerHeaderComponent,
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Inputs } from '../../../../Components';
import { ButtonBase } from '@material-ui/core';
import maintenanceContract from '../../../../StaticJOSN/maintenanceContract.json';
import './Employee.Style.scss';
import { EmployeeTabelView } from './EmployeeTypeView/EmployeeTabel.View';
import PopoverComponent from '../../../../Components/Popover/Popover.Component';

const parentTranslationPath = 'EmployeeView';
const translationPath = '';
export const EmployeeView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);
  // const [activeSideButton, setActiveSideButton] = useState(1);
  // const [activeItem, setActiveItem] = useState(null);
  // const loginResponse = useSelector((state) => state.login.loginResponse);
  const [ActionsPopover, setActionsPopover] = useState(null);
  const [filter] = useState({
    pageIndex: 0,
    pageSize: 25,
  });
  const actionsPopoverClickedHandler = (event) => {
    setActionsPopover(event.currentTarget);
  };
  const actionsPopoverCloseHandler = () => {
    setActionsPopover(null);
  };
  return (
    <div className='EmployeeView w-100'>
      <div className='Sub-InnerHeader'>
        <div className='attendance-check-filter'>
          <div className='dots-vertical'>
            <ButtonBase onClick={actionsPopoverClickedHandler}>
              <span className='mdi mdi-dots-vertical' />
            </ButtonBase>
            <PopoverComponent
              idRef='headerActionsPopoverRef'
              attachedWith={ActionsPopover}
              popoverClasses='header-actions-popover-wrapper'
              handleClose={actionsPopoverCloseHandler}
              component={
                <div>
                  <div>Popover Opation 1</div>
                  <div>Popover Opation 2</div>
                  <div>Popover Opation 3</div>
                  <div>Popover Opation 4</div>
                </div>
              }
            />
          </div>
          <div className='filter-button'>
            <ButtonBase>
              <span className='mdi mdi-filter' />
              {t('Filter')}
            </ButtonBase>
          </div>
          <div className='location-button'>
            <ButtonBase>Location</ButtonBase>
          </div>
        </div>
        <div className='attendance-check-search'>
          <div className='leave-button'>
            <ButtonBase>Add new employee</ButtonBase>
          </div>
          <div className='search-text'>
            <Inputs
              onInputChanged={() => {}}
              endAdornment={<span className='mdi mdi-magnify px-2' />}
              wrapperClasses='theme-primary'
              fieldClasses='inputs theme-primary ml-2'
            />
          </div>
        </div>
      </div>

      <div className='Employee-wraper'>
        <div className='mt-3'>
          <EmployeeTabelView
            Data={maintenanceContract}
            parentTranslationPath={parentTranslationPath}
            translationPath={translationPath}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
};
