import extend from 'extend';
import commonConfig from './common.config';

// пытаемся загрузить локальный конфиг, его может не быть, например на CI
let localConfig = {};
try {
    localConfig = require('./local.config');
} catch (e) {
    console.log(`local config doesn't exist`);
}

export default extend(true, commonConfig, localConfig);