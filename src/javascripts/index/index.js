import React from 'react';
import '../../stylesheets/index/index.scss';
import '../pages/component.js';
import { IntlProvider } from 'react-intl';
import { render } from 'react-dom';
import App from '../pages/component.js';

function loadLocaleData(locale) {
  switch (locale) {
    case 'fr':
      return import('compiled-lang/fr.json');
    default:
      return import('compiled-lang/en.json');
  }
}

function AppWrapper(props) {
  return (
    <IntlProvider
      locale={props.locale}
      defaultLocale="en"
      messages={props.messages}
    >
      <App />
    </IntlProvider>
  );
}

async function bootstrapApplication(locale, mainDiv) {
  const messages = await loadLocaleData(locale);
  render(<AppWrapper locale={locale} messages={messages} />, mainDiv);
}

bootstrapApplication('en', document.getElementById('root'));