import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { simpleAction } from './actions/simpleAction';
import Header from './components/header';
import Map from './components/map';

const mapStateToProps = state => ({
  ...state
})

const mapDispatchtoProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Map />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchtoProps) (App);
