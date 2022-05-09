import { config as baseConfig } from '../wdio.conf';

export const config = Object.assign(baseConfig, {
    environment: 'our-cloud-dev-environment',
    url: ''
});