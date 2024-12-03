/* eslint react/prop-types: 0 */
import React from 'react';
import { step, Section, ExternalLink, Field } from 'govhk-form-core';
import logo from './logo.jpg';
const style = `
#govhkForm #govhkBody:lang(zh-CN) .wantTo .wantToText, #govhkForm #govhkBody:lang(zh-HK) .wantTo .wantToText {
  width: 13% !important;
}
`;

export default step.introduction({
  departmentName: ({ i }) => i`HAB`,
  title: ({ i }) => i`step.introduction`,
  logo,
  afterContent: ({ i }) => (
    <div>
      <style>
        {style}
      </style>
      <Section title={i`intro.title`}>
      <ol>
        <li>{i`intro.intro1_1`}<ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>{i`intro.or_2`}</li><br/>
        <li>{i`intro.intro2`}</li><br/>
        <li><b>{i`intro.intro3`}</b></li><br/>
        <li>{i`intro.intro4_1`}<ExternalLink title={i`intro.ydc`} href={i`intro.ydclink`}/>{i`intro.intro4_2`}<br /></li><br/>
        <li>{i`intro.intro5`}</li><br/>
        <li>{i`intro.intro6`}</li><br/>
        <li>{i`intro.intro7`}</li><br/>
        <li>{i`intro.intro8`}</li><br />
        <li>{i`intro.intro9`}</li><br />
      </ol>
        <Field.Checkbox name="Declaration1" label={i`intro.declaration`} required />
      </Section>
    </div>
  ),
});