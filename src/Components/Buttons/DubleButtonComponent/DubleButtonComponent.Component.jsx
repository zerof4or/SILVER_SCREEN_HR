// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import './DubleButtonComponent.Style.scss';
import { ButtonBase } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export const DubleButtonComponentComponent = ({
  Titletow,
  Titleone,
  translationPath,
  parentTranslationPath,
  onViewChanged,
}) => {
  const { t } = useTranslation(parentTranslationPath);
  const [ActiveButton, setActiveButton] = useState(1);
  useEffect(() => {
    onViewChanged(ActiveButton);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ActiveButton]);
  return (
    <div className='DubleButton-wrapper'>
      <div className='Button-root-1'>
        <ButtonBase
          className={`header-side-menu-button ${ActiveButton === 1 ? 'is-active' : ''}`}
          onClick={() => setActiveButton(1)}>
          {t(`${translationPath}${Titleone}`)}
        </ButtonBase>
      </div>
      {}
      <div className='Button-root-2'>
        <ButtonBase
          className={`header-side-menu-button ${ActiveButton === 2 ? 'is-active' : ''}`}
          onClick={() => setActiveButton(2)}>
          {t(`${translationPath}${Titletow}`)}
        </ButtonBase>
      </div>
    </div>
  );
};
export default DubleButtonComponentComponent;
DubleButtonComponentComponent.propTypes = {
  onViewChanged: PropTypes.func,
  translationPath: PropTypes.string,
  parentTranslationPath: PropTypes.string,
  translationPathForData: PropTypes.string,
  Titletow: PropTypes.string,
  Titleone: PropTypes.string,
};
DubleButtonComponentComponent.defaultProps = {
  translationPath: '',
  parentTranslationPath: '',
  translationPathForData: undefined,
  onViewChanged: undefined,
  Titletow: 'One',
  Titleone: 'Tow',
};
