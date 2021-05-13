import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonBase } from '@material-ui/core';
import { Tables } from '../../../../../Components';
import PropTypes from 'prop-types';
export const EmployeeTabelView = ({ Data, parentTranslationPath, translationPath, filter }) => {
  const { t } = useTranslation(parentTranslationPath);

  const tableActionClicked = useCallback((actionEnum, item) => {
    // if (actionEnum === TableActions.delete.key) setActiveItem(item);         setFilter
    // else if (actionEnum === TableActions.edit.key) setActiveItem(item);
  }, []);

  return (
    <div className='w-100'>
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
            label: t(`${translationPath}ref-no`),
            input: 'maintenanceContractId',
          },
          {
            id: 2,
            label: t(`${translationPath}maintenanceCompany`),
            // eslint-disable-next-line react/display-name
            component: (item) => <span>{(item && item.contactName) || 'N/A'}</span>,
          },
          { id: 3, label: t(`${translationPath}propertyname`), input: 'propertyName' },
          { id: 4, label: t(`${translationPath}portfolioname`), input: 'portfolioName' },
          {
            id: 5,
            label: t(`${translationPath}amount`),
            input: 'amount',
          },
          {
            id: 6,
            label: t(`${translationPath}amountType`),
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
            id: 7,
            label: t(`${translationPath}contractDate`),
            isDate: true,
            input: 'contractDate',
          },
          {
            id: 8,
            isDate: true,
            label: t(`${translationPath}StartDate`),
            input: 'startDate',
          },
          {
            id: 9,
            isDate: true,
            label: t(`${translationPath}EndDate`),
            input: 'endDate',
          },
          {
            id: 13,
            label: t(`${translationPath}Settings`),
            // eslint-disable-next-line react/display-name
            component: (item) => (
              <ButtonBase>
                <span className='mdi mdi-cog' />
              </ButtonBase>
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
