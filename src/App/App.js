import React from 'react';
import {
  BrowserRouter, Redirect, Switch,
} from 'react-router-dom';

import Home from '../components/Home/Home';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import FourFour from '../components/FourFour/FourFour';
import FiveFour from '../components/FiveFour/FiveFour';
import ThreeFour from '../components/ThreeFour/ThreeFour';
import SevenEight from '../components/SevenEight/SevenEight';

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
                <FourFour path="/four-four" />
                <FiveFour path="/five-four" />
                <ThreeFour path="/three-four" />
                <SevenEight path="/seven-eight" />

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
