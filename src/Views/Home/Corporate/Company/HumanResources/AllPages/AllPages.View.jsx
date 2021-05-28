// eslint-disable-next-line no-unused-vars
import { ButtonBase } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'react';
import { GlobalHistory } from '../../../../../../Helpers';
import './AllPages.Style.scss';
export const AllPagesView = () => {
  // const [selectedEmployeesCount, setSelectedEmployeesCount] = useState(0);
  // const [employees, setEmployees] = useState(MyAttendance);
  // const [open, setopen] = useState(false);
  // const [totalCount, settotalCount] = useState('');
  const [activeSideButton, setActiveSideButton] = useState(1);
  const [sideList] = useState([
    {
      key: 1,
      value: 'Shift View',
      path: '/home/corporate/company/human-resources/ShiftView',
    },
    {
      key: 2,
      value: 'Courses View',
      path: '/home/corporate/company/human-resources/CoursesView',
    },
    {
      key: 3,
      value: 'Refferral View',
      path: '/home/corporate/company/human-resources/RefferralView',
    },
    {
      key: 4,
      value: 'Request View',
      path: '/home/corporate/company/human-resources/RequestView',
    },
    {
      key: 5,
      value: 'Team  View',
      path: '/home/corporate/company/human-resources/TeamView',
    },
    {
      key: 7,
      value: 'Attendance Check In View  ',
      path: '/home/corporate/company/human-resources/AttendanceCheckInView',
    },
  ]);

  const activeSideButtonChange = useCallback((value) => {
    try {
      GlobalHistory.push(value.path);
      // eslint-disable-next-line no-empty
    } catch (error) {}

    setActiveSideButton(value);
  }, []);
  return (
    <div className='AllPagesView w-100'>
      {sideList.map((item, index) => (
        <ButtonBase
          className={`header-side-menu-button ${item.key === activeSideButton ? 'is-active' : ''}`}
          onClick={() => activeSideButtonChange(item)}
          key={`headerSideMenuBtnKey${index + 1}`}>
          {item.value} Page
        </ButtonBase>
      ))}
    </div>
  );
};
