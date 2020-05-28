import React, { Component, Fragment } from 'react'
import Dashboard from './components/Dashboard'
import Navigation from './components/Navigation'
import EmptyPage from './components/EmptyPage'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from './actions/shared'
import Rooms from './components/Rooms'
// import Users from './components/Users'
import Login from './components/Login'
import Messages from './components/Messages'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser, loading } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          { authedUser === '' && 
            <Fragment>
              {loading
                ? null
                : <Route path='*' render={(props) => <Login />} />
              }
            </Fragment>
          }

          { authedUser !== '' &&
          <Fragment>
            <Navigation authedUser={authedUser}/>
            {loading
                ? null
                : <Switch>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/rooms/:id' component={Rooms} />
                  <Route path='/messages/:id' component={Messages} />
                  <Route component={EmptyPage}/>
                </Switch>
            }
          </Fragment>
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  // console.log(state)

  return {
    authedUser: authedUser ? authedUser : '',
    loading: authedUser === null || typeof(authedUser) === 'undefined'
  }
}

export default connect(mapStateToProps)(App)