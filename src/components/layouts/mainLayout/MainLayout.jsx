import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }) => {
  return (
    <div className=' pt-2 relative overflow-hidden overflow-x-hidden  '>
      <Header />
      <div className='my-4 overflow-hidden overflow-x-hidden '>
        {children}
      </div>
      <div className=''>
        <Footer />
      </div>
      {/* <div className='lg:hidden'>
        <MobileFooter />
      </div> */}
    </div>
  )
}

export default MainLayout