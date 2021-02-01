import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import { withRouter } from 'react-router'
import './App.css';
import MoveContainer from './containers/MoveContainer'
import BoxContainer from './containers/BoxContainer';
import ItemsContainer from './containers/ItemsContainer'
import NavBar from './components/NavBar'
import { Route, Switch } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <Switch>
            <Route exact path="/moves" component={MoveContainer} />
            <Route path="/users/:userId/moves/:moveId/boxes" render={() => <BoxContainer/>} />
            <Route path="/users/:userId/moves/:moveId/boxes/:boxId/items" render={() => <ItemsContainer/>} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(App);
