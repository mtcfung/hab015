import { step } from 'govhk-form-core';

export default step.review({
    
    title: ({ i }) => i`step.step_3.title`,
    
    
    options:{"emailRequired": true}
    
});

