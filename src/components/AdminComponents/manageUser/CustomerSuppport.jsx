import React from 'react'
import Messages from './chats/Messages'
import MediaList from './chats/MediaList'

const CustomerSuppport = () => {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-5'>
        <div className='lg:col-span-2'>
         <Messages/>
        </div>
        <div>
          <MediaList/>
        </div>
      </div>
    </>
  )
}

export default CustomerSuppport