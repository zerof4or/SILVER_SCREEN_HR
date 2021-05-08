import React from 'react';
// import { SwitchRouteComponent } from '../../Components';
// import { HomeRoutes } from '../../Routes';
import { HeaderComponent } from './Sections';

const HomeLayout = () => {
  // const [isHover, setIsHover] = useState(true);
  // const [headerHeight, setHeaderHeight] = useState(70);

  return (
    <>
      <HeaderComponent />
      <div className="container" style={{ minHeight: `calc(100vh - ${60}px)` }}>
        {/* <MainMenuComponent isHover={isHover} setIsHover={setIsHover} />
        <div className={`content-wrapper${isHover ? ' is-open' : ''}`}>
          <div className="open-close-main-layout">
            <SwitchRouteComponent routes={HomeRoutes} />
          </div>
        </div> */}
      </div>
    </>
  );
};

// HomeLayout.propTypes = {

// }

export default HomeLayout;
