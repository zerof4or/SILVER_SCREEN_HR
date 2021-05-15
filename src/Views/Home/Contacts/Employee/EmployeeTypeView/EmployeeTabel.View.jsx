import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonBase } from '@material-ui/core';
import { Tables } from '../../../../../Components';
import PropTypes from 'prop-types';
import PopoverComponent from '../../../../../Components/Popover/Popover.Component';
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
  return (
    <div className='EmployeeTabelView w-100'>
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
            label: t(`${translationPath}Name`),
            input: 'maintenanceContractId',
          },
          {
            id: 2,
            label: t(`${translationPath}Designation`),
            // eslint-disable-next-line react/display-name
            component: (item) => <span>{(item && item.contactName) || 'N/A'}</span>,
          },
          { id: 3, label: t(`${translationPath}Email`), input: 'propertyName' },
          { id: 4, label: t(`${translationPath}Phone`), input: 'portfolioName' },
          {
            id: 5,
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
        idRef='headerActionsPopovercogRef'
        attachedWith={ActionsPopover}
        popoverClasses=''
        header-actions-popover-wrapper
        handleClose={actionsPopoverCloseHandler}
        component={
          <div className='Popap-Option'>
            <ButtonBase className='Option'>
              <div className='mdi mdi-pencil' />
              <div>Edit</div>
            </ButtonBase>
            <ButtonBase className='Option'>
              <div className='mdi mdi-delete-empty' />
              <div>Delete</div>
            </ButtonBase>
            <ButtonBase className='Option'>
              <div className='mdi mdi-briefcase-plus' />
              <div>Assign to Project</div>
            </ButtonBase>
            <ButtonBase className='Option'>
              <div className='mdi mdi-clipboard-list-outline' />
              <div>Add to List</div>
            </ButtonBase>
            <ButtonBase className='Option'>
              <div className='mdi mdi-email-send' />
              <div>Send Email</div>
            </ButtonBase>
            <ButtonBase className='Option'>
              <div className='mdi mdi-archive' />
              <div>Archive</div>
            </ButtonBase>
            <ButtonBase className='Option'>
              <div className='mdi mdi-video-plus' />
              <div>Video Call</div>
            </ButtonBase>
            <ButtonBase className='Option'>
              <div className='mdi mdi-chat-processing-outline' />
              <div>Chat</div>
            </ButtonBase>
            <ButtonBase className='Option'>
              <div className='mdi mdi-account-details' />
              <div>View Details</div>
            </ButtonBase>
            <ButtonBase className='Option'>
              <div className='mdi mdi-printer-settings' />
              <div>Printer Details</div>
            </ButtonBase>
            <ButtonBase className='Option'>
              <div className='mdi mdi-star-plus-outline' />
              <div>Add To Favorite</div>
            </ButtonBase>
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
