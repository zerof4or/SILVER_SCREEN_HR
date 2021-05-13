import React, { useState } from 'react';
import { SwitchRouteComponent } from '../../Components';
import { HomeRoutes } from '../../Routes';
import { HeaderComponent, SideMenuComponent, SideExtendedComponent } from './Sections';
import './Home.Style.scss';
const HomeLayout = () => {
  const [isOpenSideExtended, setIsOpenSideExtended] = useState(false);
  const onChangeSideExtended = () => {
    setIsOpenSideExtended((item) => !item);
  };
  return (
    <>
      <HeaderComponent />
      <div className="container-wrapper" style={{ minHeight: `calc(100vh - ${52.8}px)` }}>
        <SideMenuComponent isOpenSideExtended={isOpenSideExtended} onChangeSideExtended={onChangeSideExtended} />
        <SideExtendedComponent
          isOpenSideExtended={isOpenSideExtended}
          onChangeSideExtended={onChangeSideExtended}
        />
        <div className="Syatem-views-wrapper">
          <SwitchRouteComponent routes={HomeRoutes} />
        </div>
      </div>
    </>
  );
};

// HomeLayout.propTypes = {

// }

export default HomeLayout;
