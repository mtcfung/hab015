import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { GeneralFAQs,GovHKFormApp,FormInfoMenu,injectI18n } from 'govhk-form-core';
import steps from './steps';


const pathname = typeof window === 'object' && window.location && window.location.href;
if (pathname) {
    
    if(pathname.match(/\/en\/([^\/]*)$/)){ // /^(http[s]?:\/\/[^\/]+\/)en\/([\s\S]*)$/
        document.location = pathname.replace(/\/en\/([^\/]*)$/, '/tc/$1');
    }
    
    
    
    if(pathname.match(/\/sc\/([^\/]*)$/)){ // /^(http[s]?:\/\/[^\/]+\/)sc\/([\s\S]*)$/
        document.location = pathname.replace(/\/sc\/([^\/]*)$/, '/tc/$1');
    }
    
}


const FormApp = ({ i }) => {
    

  const view = (<GovHKFormApp
    formMasterId={_FORM_MASTER_CODE_}
    formVersion={_FORM_VERSION_}
    title={_FORM_TITLE_[i`reform.locale`]}
    lastUpdate={_LAST_UPDATE_}
    steps={steps}
    totalFileSizeLimit="10 MB"
    features={ {"save": true, "captchaMethod": "MTCAPTCHA", "queueit": false} }
    
  />);

    return view;
};

FormApp.propTypes = {
  i: PropTypes.func,
};

export default injectI18n(FormApp);
