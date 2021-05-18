import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonBase } from '@material-ui/core';
import { Tables } from '../../../../../Components';
import PropTypes from 'prop-types';
import PopoverComponent from '../../../../../Components/Popover/Popover.Component';
import { TableListOpationActions } from '../../../../../Enums';
export const EmployeeTabelView = ({ Data, parentTranslationPath, translationPath, filter }) => {
  const { t } = useTranslation(parentTranslationPath);
  const [ActionsPopover, setActionsPopover] = useState(null);
  const [ColumnsPopover, setColumnsPopover] = useState(null);
  const tableActionClicked = useCallback((actionEnum, item) => {
    // if (actionEnum === TableActions.delete.key) setActiveItem(item);         setFilter
    // else if (actionEnum === TableActions.edit.key) setActiveItem(item);
  }, []);
  const actionsPopoverClickedHandler = (event) => {
    setActionsPopover(event.currentTarget);
  };

  const viewColumnsPopoverClickedHandler = (event) => {
    setColumnsPopover(event.currentTarget);
  };

  const actionsPopoverCloseHandler = () => {
    setActionsPopover(null);
  };
  const viewColumnsPopoverCloseHandler = () => {
    setColumnsPopover(null);
  };

  const ClickButtonListOpation = useCallback((value) => {
    console.log('value: ', value);
  }, []);

  // const onSelectAllClicked = () => {

  // };
  const DataTable = [
    {
      id: 1,
      isSortable: true,
      label: t(`${translationPath}Name`),
      input: 'maintenanceContractId',
      isSticky: true,
      left: 0,
    },
    {
      id: 2,
      isSortable: true,
      label: t(`${translationPath}Designation`),
      // eslint-disable-next-line react/display-name
      component: (item) => <span>{(item && item.contactName) || 'N/A'}</span>,
      isDraggable: true,
    },
    {
      id: 3,
      isSortable: true,
      label: t(`${translationPath}Email`),
      isDraggable: true,
      input: 'propertyName',
    },
    {
      id: 4,
      isSortable: true,
      label: t(`${translationPath}Phone`),
      isDraggable: true,
      input: 'portfolioName',
    },
    {
      id: 5,
      isSortable: true,
      label: t(`${translationPath}Group`),
      input: 'amount',
      isDraggable: true,
    },
    {
      id: 7,
      isDate: true,
      label: t(`${translationPath}StartDate`),
      input: 'startDate',
      isDraggable: true,
    },
    {
      id: 8,
      isDate: true,
      label: t(`${translationPath}EndDate`),
      input: 'endDate',
      isDraggable: true,
    },
    {
      id: 9,
      label: t(`${translationPath}Address`),
      isDraggable: true,
      // eslint-disable-next-line react/display-name
      component: (item) => (
        <span>
          {(item && item.amountType === 1
            ? t(`${translationPath}FixedAmount`)
            : t(`${translationPath}PercentageAmount`)) || 'N/A'}
        </span>
      ),
    },
    {
      id: 13,
      isSticky: true,
      right: 0,
      // eslint-disable-next-line react/display-name
      headerComponent: (item) => (
        <>
          <div className=''>
            <ButtonBase onClick={viewColumnsPopoverClickedHandler} classNam=''>
              <span className='mdi mdi-cog  cog-icon' />,
            </ButtonBase>
          </div>
        </>
      ),
      // eslint-disable-next-line react/display-name
      component: (item) => (
        <>
          <div className='Option-wraper'>
            <ButtonBase onClick={actionsPopoverClickedHandler} classNam='dots-vertical'>
              <span className='mdi mdi-dots-vertical' />
            </ButtonBase>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className='EmployeeTabelView w-100'>
      <Tables
        data={(Data && Data.result) || []}
        selectAllOptions={{
          // getIsSelected,
          // onSelectClicked,
          //  onSelectAllClicked,
          // getIsDisabled,
          disabledRows: [],
          withCheckAll: true,
        }}
        headerData={DataTable}
        defaultActions={[]}
        actionsOptions={{
          onActionClicked: tableActionClicked,
        }}
        parentTranslationPath={parentTranslationPath}
        translationPath={translationPath}
        totalItems={(Data && Data.totalCount) || 0}
        itemsPerPage={filter.pageSize}
        activePage={filter.pageIndex}
      />
      <PopoverComponent
        idRef='headerActionsPopovercogRef'
        attachedWith={ActionsPopover}
        popoverClasses=''
        header-actions-popover-wrapper
        handleClose={actionsPopoverCloseHandler}
        component={
          <div className='Popap-Option'>
            {TableListOpationActions.map((item, index) => (
              <ButtonBase
                className='Option'
                key={`OptionKey${index + 1}`}
                onClick={() => ClickButtonListOpation(item.key)}>
                <div className={item.icon} />
                <div>{item.value}</div>
              </ButtonBase>
            ))}
          </div>
        }
      />
      <PopoverComponent
        idRef='ColumnPopoverRef'
        attachedWith={ColumnsPopover}
        popoverClasses=''
        header-actions-popover-wrapper
        handleClose={viewColumnsPopoverCloseHandler}
        component={
          <div className='Popap-Option'>
            {DataTable.map((item, index) => (
              <div className='Column' key={`ColumnKey${index + 1}`}>
                <div>{item.label}</div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
};
EmployeeTabelView.propTypes = {
  Data: PropTypes.instanceOf(Array),
  filter: PropTypes.string.isRequired,
  translationPath: PropTypes.string,
  parentTranslationPath: PropTypes.string,
  translationPathForData: PropTypes.string,
};
// onClick={() => ClickButtonListOpation(item.key)}
