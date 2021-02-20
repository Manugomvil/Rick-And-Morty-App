import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './routes/App';
import {Provider} from 'react-redux'
import {createStore,compose} from 'redux'
import reducer from './Reducers'

const initialState = {
  data:[]
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,composeEnhancers())
ReactDom.render(
<Provider store={store}>
    <App/>
</Provider>
,document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
