import React, { Component } from 'react';
import logo from './logo.svg';
import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';

import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Switch>
                {/* <Route path='/' component = {} /> */}
                <Route path='/' exact component = {LandingPage} />
                <Route path='/login' exact component = {Login} />
            </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
