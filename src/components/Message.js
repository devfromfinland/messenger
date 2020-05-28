import React from 'react'
import { formatDate } from '../utils/helpers'

export default function Message ({message, isMe = false}) {
  return <div className={isMe ? 'self' : 'friend'}>
      <div className='chat-username'>
        {isMe ? 'me' : message.username}
      </div>
      <div className='chat-date'>{formatDate(message.timestamp)}</div>
      <div className='chat-content'>
        {message.content}
      </div>
    </div>
}