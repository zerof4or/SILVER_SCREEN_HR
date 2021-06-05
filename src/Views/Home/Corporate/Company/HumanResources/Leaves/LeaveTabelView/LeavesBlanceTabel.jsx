/* eslint-disable react/display-name */
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonBase, Checkbox } from '@material-ui/core';
import { Inputs, Spinner, Tables } from '../../../../../../../Components';
import PropTypes from 'prop-types';
import PopoverComponent from '../../../../../../../Components/Popover/Popover.Component';
import { TableListOpationActions } from '../../../../../../../Enums';

export const LeavesBlanceTabel = ({
  data,
  parentTranslationPath,
  translationPath,
  filter,
  onSelectedRowsCountChanged,
}) => {
  const [isLoading, setisLoading] = useState(true);
  const { t } = useTranslation(parentTranslationPath);
  const [ActionsPopover, setActionsPopover] = useState(null);
  const [ColumnsPopover, setColumnsPopover] = useState(null);
  const [EditPopover, setEditPopover] = useState(null);
  const [EditValue, setEditValue] = useState('Photographer');
  const tableActionClicked = useCallback((actionEnum, item) => {
    // if (actionEnum === TableActions.delete.key) setActiveItem(item);         setFilter
    // else if (actionEnum === TableActions.edit.key) setActiveItem(item);
  }, []);

  const EditPopoverCloseHandler = () => {
    setEditPopover(null);
  };
  const actionsPopoverClickedHandler = (event) => {
    setActionsPopover(event.currentTarget);
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

  const DataTable = [
    {
      id: 0,
      isSortable: true,
      label: t(`${translationPath}id`),
      input: 'id',
      isDraggable: true,
    },
    {
      id: 1,
      isSortable: true,
      label: t(`${translationPath}Employeename`),
      input: 'Employeename',
      left: 0,
    },
    {
      id: 1,
      isSortable: true,
      label: t(`${translationPath}annualleaveentitlement`),
      input: 'annualleaveentitlement',
      left: 0,
    },
    {
      id: 2,
      isSortable: true,
      label: t(`${translationPath}usedleavesthisyear`),
      input: 'usedleavesthisyear',
      isDraggable: true,
    },
    {
      id: 3,
      isSortable: true,
      label: t(`${translationPath}yearendbalance`),
      input: 'yearendbalance',
      isDraggable: true,
    },
    {
      id: 11,
      isSortable: true,
      label: t(`${translationPath}uptodatebalance`),
      input: 'uptodatebalance',
      isDraggable: true,
    },
    {
      id: 12,
      isSortable: true,
      label: t(`${translationPath}unpaid`),
      input: 'unpaid',
      isDraggable: true,
    },
    {
      id: 11,
      isSortable: true,
      label: t(`${translationPath}sick`),
      input: 'sick',
      isDraggable: true,
    },
    {
      id: 12,
      right: 0,
      label: 'Summary',
      cellClasses: 'table-cellOpation',
      component: (item) => (
        <div className='d-inline-flex fa-center '>
          <div className='bbt-gray-lite'>
            <ButtonBase>View</ButtonBase>
          </div>
        </div>
      ),
    },
    {
      id: 13,
      right: 0,
      cellClasses: 'table-cellOpation',
      label: '',
      component: (item) => (
        <div className='d-inline-flex fa-center '>
          <div className='Option-wraper'>
            <ButtonBase onClick={actionsPopoverClickedHandler} className='dots-vertical'>
              <span className='mdi mdi-dots-vertical' />
            </ButtonBase>
          </div>
        </div>
      ),
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 2000);
  }, []);
  return (
    <div className='EmployeeTabelView w-100'>
      <Spinner isActive={isLoading} isAbsolute />
      <Tables
        data={(data && data.result) || []}
        headerData={DataTable}
        defaultActions={[]}
        actionsOptions={{
          onActionClicked: tableActionClicked,
        }}
        parentTranslationPath={parentTranslationPath}
        translationPath={translationPath}
        totalItems={(data && data.totalCount) || 0}
        itemsPerPage={filter.pageSize}
        activePage={filter.pageIndex}
        uniqueKeyInput='id'
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
          <div className='popover-columns-filter-wrapper'>
            <div className='p-2'> Choose columns </div>
            <div className='fiter-title'>Visible columns </div>
            {DataTable.map((item, index) =>
              index !== 5 ? (
                <div className='Column-Checkbox' key={`ColumnKey${index + 1}`}>
                  <div>
                    <Checkbox
                      defaultChecked
                      color='primary'
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    {item && item.label}
                  </div>
                </div>
              ) : (
                ''
              )
            )}
            <div className='fiter-title'>Hidden columns</div>
            <div className='Column-Checkbox'>
              <Checkbox color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
              Jop
            </div>
            <div className='Column-Checkbox'>
              <Checkbox color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
              Organization
            </div>
            <div className='Column-Checkbox'>
              <Checkbox color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
              Address
            </div>
            <div className='d-inline-flex-column-center-v w-100'>
              <Button variant='contained' color='primary' onClick={viewColumnsPopoverCloseHandler}>
                Save
              </Button>
            </div>
          </div>
        }
      />
      <PopoverComponent
        idRef='EditPopoverRef'
        attachedWith={EditPopover}
        popoverClasses='Edit-actions-popover-wrapper'
        handleClose={EditPopoverCloseHandler}
        component={
          <div>
            <Inputs
              idRef='EditInputsRef'
              wrapperClasses='theme-underline'
              label={t(`${translationPath}Designation`)}
              inputPlaceholder={t(`${translationPath}Enter value`)}
              value={EditValue}
              onInputChanged={(e) => setEditValue(e.target.value)}
            />
          </div>
        }
      />
    </div>
  );
};
LeavesBlanceTabel.propTypes = {
  data: PropTypes.shape({ result: PropTypes.instanceOf(Array), totalCount: PropTypes.number }),
  filter: PropTypes.instanceOf(Object).isRequired,
  onSelectedRowsCountChanged: PropTypes.func,
  translationPath: PropTypes.string.isRequired,
  parentTranslationPath: PropTypes.string.isRequired,
  translationPathForData: PropTypes.string,
};
LeavesBlanceTabel.defaultProps = {
  data: {
    result: [],
    totalCount: 0,
  },
  onSelectedRowsCountChanged: undefined,
  translationPathForData: undefined,
};
