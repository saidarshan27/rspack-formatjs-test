import React from 'react';
import '../../stylesheets/component/component.scss';
import '../../stylesheets/component/css-component.css';
import { FormattedMessage } from 'react-intl';

const App = () => {
  return <>
    <h1>
      <FormattedMessage defaultMessage={'testing app rspack'} description={'testing app rspack'} />
    </h1>
  </>
}

export default App;