//, useDispatch , useEffect, useCallback // import { useSelector } from 'react-redux';  InnerHeaderComponent,
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { Inputs } from '../../../../Components';
import { Button, ButtonBase, ButtonGroup } from '@material-ui/core';
import maintenanceContract from '../../../../StaticJOSN/maintenanceContract.json';
import './Employee.Style.scss';
import { EmployeeTabelView } from './EmployeeTypeView/EmployeeTabel.View';
import PopoverComponent from '../../../../Components/Popover/Popover.Component';
import { Sorterletters } from '../../../../Components/Sorterletters/Sorterletters.Component';
import { Inputs } from '../../../../Components';

const parentTranslationPath = 'EmployeeView';
const translationPath = '';
export const EmployeeView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);
  // const [activeSideButton, setActiveSideButton] = useState(1);
  // const [activeItem, setActiveItem] = useState(null);
  // const loginResponse = useSelector((state) => state.login.loginResponse); setData
  const [CehckIt] = useState(true);
  const [ViewType, setViewType] = useState(1);
  const [Data, setData] = useState(maintenanceContract);
  const [ViewName, setViewName] = useState('Table');
  const [itemOpationView] = useState([
    {
      key: 1,
      value: 'Table',
      icon: 'mdi mdi-table-large',
    },
    {
      key: 2,
      value: 'Grid',
      icon: 'mdi mdi-view-grid-outline',
    },
    {
      key: 3,
      value: 'Card',
      icon: 'mdi mdi-credit-card-outline',
    },
  ]);
  console.log('ViewType: ', ViewType);
  const [ActionsPopover, setActionsPopover] = useState(null);
  const [ViewPopover, setViewPopover] = useState(null);
  const [filter] = useState({
    pageIndex: 1,
    pageSize: 60,
  });
  const actionsPopoverClickedHandler = (event) => {
    setActionsPopover(event.currentTarget);
  };
  const actionsPopoverCloseHandler = () => {
    setActionsPopover(null);
  };
  const ViewPopoverClickedHandler = (event) => {
    setViewPopover(event.currentTarget);
    console.log('event.currentTarget: ', event.currentTarget);
  };
  const ViewPopoverCloseHandler = () => {
    setViewPopover(null);
  };

  const ClickButtonviewOpation = useCallback(
    (value) => {
      setViewName(value.value);
      setViewType(value.key);
    },
    [setViewType]
  );

  // const FilterHandler = (value) => {
  //   const result = maintenanceContract.result.filter(
  //     (item) => item.propertyName === +value.target.value
  //   );
  //   console.log(result);
  //   setData({
  //     result: result,

  //     totalCount: 1,
  //   });
  // };

  const FilterHandler = (value) => {
    const result = maintenanceContract.result.filter((item) =>
      item.propertyName.toLowerCase().includes(value.target.value.toLowerCase())
    );
    console.log(result);
    setData({
      result: result,
      totalCount: result.length,
    });
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
                  <ButtonBase>{t('disabled')}</ButtonBase>
                  <ButtonBase>{t('enabled')}</ButtonBase>
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
        <div>
          <Sorterletters />
        </div>
        <div className='attendance-check-search'>
          <div className='search-text'>
            <Inputs
              onInputChanged={(event) => FilterHandler(event)}
              endAdornment={<span className='mdi mdi-magnify px-2' />}
              wrapperClasses='theme-primary'
              fieldClasses='inputs theme-primary ml-2'
            />
          </div>
        </div>
      </div>

      <div className='Employee-wraper'>
        <div className='action-contener  w-100'>
          <div className='action-tabel-wraper'>
            <div className='bbt-dark space'>
              <ButtonBase disabled={CehckIt}>
                <span className='mdi mdi-account-plus ' />
                &nbsp; Assign to Project
              </ButtonBase>
            </div>
            <div className='bbt-dark space'>
              <ButtonBase disabled={CehckIt}>
                <span className='mdi mdi-playlist-plus' />
                &nbsp;
              </ButtonBase>
            </div>
            <div className='bbt-dark space'>
              <ButtonBase disabled={CehckIt}>
                <span className='mdi mdi-email' />
              </ButtonBase>
            </div>
            <div className='bbt-dark space'>
              <ButtonBase disabled={CehckIt}>
                <span className='mdi mdi-forum' />
              </ButtonBase>
            </div>
            <div className='bbt-dark space'>
              <ButtonBase disabled={CehckIt}>
                <span className='mdi mdi-video-plus' />
              </ButtonBase>
            </div>
            <div className='bbt-gray space'>
              <ButtonBase disabled={CehckIt}>
                <span className='mdi mdi-delete' />
              </ButtonBase>
            </div>
            <div className='bbt-gray space'>
              <ButtonBase disabled={CehckIt}>
                <span className='mdi mdi-archive' />
              </ButtonBase>
            </div>
            <div className='total-title-wraper'>
              {' '}
              <span className='total-title'>Total contacts:</span>{' '}
              <span className='total-num'>
                {maintenanceContract.totalCount === Data.totalCount
                  ? maintenanceContract.totalCount
                  : (maintenanceContract.totalCount !== Data.totalCount &&
                      Data.totalCount + ` From   (   ${maintenanceContract.totalCount}  )`) ||
                    ''}
              </span>
            </div>
          </div>

          <ButtonGroup aria-label='split button' className=' space'>
            <div className='bbt-dark  space ViewName'>
              <ButtonBase>{ViewName}</ButtonBase>
            </div>
            <div className='bbt-gray space'>
              <ButtonBase onClick={ViewPopoverClickedHandler}>
                <span className='mdi mdi-arrow-down-bold ' />
              </ButtonBase>
            </div>
            <PopoverComponent
              idRef='ViewPopoverRef'
              attachedWith={ViewPopover}
              popoverClasses='View-popover-wrapper'
              handleClose={ViewPopoverCloseHandler}
              component={
                <div className='Popover-View w-100'>
                  {itemOpationView.map((item, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className='view-item w-100'>
                      <Button
                        key={`itemKey${index + 1}`}
                        onClick={() => ClickButtonviewOpation(item)}>
                        <div className='item-wraper'>
                          <span className={item.icon} /> {item.value}
                        </div>
                      </Button>
                    </div>
                  ))}
                </div>
              }
            />
          </ButtonGroup>
          <div className='bbt-primary space'>
            <ButtonBase>
              <span className='mdi mdi-account-plus ' />
              &nbsp; Add new employee
            </ButtonBase>
          </div>
          <div></div>
        </div>
        <div className='EmployeeTabelView-wraper'>
          <EmployeeTabelView
            Data={Data}
            parentTranslationPath={parentTranslationPath}
            translationPath={translationPath}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
};
