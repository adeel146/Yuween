import React from 'react'
import Layout from '../../components/layouts/mainLayout/MainLayout'
import Vehicles from '../../components/MainLandingComp/professionnel/Vehicles'
import Proposals from '../../components/MainLandingComp/professionnel/Proposals'
import Habits from '../../components/MainLandingComp/professionnel/Habits'
import Information from '../../components/MainLandingComp/professionnel/Information'
import Banner from '../../components/MainLandingComp/professionnel/Banner'

const Professional = () => {
    return (
        <Layout>
                <Banner />
                <Vehicles />
                <Proposals />
                <Habits />
                <Information />
        </Layout>
    )
}

export default Professional