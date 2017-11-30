import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import './App.css';
import Router from './components/Router/Router';
import reducers from './reducers';
import epics from './epics';

const epicMiddleware = createEpicMiddleware(combineEpics(...epics));
const store = createStore(combineReducers(reducers), applyMiddleware(epicMiddleware));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router/>
			</Provider>
		);
	}
}

export default App;
;
