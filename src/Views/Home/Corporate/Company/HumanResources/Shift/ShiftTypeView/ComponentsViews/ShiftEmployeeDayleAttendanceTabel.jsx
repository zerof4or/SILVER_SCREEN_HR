/* eslint-disable react/display-name */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonBase, Checkbox } from '@material-ui/core';
import { Inputs, Tables } from '../../../../../../../../Components';
import PropTypes from 'prop-types';
import '../../Shift.Style.scss';
import PopoverComponent from '../../../../../../../../Components/Popover/Popover.Component';
import { ContactTypeEnum, TableListOpationActions } from '../../../../../../../../Enums';
export const ShiftEmployeeDayleAttendanceTabel = ({
  data,
  parentTranslationPath,
  translationPath,
  filter,
  onSelectedRowsCountChanged,
}) => {
  const { t } = useTranslation(parentTranslationPath);
  const [ActionsPopover, setActionsPopover] = useState(null);
  const [ColumnsPopover, setColumnsPopover] = useState(null);
  const [EditPopover, setEditPopover] = useState(null);
  const [EditValue, setEditValue] = useState('Photographer');
  const tableActionClicked = useCallback((actionEnum, item) => {
    // if (actionEnum === TableActions.delete.key) setActiveItem(item);         setFilter
    // else if (actionEnum === TableActions.edit.key) setActiveItem(item);
  }, []);

  console.log('  data: ', data);
  const EditPopoverCloseHandler = () => {
    setEditPopover(null);
  };
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
  const AVATARS = [
    ContactTypeEnum.employee.defaultImg,
    ContactTypeEnum.employee2.defaultImg,
    ContactTypeEnum.employee3.defaultImg,
    ContactTypeEnum.employee4.defaultImg,
    ContactTypeEnum.employee5.defaultImg,
    ContactTypeEnum.employee6.defaultImg,
    ContactTypeEnum.employee7.defaultImg,
  ];
  const pickRandom = (array) => {
    if (!Array.isArray(array)) return undefined;
    return array[Math.floor(Math.random() * array.length)];
  };
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
      label: t(`${translationPath}Employee Name`),
      component: (item) => (
        <div className='contact-img-with-text-wraper'>
          <img src={pickRandom(AVATARS)} className='img-contact-tabel' alt={'d'} />
          <div>{(item && item.Employeename) || 'N/A'}</div>
        </div>
      ),
      isSticky: true,
      left: 0,
    },
    {
      id: 2,
      isSortable: true,
      label: t(`${translationPath}1 Dec - Mon`),
      component: (item) => (
        <div className='item-date-wraper'>
          <div className='d-flex-column-center'>{item && item.date}</div>
          <div className='d-flex-column pt-1'>{item && item.place}</div>
        </div>
      ),
      isDraggable: true,
    },
    {
      id: 3,
      isSortable: true,
      label: t(`${translationPath}2 Dec - Mon`),
      component: (item) => (
        <div className='item-date-wraper'>
          <div className='d-flex-column-center'>{item && item.date}</div>
          <div className='d-flex-column pt-1'>{item && item.place}</div>
        </div>
      ),
      isDraggable: true,
    },
    {
      id: 4,
      isSortable: true,
      label: t(`${translationPath}3 Dec - Mon`),
      component: (item) => (
        <div className='item-date-wraper'>
          <div className='d-flex-column-center'>{item && item.date}</div>
          <div className='d-flex-column pt-1'>{item && item.place}</div>
        </div>
      ),
      isDraggable: true,
    },
    {
      id: 5,
      isSortable: true,
      label: t(`${translationPath}4 Dec - Mon`),
      component: (item) => (
        <div className='item-date-wraper'>
          <div className='d-flex-column-center'>{item && item.date}</div>
          <div className='d-flex-column pt-1'>{item && item.place}</div>
        </div>
      ),
      isDraggable: true,
    },
    {
      id: 6,
      isSortable: true,
      label: t(`${translationPath}5 Dec - Mon`),
      component: (item) => (
        <div className='item-date-wraper'>
          <div className='d-flex-column-center'>{item && item.date}</div>
          <div className='d-flex-column pt-1'>{item && item.place}</div>
        </div>
      ),
      isDraggable: true,
    },
    {
      id: 7,
      isSortable: true,
      label: t(`${translationPath}6 Dec - Mon`),
      component: (item) => (
        <div className='item-date-wraper-off '> 
          <div className='d-flex-column-center pt-2'>{item && item.dayoff}</div>
      
        </div>
      ),
      isDraggable: true,
    },
    {
      id: 7,
      isSortable: true,
      label: t(`${translationPath}7 Dec - Mon`),
      component: (item) => (
        <div className='item-date-wraper'>
          <div className='d-flex-column-center'>{item && item.date}</div>
          <div className='d-flex-column pt-1'>{item && item.place}</div>
        </div>
      ),
      isDraggable: true,
    },
    {
      id: 7,
      isSortable: true,
      label: t(`${translationPath}8 Dec - Mon`),
      component: (item) => (
        <div className='item-date-wraper'>
          <div className='d-flex-column-center'>{item && item.date}</div>
          <div className='d-flex-column pt-1'>{item && item.place}</div>
        </div>
      ),
      isDraggable: true,
    },
    {
      id: 7,
      isSortable: true,
      label: t(`${translationPath}9 Dec - Mon`),
      component: (item) => (
        <div className='item-date-wraper'>
          <div className='d-flex-column-center'>{item && item.date}</div>
          <div className='d-flex-column pt-1'>{item && item.place}</div>
        </div>
      ),
      isDraggable: true,
    },
    {
      id: 13,
      isSticky: true,
      right: 0,
      cellClasses: 'table-cellOpation',
      headerComponent: (item) => (
        <>
          <div>
            <ButtonBase onClick={viewColumnsPopoverClickedHandler}>
              <span className='mdi mdi-cog  cog-icon' />,
            </ButtonBase>
          </div>
        </>
      ),
      component: (item) => (
        <>
          <div className='Option-wraper'>
            <ButtonBase onClick={actionsPopoverClickedHandler} className='dots-vertical'>
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
        isResizable
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
ShiftEmployeeDayleAttendanceTabel.propTypes = {
  data: PropTypes.shape({ result: PropTypes.instanceOf(Array), totalCount: PropTypes.number }),
  filter: PropTypes.instanceOf(Object).isRequired,
  onSelectedRowsCountChanged: PropTypes.func,
  translationPath: PropTypes.string.isRequired,
  parentTranslationPath: PropTypes.string.isRequired,
  translationPathForData: PropTypes.string,
};
ShiftEmployeeDayleAttendanceTabel.defaultProps = {
  data: {
    result: [],
    totalCount: 0,
  },
  onSelectedRowsCountChanged: undefined,
  translationPathForData: undefined,
};
