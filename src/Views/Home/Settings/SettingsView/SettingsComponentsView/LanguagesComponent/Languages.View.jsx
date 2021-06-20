import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguagesView.Style.scss';
const parentTranslationPath = 'LanguagesView';

export const LanguagesView = () => {
  const { t } = useTranslation(parentTranslationPath);
  console.log(' t: ', t);
  // const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='view-wrapper-LanguagesView w-100'>
      <div className='d-inline-flex-center w-100  mt-5'>
        {' '}
        <span className='main-title'>Available Languages        <span className='mdi mdi-translate' /></span>
      </div>
      <div className='about'>
        <a
          className='bg_links social portfolio'
          href='https://www.rafaelalucas.com'
          target='_blank'
          rel='noreferrer'>
          <span className='icon'></span>
        </a>
        <a
          className='bg_links social dribbble'
          href='https://dribbble.com/rafaelalucas'
          target='_blank'
          rel='noreferrer'>
          <span className='icon'></span>
        </a>
        <a
          className='bg_links social linkedin'
          href='https://www.linkedin.com/in/rafaelalucas/'
          target='_blank'
          rel='noreferrer'>
          <span className='icon'></span>
        </a>
        <span className='bg_links logo'></span>
      </div>

      <div className='content'>
        <div className='card'>
          <div className='icon'>
            <i className='material-icons'>
              <img
                src='https://user-images.githubusercontent.com/18658299/29040017-d3563bb0-7bad-11e7-99e6-7702e6e1e76c.png'
                alt='user-id'
                className='Arabic-logo'
              />
            </i>
          </div>
          <p className='title'>Arabic</p>
          <p className='text'>Click to see or View WebSite in Arabic Language</p>
        </div>

        <div className='card'>
          <div className='icon'>
            <i className='material-icons'>
              {' '}
              <img
                src='https://user-images.githubusercontent.com/18658299/29040017-d3563bb0-7bad-11e7-99e6-7702e6e1e76c.png'
                alt='user-id'
                className='Arabic-logo'
              />
            </i>
          </div>
          <p className='title'>English</p>
          <p className='text'>Click to see or View WebSite in English Language </p>
        </div>
      </div>
    </div>
  );
};
