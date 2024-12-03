import { addTranslations } from 'govhk-form-core';
import en from './translation.en.json';
import zhHK from './translation.zh-HK.json';
import zhCN from './translation.zh-CN.json';

const translations = {
  en,
  'zh-HK': zhHK,
  'zh-CN': zhCN,
};

addTranslations(translations);

export default translations;
