import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './components/Provider';

import App from './containers/App';

ReactDOM.render(

  <Provider><App /></Provider>,
  document.getElementById('app')
);
