import React from 'react'
import About from '../pages/About'
import Qualities from '../pages/Qualities'
import WhoAreWe from '../pages/Whoarewe'
import Team from '../pages/Team'
import Reservation from '../pages/Reservation'
import SliderHome from '../pages/SliderHome'
import Menu from '../pages/Menu'
import Footer1 from '../pages/Footer1'
import Services from '../pages/Services'
import Navbar1 from './Navbar1'
import Single from '../pages/Single'
import Bike from '../pages/Bike'
import MoversAndPackers from '../pages/MoversAndPackers'
import CarRelocation from '../pages/CarRelocation'

const Home = () => {
  return (
    <>
      <Navbar1></Navbar1>
      {/* <Navbar></Navbar> */}
      <SliderHome></SliderHome>
      <Menu></Menu>
      <Qualities></Qualities>
      <Services></Services>
      <About></About>
      <Single></Single>
      <Bike></Bike>
      <MoversAndPackers></MoversAndPackers>
      <CarRelocation></CarRelocation>
      <WhoAreWe></WhoAreWe>
      <Team></Team>
      <Reservation></Reservation>
      <Footer1></Footer1>
      

    </>
  )
}

export default Home;