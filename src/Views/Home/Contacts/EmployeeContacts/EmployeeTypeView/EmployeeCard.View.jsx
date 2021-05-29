import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { UnderConstructionandDevelopmentComponent } from '../../../../../Components';

export const EmployeeCard = ({ Data, parentTranslationPath, translationPath, filter }) => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation(parentTranslationPath);

  return (
    <div className='w-100'>
      <UnderConstructionandDevelopmentComponent />
    </div>
  );
};
EmployeeCard.propTypes = {
  Data: PropTypes.instanceOf(Array).isRequired,
  filter: PropTypes.string.isRequired,
  translationPath: PropTypes.string.isRequired,
  parentTranslationPath: PropTypes.string.isRequired,
};
// onClick={() => ClickButtonListOpation(item.key)}
