import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import sampleAvatar from '../utils/sampleAvatar.jpg'

class Login extends Component {

  onLogin = (e) => {
    e.preventDefault()

    console.log(e.currentTarget.id)

    // update authedUser state
    // dispatch(handleLogin(e.currentTarget.id))

    // redirect to the requested URL
    // const currentURL = this.props.match.url
    // this.props.history.push(currentURL)
  }

  render() {
    const users = [
      {
        username: 'vietpa',
        name: 'Viet Phan',
        avatarURL: '',
      },
      {
        username: 'hoangfinnair',
        name: 'Hoang',
        avatarURL: '',
      },
      {
        username: 'stevedoan',
        name: 'Tho Doan',
        avatarURL: '',
      },
    ]

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

              <img src={sampleAvatar} alt={user.name} />
              <p>{user.name} ({user.username})</p>
              
            </ListGroup.Item>
          )}
        </ListGroup>
      </div>
    )
  }
}

export default Login