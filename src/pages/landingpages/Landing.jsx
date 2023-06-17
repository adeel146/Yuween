import React from 'react'
import Layout from '../../components/layouts/mainLayout/MainLayout'
import Banner from '../../components/MainLandingComp/landing/Banner'
import Services from '../../components/MainLandingComp/landing/Services'
import Occasions from '../../components/MainLandingComp/landing/Occasions'
// import Notre from '../../components/MainLandingComp/landing/Notre'
import Rentable from '../../components/MainLandingComp/landing/Rentable'
import Application from '../../components/MainLandingComp/landing/Application'
import VotreMobilite from '../../components/MainLandingComp/landing/VotreMobilite'
import NotreMobility from '../../components/MainLandingComp/landing/NotreMobility'
const Landing = () => {
  return (
    <Layout>
      <Banner />
      <Services />
      <Occasions />
      {/* <Notre /> */}
      <NotreMobility/>
      <Rentable/>
      <Application/>
      <VotreMobilite/>
    </Layout>
  )
}

export default Landing