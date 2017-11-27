import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import configureStore from '../../store';

// import Menu from 'components/Menu';
import Routing from 'components/Routing';

class App extends Component {

  render () {
  	const configs = configureStore();

    return (
      <Provider store={configs.store}>
	      <PersistGate persistor={configs.persistor}>
	      		<header className="header--main">
	      			<div className="header--main--container">
	      				PERSONAL CONTACT REPO
	      			</div>
	      		</header>
	      		<main className="main">
	      			<Router>
		    			<Routing />
		    		</Router>
		    	</main>
		  </PersistGate>
	  </Provider>
    );
  }
}

export default App;
