import React from 'react';
import { SwitchRouteComponent } from '../../Components';
import { HomeRoutes } from '../../Routes';
import { HeaderComponent } from './Sections';

const HomeLayout = () => {
  return (
    <>
      <HeaderComponent />
      <div className="container" style={{ minHeight: `calc(100vh - ${52.8}px)` }}>
        <SwitchRouteComponent routes={HomeRoutes} />
      </div>
    </>
  );
};

// HomeLayout.propTypes = {

// }

export default HomeLayout;
