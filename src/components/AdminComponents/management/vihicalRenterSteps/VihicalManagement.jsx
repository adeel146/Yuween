import React, { useState } from 'react'

import DataTable from '../managementData/DataTable'
import CarlistDetail from './carlistDetail/CarlistDetail'

const VihicalManagement = () => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <>
      {isEdit === false ?
        <>
          <div className='py-5'>
            <DataTable setIsEdit={setIsEdit} title={"Vehicle Fleet Management"} />
            <div className='pt-5'>
              <DataTable setIsEdit={setIsEdit} title={"Vehicle Fleet Restrictions "} />
            </div>
          </div>

        </>
        :
        <CarlistDetail/>
    
    }
    </>
  )
}

export default VihicalManagement