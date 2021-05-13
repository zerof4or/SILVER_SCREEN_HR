//, useDispatch , useEffect
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
import { InnerHeaderComponent, Inputs, Tables } from '../../../../Components';
// import { TableActions } from '../../../../Enums/TableActions.Enum';
import { ButtonBase } from '@material-ui/core';
import maintenanceContract from '../../../../StaticJOSN/maintenanceContract.json';

const parentTranslationPath = 'EmployeeView';
const translationPath = '';
export const EmployeeView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);
  // const [activeSideButton, setActiveSideButton] = useState(1);
  // const [activeItem, setActiveItem] = useState(null);
  // const loginResponse = useSelector((state) => state.login.loginResponse);
  const [sideList] = useState([
    {
      key: 1,
      value: 'Employees',
    },
    {
      key: 2,
      value: t('ORG Chart'),
    },
    {
      key: 3,
      value: 'Team',
    },
  ]);
  // const activeSideButtonChange = useCallback((value) => {
  //   setActiveSideButton(value);
  // }, []);

  const [filter] = useState({
    pageIndex: 0,
    pageSize: 25,
  });
  const tableActionClicked = useCallback((actionEnum, item) => {
    // if (actionEnum === TableActions.delete.key) setActiveItem(item);         setFilter
    // else if (actionEnum === TableActions.edit.key) setActiveItem(item);
  }, []);

  return (
    <div className='w-100'>
      <div className='view-wrapper'>
        <InnerHeaderComponent
          component={
            <>
              {sideList.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <ButtonBase
                  className={`header-side-menu-button ${item.key ? 'is-active' : ''}`}
                  // onClick={() => activeSideButtonChange(item.key)}  === activeSideButton
                >
                  {item.value}
                </ButtonBase>
              ))}
            </>
          }
        />
            </div>
        <div className='attendance-check-header'>
          <div className='attendance-check-filter'>
            <div className='dots-vertical'>
              <ButtonBase>
                <span className='mdi mdi-dots-vertical' />
              </ButtonBase>
            </div>
            <div className='filter-button'>
              <ButtonBase>
                <span className='mdi mdi-filter' />
                Filter
              </ButtonBase>
            </div>
            <div className='location-button'>
              <ButtonBase>Location</ButtonBase>
            </div>
          </div>
          <div className='attendance-check-search'>
            <div className='leave-button'>
              <ButtonBase>Add New Leave</ButtonBase>
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
            <div className='w-100'>
              <Tables
                data={maintenanceContract.result}
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
                totalItems={maintenanceContract.totalCount}
                itemsPerPage={filter.pageSize}
                activePage={filter.pageIndex}
              />
            </div>
          </div>
        </div>
      </div>
  );
};
