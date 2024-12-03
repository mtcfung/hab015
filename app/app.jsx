/**
 * This is the entry file for the e-form front-end.
 */

// Import all the third party stuff
import React from 'react';
import { I18n, renderWithHotDeploy } from 'govhk-form-core';
import './l10n';
import FormApp from './FormApp';

renderWithHotDeploy(
  <I18n>
    <FormApp />
  </I18n>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
