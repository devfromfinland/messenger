import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleLogin } from '../actions/authedUser'

class Login extends Component {

  onLogin = (e) => {
    e.preventDefault()

    // console.log(e.currentTarget.id)
    const { dispatch } = this.props

    // update authedUser state
    dispatch(handleLogin(e.currentTarget.id))

    // need to redirect somewhere?
  }

  render() {
    const { authedUser, users } = this.props

    if (!authedUser) {
      return(
        <div className='text-center mt-5'>
          <h3>LOGIN AS</h3>
      
          <ListGroup className='login-panel'>
            { users && users.map((user) => 
              <ListGroup.Item 
                key={user.username} 
                action
                id={user.username} 
                onClick={this.onLogin} 
                className='text-left user-name'>

                <img src={user.avatarURL} alt={user.name} />
                <p>{user.name} ({user.username})</p>
                
              </ListGroup.Item>
            )}
          </ListGroup>
        </div>
      )
    }
    else {
      return <div>
        You are logged in as {authedUser}
      </div> 
    }
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users: users ? Object.values(users) : null,
  }
}

export default connect(mapStateToProps)(Login)