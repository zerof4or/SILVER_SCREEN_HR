import loadable from '@loadable/component';
const LoginView = loadable(() => import('../../../Views/Accounts/Login/Login.View'));
export const AccountsRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    layout: '/accounts',
    default: true,
    authorize: false,
    isRoute: true,
  },
  {
    path: '/IdentityVerificationView',
    name: 'IdentityVerification',
    // component: IdentityVerificationView,
    layout: '/accounts',
    default: true,
    authorize: false,
    isRoute: true,
  },
  {
    path: '/ResetPasswordOptionsView',
    name: 'ResetPasswordOptions',
    // component: ResetPasswordOptionsView,
    layout: '/accounts',
    default: true,
    authorize: false,
    isRoute: true,
  },
  {
    path: '/VerificationCodeView',
    name: 'VerificationCode',
    // component: VerificationCodeView,
    layout: '/accounts',
    default: true,
    authorize: false,
    isRoute: true,
  },
  {
    path: '/NewPasswordView',
    name: 'NewPassword',
    // component: NewPasswordView,
    layout: '/accounts',
    default: true,
    authorize: false,
    isRoute: true,
  },
];
