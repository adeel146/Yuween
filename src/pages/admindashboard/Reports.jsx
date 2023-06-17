import React, { useState } from 'react'
import Table from '../../components/AdminComponents/CustomerSupports/DataTable/Table'
import TicketDetail from '../../components/AdminComponents/CustomerSupports/DetailTicket/TicketDetail'

const Reports = () => {
    const [detail, setDetail] = useState(false)
    return (
        <>
            {detail === false ?
                <Table setDetail={setDetail} />
                :
                <TicketDetail/>
            }
        </>
    )
}

export default Reports