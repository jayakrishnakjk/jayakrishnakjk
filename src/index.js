import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Reducer } from './components/Reducer';
import { Provider} from 'react-redux'
import { createStore,applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(Reducer,applyMiddleware(ReduxThunk));
store.subscribe(()=>{console.log(store.getState())})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
