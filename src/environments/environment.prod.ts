import { commonEnvironment } from './environment.common';

export const environment = {
  production: true,
  ...commonEnvironment,
  DOMAIN: 'https://j-portfolio.koyeb.app',
};
