import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { carsalesReducer } from './reducers/carsalesReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carsalesReducer)
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
