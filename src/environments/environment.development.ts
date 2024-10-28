import { commonEnvironment } from './environment.common';

export const environment = {
  production: false,
  ...commonEnvironment,
  DOMAIN: 'http://localhost:4200'
};