import React, { Component } from 'react'
import Dashboard from './components/Dashboard'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
// import Rooms from './components/Rooms'
// import Users from './components/Users'
// import Login from './components/Login'
// import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Dashboard />
    )
  }
}

function mapStateToProps( state ) {
  console.log(state)

  return {
    authedUser: state.authedUser
  }
}

export default connect(mapStateToProps)(App)