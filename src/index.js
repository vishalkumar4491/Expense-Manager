import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client'

import {Provider} from './Context/context'

import App from './App';
import './App.css'


ReactDOM.render(
  <SpeechProvider appId="34c263eb-c2ab-4cd8-9720-eab67ac57711" language='en-US'> 
    <Provider >
    <App />
  </Provider >
  </SpeechProvider>,
  document.getElementById('root')
);


