import React from 'react';
import { SwitchRouteComponent } from '../../Components';
import { AccountsRoutes } from '../../Routes';

const AccountLayout = () => (
  <div className="account-layout-wrapper">
    <SwitchRouteComponent routes={AccountsRoutes} />
  </div>
);
export default AccountLayout;
