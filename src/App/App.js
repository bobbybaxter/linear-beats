import React from 'react';
import {
  BrowserRouter, Redirect, Switch,
} from 'react-router-dom';

import Home from '../components/Home/Home';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Test1 from '../components/Test1/Test1';
import Test2 from '../components/Test2/Test2';
import Test3 from '../components/Test3/Test3';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar />
            <div>
              <Switch>
                <Home path="/home" />
                <Test1 path="/test1" />
                <Test2 path="/test2" />
                <Test3 path="/test3" />

                <Redirect from="*" to="/home"/>
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
