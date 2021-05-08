import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { config } from '../Configs';

export let GlobalTranslate = null;
export let GlobalHistory = null;
export const ResetActiveItem = null;
let logoutAction = null;
let setRerender = null;
let renderVar = false;
let setRenderVar = null;

export const SetGlobalRerender = (setRender, render) => {
  renderVar = render;
  setRenderVar = setRender;
};
export const GlobalRerender = () => {
  setRenderVar(!renderVar);
};
export const MiddlewareHelper = () => {
  GlobalTranslate = useTranslation();
  GlobalHistory = useHistory();
  return null;
};

export const rerenderCallback = (callback) => {
  setRerender = callback;
};

export const rerenderUpdate = (component) => {
  if (setRerender) setRerender(component);
};
export function setLogoutAction(callback) {
  logoutAction = callback;
}

export function LogoutAction() {
  return logoutAction;
}

export function getDownloadableLink(fileId) {
  const session = JSON.parse(localStorage.getItem('session'));
  const userId = session ? session.userId : '';
  const fileToken = session ? session.fileToken : '';
  return `${config.server_address}/FileManager/File/DownloadFile/${userId}/${config.applicationId}/${fileToken}/${fileId}`;
}

export const floatHandler = (value, maxFloatNumbers) => {
  const valueAfterSplit = value.toString().split('.');
  if (valueAfterSplit.length === 2 && valueAfterSplit[1].length > maxFloatNumbers)
    return Number(value).toFixed(maxFloatNumbers);
  return Number(value).toFixed(0);
};
export const getErrorByName = (schemaObject, fieldName, type) => {
  if (!schemaObject.error || !schemaObject.error.details) {
    return {
      message: undefined,
      error: undefined,
      type: undefined,
    };
  }
  const item = schemaObject.error.details.find(
    (element) =>
      (!Number.isNaN(fieldName) && element.path.includes(fieldName)) ||
      (Number.isNaN(fieldName) && !fieldName.includes('.') && element.path.includes(fieldName)) ||
      (Number.isNaN(fieldName) &&
        fieldName.includes('.') &&
        element.path.length >= fieldName.split('.').length &&
        element.path.slice(0, fieldName.split('.').length).join('.') === fieldName)
  );
  if (!item || (type && item.type !== type)) {
    return {
      message: undefined,
      error: undefined,
      type: undefined,
    };
  }
  return {
    message: item.message,
    error: true,
  };
};
