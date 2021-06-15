import React from 'react';
import { useTranslation } from 'react-i18next';
import './BackgroundComponent.Style.scss';
import back from '../../../../../../Assets/Images/Defaults/99-removebg-preview.png';
import bglogin from '../../../../../../Assets/Images/Pages/Login/bg-login.png';
const parentTranslationPath = 'BackgroundComponentView';
export const BackgroundComponentView = () => {
  const { t } = useTranslation(parentTranslationPath);
  console.log(' t: ', t);
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='view-wrapper-Background w-100'>
      <div className='edit-wrpaer'>
      <div className='backgroundImage-edit-wrpaer'
        style={{
          backgroundImage: `url(${bglogin})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}>
        <img src={ back } alt={t(`silver-screen`)} className='img-back' />
      </div>
    </div>
    </div>
  );
};
