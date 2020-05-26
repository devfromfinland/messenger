import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class Users extends Component {
  checkStatus = (username) => {
    // check redux's state

    return 'offline' // other return values: 'online', 'idle'
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
      <div className='text-center mt-5 mb-5'>
        <div className='mb-4'>
          <h3>Users (x online)</h3>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            { users && users.map((user) => 
              <tr key={user.username}>
                <td>
                  {user.username}
                </td>
                <td>
                  {this.checkStatus(user.username)}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Users