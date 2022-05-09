import { config as baseConfig } from '../wdio.conf';

export const config = Object.assign(baseConfig, {
    environment: 'local-environment',
    url: ''
});