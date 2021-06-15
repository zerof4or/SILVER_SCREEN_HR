import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './BackgroundComponent.Style.scss';
import back from '../../../../../../Assets/Images/Defaults/99-removebg-preview.png';
import bglogin from '../../../../../../Assets/Images/Pages/Login/bg-login.png';
import labtopscrean from '../../../../../../Assets/Images/Defaults/labtopscrean.png';
const parentTranslationPath = 'BackgroundComponentView';
export const BackgroundComponentView = () => {
  const { t } = useTranslation(parentTranslationPath);
  console.log(' t: ', t);
  // const [isLoading, setIsLoading] = useState(false);

  // const [state, setState] = useState({
  //   fileId: null,
  //   importProcceseType: 1,
  // });
  const [picture, setPicture] = useState(bglogin);

  const onChangePicture = (e) => {
    console.log('picture: ', e.target.files[0]);
    setPicture(URL.createObjectURL(e.target.files[0]) );
  };

  return (
    <div className='Background-conteaner w-100'>
      <div className='view-wrapper-Background w-100'>
        <div
          className='backgroundImage-labtop'
          style={{
            backgroundImage: `url(${labtopscrean})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}>
          <div className='edit-wrpaer'>
            {picture && picture&& (
              <div
                className='backgroundImage-edit-wrpaer'
                style={{
                  backgroundImage: `url(${picture && picture})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                }}>
                <img src={back} alt={t(`silver-screen`)} className='img-back' />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='register_profile_image'>
        <input id='profilePic' type='file' onChange={onChangePicture} />
      </div>
    </div>
  );
};
