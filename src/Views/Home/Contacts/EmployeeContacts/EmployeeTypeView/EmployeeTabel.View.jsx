/* eslint-disable react/display-name */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonBase } from '@material-ui/core';
import { CheckboxesComponent, Inputs, Tables } from '../../../../../Components';
import PropTypes from 'prop-types';
import PopoverComponent from '../../../../../Components/Popover/Popover.Component';
import { ContactTypeEnum, TableListOpationActions } from '../../../../../Enums';
export const EmployeeTabelView = ({
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
  const [checkedColumnsIds, setCheckedColumnsIds] = useState([1, 2, 3, 4, 5]);
  const [beforeSaveCheckedColumnIds, setBeforeSaveCheckedColumnIds] = useState([1, 2, 3, 4, 5]);
  const pickRandom = (array) => {
    if (!Array.isArray(array)) return undefined;
    return array[Math.floor(Math.random() * array.length)];
  };
  const [tableHeaderData] = useState(() => [
    {
      id: 1,
      isSortable: true,
      label: t(`${translationPath}Name`),
      component: (item) => (
        <div className="contact-img-with-text-wraper">
          <img src={pickRandom(AVATARS)} className="img-contact-tabel" alt={'d'} />
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
      component: (item) => (
        <span>
          {(item && item.designation) || 'N/A'}
          <ButtonBase
            size="small"
            aria-label="Edit"
            className=""
            onClick={EditPopoverClickedHandler}
          >
            <span className="mdi mdi-pencil-outline Edit" title={t('Edit')} />
          </ButtonBase>
        </span>
      ),
      isDraggable: true,
    },
    {
      id: 3,
      isSortable: true,
      label: t(`${translationPath}Email`),
      component: (item) => (
        <span>
          {(item &&
            item.email &&
            item.email.map((item, index) => (
              <span key={`TableColumnEmailKey${index + 1}`}>
                <div>{item.emailaddress1}</div> <div>{(item && item.emailaddress2) || ''}</div>
              </span>
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
      component: (item) => (
        <span>
          {(item &&
            item.Phone &&
            item.Phone.map((item, index) => (
              <span key={`TableColumnPhoneKey${index}`}>
                <div>{item.Phoneno}</div> <div>{(item && item.Phoneno2) || ''}</div>
              </span>
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
      id: 6,
      isSticky: true,
      right: 0,
      cellClasses: 'table-cellOpation is-with-line',
      isNotHidable: true,
      headerComponent: (item) => (
        <>
          <div>
            <ButtonBase onClick={viewColumnsPopoverClickedHandler}>
              <span className="mdi mdi-cog  cog-icon" />,
            </ButtonBase>
          </div>
        </>
      ),
      component: (item) => (
        <>
          <div className="Option-wraper">
            <ButtonBase onClick={actionsPopoverClickedHandler} className="dots-vertical">
              <span className="mdi mdi-dots-vertical" />
            </ButtonBase>
          </div>
        </>
      ),
    },
  ]);
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
    setCheckedColumnsIds((items) => {
      items = [...beforeSaveCheckedColumnIds];
      return [...items];
    });
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

  return (
    <div className="EmployeeTabelView w-100">
      <Tables
        data={(data && data.result) || []}
        headerData={(tableHeaderData || []).filter(
          (item) => checkedColumnsIds.indexOf(item.id) !== -1 || item.isNotHidable
        )}
        defaultActions={[]}
        actionsOptions={{
          onActionClicked: tableActionClicked,
        }}
        parentTranslationPath={parentTranslationPath}
        translationPath={translationPath}
        totalItems={(data && data.totalCount) || 0}
        itemsPerPage={filter.pageSize}
        activePage={filter.pageIndex}
        isWithCheckAll
        isWithCheck
        uniqueKeyInput="id"
        isResizable
        onSelectedRowsCountChanged={onSelectedRowsCountChanged}
      />
      <PopoverComponent
        idRef="headerActionsPopovercogRef"
        attachedWith={ActionsPopover}
        popoverClasses=""
        header-actions-popover-wrapper
        handleClose={actionsPopoverCloseHandler}
        component={
          <div className="Popap-Option">
            {TableListOpationActions.map((item, index) => (
              <ButtonBase
                className="Option"
                key={`OptionKey${index + 1}`}
                onClick={() => ClickButtonListOpation(item.key)}
              >
                <div className={item.icon} />
                <div>{item.value}</div>
              </ButtonBase>
            ))}
          </div>
        }
      />
      <PopoverComponent
        idRef="ColumnPopoverRef"
        attachedWith={ColumnsPopover}
        popoverClasses=""
        header-actions-popover-wrapper
        handleClose={viewColumnsPopoverCloseHandler}
        component={
          <div className="popover-columns-filter-wrapper">
            <div className="p-2"> Choose columns </div>
            <div className="fiter-title">Visible columns </div>
            <div className="visible-columns-wrapper">
              {(tableHeaderData || [])
                .filter(
                  (item) => beforeSaveCheckedColumnIds.indexOf(item.id) !== -1 && !item.isNotHidable
                )
                .map((item, index) => (
                  <CheckboxesComponent
                    idRef={`ColumnRef${index + 1}`}
                    key={`ColumnKey${index + 1}`}
                    label={item.label}
                    singleChecked
                    onSelectedCheckboxChanged={() =>
                      setBeforeSaveCheckedColumnIds((items) => {
                        const itemIndex = items.indexOf(item.id);
                        if (itemIndex !== -1) items.splice(itemIndex, 1);
                        return [...items];
                      })
                    }
                  />
                ))}
            </div>
            <div className="fiter-title">Hidden columns</div>
            <div className="hidden-columns-wrapper">
              {(tableHeaderData || [])
                .filter(
                  (item) => beforeSaveCheckedColumnIds.indexOf(item.id) === -1 && !item.isNotHidable
                )
                .map((item, index) => (
                  <CheckboxesComponent
                    idRef={`ColumnRef${index + 1}`}
                    key={`ColumnKey${index + 1}`}
                    label={item.label}
                    singleChecked={false}
                    onSelectedCheckboxChanged={() =>
                      setBeforeSaveCheckedColumnIds((items) => {
                        items.push(item.id);
                        return [...items];
                      })
                    }
                  />
                ))}
            </div>
            <div className="d-flex-center w-100">
              <ButtonBase
                className="btns theme-solid mb-2 mx-0 bg-blue-light"
                onClick={viewColumnsPopoverCloseHandler}
              >
                Save
              </ButtonBase>
            </div>
          </div>
        }
      />
      <PopoverComponent
        idRef="EditPopoverRef"
        attachedWith={EditPopover}
        popoverClasses="Edit-actions-popover-wrapper"
        handleClose={EditPopoverCloseHandler}
        component={
          <div>
            <Inputs
              idRef="EditInputsRef"
              wrapperClasses="theme-underline"
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
  data: PropTypes.shape({ result: PropTypes.instanceOf(Array), totalCount: PropTypes.number }),
  filter: PropTypes.instanceOf(Object).isRequired,
  onSelectedRowsCountChanged: PropTypes.func,
  translationPath: PropTypes.string.isRequired,
  parentTranslationPath: PropTypes.string.isRequired,
  translationPathForData: PropTypes.string,
};
EmployeeTabelView.defaultProps = {
  data: {
    result: [],
    totalCount: 0,
  },
  onSelectedRowsCountChanged: undefined,
  translationPathForData: undefined,
};
