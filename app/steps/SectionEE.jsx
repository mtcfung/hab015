import React from 'react';
import { Section,CustomTotalPrice,Field } from 'govhk-form-core';


export default {
  title: ({ i }) => i`step.SectionEE.title`,
  
  
  content: ({ i }) => (
    <div>
        <Section
    title={i`component.SectionE.title`}
    >
          {i`field.label.partE.declare`}<br/><br/>
      <Field.Checkbox name="partE_Cb1" label={i`field.label.partE.Cb1`} required />
      <Field.Checkbox name="partE_Cb2" label={i`field.label.partE.Cb2`} required />
      <Field.Checkbox name="partE_Cb3" label={i`field.label.partE.Cb3`} required />
      <Field.Checkbox name="partE_Cb4" label={i`field.label.partE.Cb4`} required />
      <Field.Checkbox name="partE_Cb5" label={i`field.label.partE.Cb5`} required />
      <Field.Checkbox name="partE_Cb6" label={i`field.label.partE.Cb6`} required />
      <Field.Checkbox name="partE_Cb7" label={i`field.label.partE.Cb7`} required />
</Section>

    </div>
  ),
};
