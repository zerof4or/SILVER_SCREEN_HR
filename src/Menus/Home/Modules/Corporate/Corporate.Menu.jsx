import {
  CompanyMenu,
  SalesMarketingMenu,
  AgencyMenu,
  PhotographyMenu,
  EqupmentRentalMenu,
} from './Modules';

export const CorporateMenu = [
  {
    path: '/home/corporate/company',
    name: 'Shared:company',
    order: 1,
    childrens: CompanyMenu,
  },
  {
    path: '/home/corporate/sales&marketing',
    name: 'Shared:sales&marketing',
    order: 2,
    childrens: SalesMarketingMenu,
  },
  {
    path: '/home/corporate/agency',
    name: 'Shared:agency',
    order: 3,
    childrens: AgencyMenu,
  },
  {
    path: '/home/corporate/production-service',
    name: 'Shared:production-service',
    order: 4,
    childrens: CompanyMenu,
  },
  {
    path: '/home/corporate/photography',
    name: 'Shared:photography',
    order: 5,
    childrens: PhotographyMenu,
  },
  {
    path: '/home/corporate/post-production',
    name: 'Shared:post-production',
    order: 5,
    childrens: CompanyMenu,
  },
  {
    path: '/home/corporate/equpment-rental',
    name: 'Shared:equpment-rental',
    order: 5,
    childrens: EqupmentRentalMenu,
  },
];
