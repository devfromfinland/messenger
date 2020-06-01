import React, { Fragment } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Chat } from '@material-ui/icons'

function countOnline(statusUsers) {
  let count = 0
  Object.values(statusUsers).forEach(user => {
    if (user.status !== 'offline') { count++ }
  })
  
  return count
}

export default function UsersDashboard (props) {
  const { authedUser, users, statusUsers } = props

  return (
    <Fragment>
      <div className='mb-4 mt-4'>
        <h3>Users ({countOnline(statusUsers)} online)</h3>
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
                { statusUsers[user.username].status === 'online' && 
                  <span className='badge badge-success'>Online</span> }

                { statusUsers[user.username].status === 'idle' && 
                  <span className='badge badge-warning'>Idle</span> }

                { statusUsers[user.username].status === 'offline' && 
                  <span className='badge badge-secondary'>Offline</span> }
              </td>
              <td>
                {
                  user.username === authedUser
                    ? null
                    : <Link to={'/messages/' + user.username}>
                      <Chat color='primary' /> Chat
                    </Link>
                }
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Fragment>
  )
}