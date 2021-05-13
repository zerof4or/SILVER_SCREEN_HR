//, useDispatch , useEffect, useCallback // import { useSelector } from 'react-redux';  InnerHeaderComponent,
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Inputs } from '../../../../Components';
import { ButtonBase } from '@material-ui/core';
import maintenanceContract from '../../../../StaticJOSN/maintenanceContract.json';
import './Employee.Style.scss';
import { EmployeeTabelView } from './EmployeeTypeView/EmployeeTabel.View';

const parentTranslationPath = 'EmployeeView';
const translationPath = '';
export const EmployeeView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);
  // const [activeSideButton, setActiveSideButton] = useState(1);
  // const [activeItem, setActiveItem] = useState(null);
  // const loginResponse = useSelector((state) => state.login.loginResponse);

  const [filter] = useState({
    pageIndex: 0,
    pageSize: 25,
  });

  return (
    <div className='EmployeeView w-100'>
      <div className='Sub-InnerHeader'>
        <div className='attendance-check-filter'>
          <div className='dots-vertical'>
            <ButtonBase>
              <span className='mdi mdi-dots-vertical' />
            </ButtonBase>
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
          <EmployeeTabelView
            Data={maintenanceContract}
            parentTranslationPath={parentTranslationPath}
            translationPath={translationPath}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
};
