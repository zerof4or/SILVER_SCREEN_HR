// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import './SorterLettersButtonComponent.Style.scss';
import PopoverComponent from './../../Popover/Popover.Component';
import { ButtonBase } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { letters } from '../../../Enums/letters.Enum';
export const SorterLettersButtonComponent = ({
  MainTitle,
  translationPath,
  parentTranslationPath,
  onViewChanged,
}) => {
  const { t } = useTranslation(parentTranslationPath);
  const [ActiveButton, setActiveButton] = useState(1);
  const [ActionsPopover, setActionsPopover] = useState(null);
  const [Letters, setLetters] = useState(null);
  useEffect(() => {
    onViewChanged(ActiveButton);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ActiveButton]);

  const actionsPopoverCloseHandler = () => {
    setActionsPopover(null);
    if (Letters === null) {
      setActiveButton(1);
    }
  };

  const actionsPopoverClickedHandler = (event) => {
    setActionsPopover(event.currentTarget);
  };
  const ClickButtonListOpation = useCallback((value) => {
    setLetters(value);
  }, []);
  return (
    <div className='SorterLettersButtonComponent-wrapper'>
      <>
        <div className='Button-root-1'>
          <ButtonBase
            className={`header-side-menu-button ${ActiveButton === 1 ? 'is-active' : ''}`}
            onClick={() => {
              setLetters(null);
              setActiveButton(1);
            }}>
            {t(`${translationPath}${MainTitle}`)}
          </ButtonBase>
        </div>
        <div className='Button-root-2'>
          <ButtonBase
            className={`header-side-menu-button ${ActiveButton === 2 ? 'is-active' : ''}`}
            onClick={(event) => {
              actionsPopoverClickedHandler(event);
              setActiveButton(2);
            }}>
            {(Letters !== null && Letters) || (
              <span className='mdi mdi-sort-alphabetical-variant' />
            )}
          </ButtonBase>
        </div>
        <PopoverComponent
          idRef='headerSorterLettersRef'
          attachedWith={ActionsPopover}
          popoverClasses=''
          header-actions-popover-wrapper
          handleClose={actionsPopoverCloseHandler}
          component={
            <div className='SorterLetter-Popap-Option'>
              {letters.map((item, index) => (
                <ButtonBase
                  className='Option-Letter'
                  key={`OptionKey${index + 1}`}
                  onClick={() => ClickButtonListOpation(item)}>
                  <div className='text-item'>{item}</div>
                </ButtonBase>
              ))}
            </div>
          }
        />
      </>
    </div>
  );
};
export default SorterLettersButtonComponent;
SorterLettersButtonComponent.propTypes = {
  onViewChanged: PropTypes.func,
  translationPath: PropTypes.string,
  parentTranslationPath: PropTypes.string,
  translationPathForData: PropTypes.string,
  MainTitle: PropTypes.string,
  Titletriple: PropTypes.string,
  Titleone: PropTypes.string,
  triple: PropTypes.bool,
};
SorterLettersButtonComponent.defaultProps = {
  translationPath: '',
  parentTranslationPath: '',
  translationPathForData: undefined,
  onViewChanged: null,
  MainTitle: 'All',
  Titleone: 'Tow',
  Titletriple: 'triple',
  triple: false,
};
//  {t(`${translationPath}${"Titletow"}`)}
