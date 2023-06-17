import React from 'react'
import Layout from '../../components/layouts/mainLayout/MainLayout'
import Banner from '../../components/MainLandingComp/rent/Banner'
import Management from '../../components/MainLandingComp/rent/Management'
import Closer from '../../components/MainLandingComp/rent/Closer'
import Primecar from '../../components/MainLandingComp/rent/Primecar'

const Rent = () => {
    return (
        <Layout>
            <Banner/>
            <Management/>
            <Closer/>
            <Primecar/>
        </Layout>
    )
}

export default Rent