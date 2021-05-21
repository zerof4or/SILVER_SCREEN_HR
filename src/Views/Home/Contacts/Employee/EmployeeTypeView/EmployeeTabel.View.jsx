import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonBase, Checkbox } from '@material-ui/core';
import { Inputs, Tables } from '../../../../../Components';
import PropTypes from 'prop-types';
import PopoverComponent from '../../../../../Components/Popover/Popover.Component';
import { ContactTypeEnum, TableListOpationActions } from '../../../../../Enums';
export const EmployeeTabelView = ({ Data, parentTranslationPath, translationPath, filter }) => {
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
  const EditPopoverClickedHandler = (event) => {
    setEditPopover(event.currentTarget);
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
      id: 1,
      isSortable: true,
      label: t(`${translationPath}Name`),
      // eslint-disable-next-line react/display-name
      component: (item) => (
        <div className='contact-img-with-text-wraper'>
          <img src={pickRandom(AVATARS)} className='img-contact-tabel' alt={'d'} />
          <div>{(item && item.name) || 'N/A'}</div>
        </div>
      ),
      isSticky: true,
      left: 0,
    },
    {
      id: 2,
      isSortable: true,
      label: t(`${translationPath}Designation`),
      // eslint-disable-next-line react/display-name
      component: (item) => (
        <span>
          {(item && item.designation) || 'N/A'}
          <ButtonBase
            size='small'
            aria-label='Edit'
            className=''
            onClick={EditPopoverClickedHandler}>
            <span className='mdi mdi-pencil-outline Edit' title={t('Edit')} />
          </ButtonBase>
        </span>
      ),
      isDraggable: true,
    },
    {
      id: 3,
      isSortable: true,
      label: t(`${translationPath}Email`),
      // eslint-disable-next-line react/display-name
      component: (item) => (
        <span>
          {(item &&
            item.email.map((item, index) => (
              <>
                {' '}
                <div>{item.emailaddress1}</div> <div>{(item && item.emailaddress2) || ''}</div>{' '}
              </>
            ))) ||
            'N/A'}
        </span>
      ),
      isDraggable: true,
    },
    {
      id: 4,
      isSortable: true,
      label: t(`${translationPath}Phone`),
      isDraggable: true,
      // eslint-disable-next-line react/display-name
      component: (item) => (
        <span>
          {(item &&
            item.Phone.map((item, index) => (
              <>
                {' '}
                <div>{item.Phoneno}</div> <div>{(item && item.Phoneno2) || ''}</div>{' '}
              </>
            ))) ||
            'N/A'}
        </span>
      ),
    },
    {
      id: 5,
      isSortable: true,
      label: t(`${translationPath}Group`),
      input: 'Group',
      isDraggable: true,
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
              {' '}
              <Checkbox color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
              Jop
            </div>
            <div className='Column-Checkbox'>
              {' '}
              <Checkbox color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} />
              Organization
            </div>
            <div className='Column-Checkbox'>
              {' '}
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
EmployeeTabelView.propTypes = {
  Data: PropTypes.instanceOf(Array),
  filter: PropTypes.string.isRequired,
  translationPath: PropTypes.string,
  parentTranslationPath: PropTypes.string,
  translationPathForData: PropTypes.string,
};
// onClick={() => ClickButtonListOpation(item.key)}
