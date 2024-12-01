import React from 'react'
import About from '../pages/About'
import Qualities from '../pages/Qualities'
// import WhoAreWe from '../pages/Whoarewe'
import Team from '../pages/Team'
import Reservation from '../pages/Reservation'
import Footer from '../pages/Footer'
import SliderHome from '../pages/SliderHome'
import About1 from '../pages/About1'
import About2 from '../pages/About2'
import Menu from '../pages/Menu'
import Navbar1 from './Navbar1'
import Footer1 from '../pages/Footer1'

const Home = () => {
  return (
    <>
    <Navbar1></Navbar1>
      <SliderHome></SliderHome>
      <Menu></Menu>
      <Qualities></Qualities>
      <About></About>
      <About1></About1>
      <About2></About2>
      {/* <WhoAreWe></WhoAreWe> */}
    
      <Team></Team>
      <Reservation></Reservation>
      <Footer1></Footer1>
      {/* <Footer></Footer> */}
      

    </>
  )
}

export default Home;