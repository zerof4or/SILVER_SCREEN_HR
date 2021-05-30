import { Fab } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import './MyShift.Style.scss';

const parentTranslationPath = 'MyShiftView';
// const translationPath = '';

export const MyShiftView = () => {
  const { t } = useTranslation(parentTranslationPath);
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='view-wrapper'>
      <div className='hedar-options'> </div>
      <div className='Shift-View-wraperr'>
        <div className='hedar-title'>Shift Policess </div>
        <div className='cards-container'>
          {[1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3].map((item, index) => (
            <div className='card-wraper' key={`ShiftCardKey${index + 1}`}>
              <div className='card-container'>
                <div className='card'>
                  <div className='Shift-data'>
                    <div className='Shiftname'> Morning shift </div>
                    <div className='Shifttime'>16:15PM - 05:15AM </div>
                  </div>
                  <div className='Shift-OPTONS'>
                    <span className=''>
                      <Fab size='small' aria-label='Edit' className=''>
                        <span className='mdi mdi-pencil-outline Edit' title={t('Edit')} />
                      </Fab>
                    </span>
                    <span className='OPTONS-conteaner'>
                      <Fab size='small' aria-label='Edit' className=''>
                        <span className='mdi mdi-delete Deleted ' title={t('Edit')} />
                      </Fab>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
