import React from 'react'
import UsersList from './UsersList'
import Messages from './Messages'
import MediaList from './MediaList'
const Chat = () => {
  return (
    <>
      <div className='grid lg:grid-cols-4 gap-5'>
        <div>
          <UsersList />
        </div>
        <div className='lg:col-span-2'>
          <Messages />
        </div>
        <div>
          <MediaList />
        </div>
      </div>
    </>
  )
}

export default Chat