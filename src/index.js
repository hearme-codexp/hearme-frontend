import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { LocaleProvider } from 'antd';
import pt_BR from 'antd/lib/locale-provider/pt_BR';
import 'moment/locale/pt';

ReactDOM.render(
    <LocaleProvider locale={pt_BR}>
        <App />
    </LocaleProvider>
    , document.getElementById('root'));
registerServiceWorker();
