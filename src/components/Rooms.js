import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class Rooms extends Component {
  render() {
    const rooms = [
      {
        roomId: 'room1',
        roomName: 'TechHunting Team',
        users: [ 'vietpa', 'hoangfinnair', 'stevedoan' ],
        messages: [
          {
            username: 'vietpa',
            timestamp: 1590507105088,
            content: 'Hi team'
          },
          {
            username: 'hoangfinnair',
            timestamp: 1590593505088,
            content: 'Hi anh Viet, hi team :)'
          },
        ]
      },
      {
        roomId: 'room2',
        roomName: 'Dev Team',
        users: [ 'vietpa', 'hoangfinnair'],
        messages: [
          {
            username: 'hoangfinnair',
            timestamp: 1590507105088,
            content: 'Hi anh Viet, I created this room for us to discuss about software development'
          },
          {
            username: 'vietpa',
            timestamp: 1590593505088,
            content: 'OK Hoang'
          },
        ]
      },
    ]

    return(
      <div className='text-center mt-5 mb-5'>
        ROOM CHAT HERE
      </div>
    )
  }
}

export default Rooms