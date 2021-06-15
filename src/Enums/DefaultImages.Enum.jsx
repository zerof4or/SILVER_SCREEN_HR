import WomanImg from '../Assets/Images/Defaults/woman.svg';
import ManImg from '../Assets/Images/Defaults/man.svg';
import CorporateImg from '../Assets/Images/Defaults/corporate.svg';
import UploadImg from '../Assets/Images/icons/upload.svg';
import Uploadmark from '../Assets/Images/icons/upload-icon-mark.png';

export const DefaultImagesEnum = {
  woman: {
    key: 'woman',
    alt: 'shared.defaultImages.female',
    defaultImg: WomanImg,
  },
  man: {
    key: 'man',
    alt: 'shared.defaultImages.male',
    defaultImg: ManImg,
  },
  corporate: {
    key: 'corporate',
    alt: 'shared.defaultImages.corporate',
    defaultImg: CorporateImg,
  },
  individual: {
    key: 'individual',
    alt: 'shared.defaultImages.individual',
    defaultImg: ManImg,
  },
  buildings: {
    key: 'buildings',
    alt: 'shared.defaultImages.building',
    defaultImg: ManImg,
  },
  upload: {
    key: 'upload',
    alt: 'shared.defaultImages.upload',
    defaultImg: UploadImg,
  },
  Uploadmark: {
    key: 'Uploadmark',
    alt: 'shared.defaultImages.upload',
    defaultImg: Uploadmark,
  },
};
