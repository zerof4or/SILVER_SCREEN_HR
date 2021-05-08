import { LoginStates } from '../../States';

function login(payload) {
  return { type: LoginStates.LOGIN, payload };
}

function reset(payload) {
  return { type: LoginStates.RESET, payload };
}

function update(payload) {
  return { type: LoginStates.UPDATE, payload };
}

function getLoginSuccess(payload) {
  return { type: LoginStates.LOGIN_SUCCESS, payload };
}

function getLoginError(payload) {
  return { type: LoginStates.LOGIN_FAIL, payload };
}
function getLogoutSuccess(payload) {
  return { type: LoginStates.LOGOUT_SUCCESS, payload };
}

function getLogoutError(payload) {
  return { type: LoginStates.LOGOUT_FAIL, payload };
}

function logout() {
  return { type: LoginStates.LOGOUT };
}
export const LoginActions = {
  login,
  getLoginSuccess,
  getLoginError,
  getLogoutSuccess,
  getLogoutError,
  logout,
  update,
  reset,
};
