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
  const tableActionClicked = useCallback((actionEnum, item) => {
    // if (actionEnum === TableActions.delete.key) setActiveItem(item);         setFilter
    // else if (actionEnum === TableActions.edit.key) setActiveItem(item);
  }, []);
  const actionsPopoverClickedHandler = (event) => {
    setActionsPopover(event.currentTarget);
  };
  const actionsPopoverCloseHandler = () => {
    setActionsPopover(null);
  };

  const ClickButtonListOpation = useCallback((value) => {
    console.log('value: ', value);
  }, []);
  return (
    <div className="EmployeeTabelView w-100">
      <Tables
        data={Data.result}
        selectAllOptions={{
          // getIsSelected,
          // onSelectClicked,
          // onSelectAllClicked,
          // getIsDisabled,
          disabledRows: [],
          withCheckAll: true,
        }}
        headerData={[
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
          { id: 3, isSortable: true, label: t(`${translationPath}Email`), input: 'propertyName' },
          { id: 4, isSortable: true, label: t(`${translationPath}Phone`), input: 'portfolioName' },
          {
            id: 5,
            isSortable: true,
            label: t(`${translationPath}Group`),
            input: 'amount',
          },
          {
            id: 7,
            isDate: true,
            label: t(`${translationPath}StartDate`),
            input: 'startDate',
          },
          {
            id: 8,
            isDate: true,
            label: t(`${translationPath}EndDate`),
            input: 'endDate',
          },
          {
            id: 9,
            label: t(`${translationPath}Address`),
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
            label: t(`${translationPath}Settings`),
            isSticky: true,
            right: 0,
            // eslint-disable-next-line react/display-name
            component: (item) => (
              <>
                <div className="Option-wraper">
                  <ButtonBase onClick={actionsPopoverClickedHandler} classNam="dots-vertical">
                    <span className="mdi mdi-dots-vertical" />
                  </ButtonBase>
                </div>
              </>
            ),
          },
        ]}
        defaultActions={[]}
        actionsOptions={{
          onActionClicked: tableActionClicked,
        }}
        parentTranslationPath={parentTranslationPath}
        translationPath={translationPath}
        totalItems={Data.totalCount}
        itemsPerPage={filter.pageSize}
        activePage={filter.pageIndex}
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
