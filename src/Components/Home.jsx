import React from 'react'
import About from './About'
// import SliderHome from './SliderHome'
import Bike from './Bike'
import CarRelocation from './CarRelocation'
import Footer1 from './Footer1'
import Menu from './Menu'
import MoversAndPackers from './MoversAndPackers'
import Qualities from './Qualities'
import Reservation from './Reservation'
import Services from './Services'
import Single from './Single'
import Team from './Team'
import WhoAreWe from './WhoAreWe'
import Blogs from './Blogs'
import HomeSlide from  "./HomeSlide"
const Home = () => {
  return (
    <>
         <HomeSlide></HomeSlide>
      {/* <SliderHome></SliderHome> */}
      <Menu></Menu>
      <Qualities></Qualities>
      <Services></Services>
      <About></About>
      <Blogs></Blogs>
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
