import { ButtonBase } from '@material-ui/core';
import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ContactTypeEnum } from '../../../../Enums';
import { InnerHeaderComponent } from '../../../../Components';
import './LeavePolicy.Style.scss';

const parentTranslationPath = 'LeavePolicyView';
// const translationPath = '';
export const LeavePolicyView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);
  const [activeSideButton, setActiveSideButton] = useState(1);
  const AVATARS = [
    ContactTypeEnum.employee.defaultImg,
    ContactTypeEnum.employee2.defaultImg,
    ContactTypeEnum.employee3.defaultImg,
    ContactTypeEnum.employee4.defaultImg,
    ContactTypeEnum.employee5.defaultImg,
    ContactTypeEnum.employee6.defaultImg,
    ContactTypeEnum.employee7.defaultImg,
  ];

  const [sideList] = useState([
    {
      key: 1,
      value: 'Employees Shift',
    },
    {
      key: 2,
      value: t('My Shift'),
    },
    {
      key: 3,
      value: 'Shift Settings',
    },
  ]);
  const activeSideButtonChange = useCallback((value) => {
    setActiveSideButton(value);
    // if (value === 2) GlobalHistory.push('');
  }, []);

  function createData(img, name, calories, fat, carbs, protein) {
    return {
      img,
      name,
      calories,
      fat,
      carbs,
      protein,
    };
  }

  const rows = [
    createData(AVATARS, 'Frozen yoghurt', 'Monthly', 'Jaime', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Ice cream sandwich', 'Monthly', 'Snow', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Eclair', 'Monthly', 'Melisandre', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Frozen yoghurt', 'Monthly', 'Jaime', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Ice cream sandwich', 'Monthly', 'Snow', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Eclair', 'Monthly', 'Melisandre', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Cupcake', 'Monthly', 'Daenerys', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Gingerbread', 'Monthly', 'Daenerys', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Frozen yoghurt', 'Monthly', 'Jaime', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Ice cream sandwich', 'Monthly', 'Snow', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Eclair', 'Monthly', 'Melisandre', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Cupcake', 'Monthly', 'Daenerys', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Gingerbread', 'Monthly', 'Daenerys', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Cupcake', 'Monthly', 'Daenerys', '60 Days', 'November 15, 2020'),
    createData(AVATARS, 'Gingerbread', 'Monthly', 'Daenerys', '60 Days', 'November 15, 2020'),
  ];

  return (
    <div className="view-wrapper">
      <InnerHeaderComponent
        component={
          <>
            {sideList.map((item, index) => (
              <ButtonBase
                className={`header-side-menu-button ${
                  item.key === activeSideButton ? 'is-active' : ''
                }`}
                onClick={() => activeSideButtonChange(item.key)}
                key={`headerSideMenuBtnKey${index + 1}`}
              >
                {item.value}
              </ButtonBase>
            ))}
          </>
        }
      />
      <div className="attendance-check-header">
        <div className="attendance-check-filter">
          <div className="dots-vertical">
            <ButtonBase>
              <span className="mdi mdi-dots-vertical" />
            </ButtonBase>
          </div>
          <div className="filter-button">
            <ButtonBase>
              <span className="mdi mdi-filter" />
              Filter
            </ButtonBase>
          </div>
          <div className="location-button">
            <ButtonBase>Location</ButtonBase>
          </div>
        </div>
      </div>
      <div className="LeavePolicy-View-wraperr">
        <TableContainer component={Paper}>
          <Table size="small" className="Table-style" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Leave Policy Name</TableCell>
                <TableCell align="left">Yearly Balance</TableCell>
                <TableCell align="left">Maximum Carryover</TableCell>
                <TableCell align="left">Actual Type</TableCell>
                <TableCell align="left">Accurate Start Date</TableCell>
                <TableCell align="center">
                  <span className="mdi mdi-cog" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="left">
                    <div>{row.fat}</div>
                  </TableCell>
                  <TableCell align="left">
                    <div>{row.carbs}</div>
                  </TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.protein}</TableCell>

                  <TableCell align="center">
                    <div className="Action-TableCell">
                      <div className="Deleted-vertical">
                        <ButtonBase>
                          <span className="mdi mdi-delete  " />
                        </ButtonBase>
                      </div>
                      <div className="dots-vertical">
                        <ButtonBase>
                          <span className="mdi mdi-dots-vertical" />
                        </ButtonBase>
                      </div>{' '}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
