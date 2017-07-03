import 'normalize.css/normalize.css';
import 'graphiql/graphiql.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
