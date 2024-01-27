import React from 'react'
import "./home.css"
import HomeHeader2 from './components/HomeHeader2'
import HomeHero from './components/HomeHero'
import HomeHeroFlip from './components/HomeHeroFlip'
import HomeEarnMoney from './components/HomeEarnMoney'
import HomeSimplicity from './components/HomeSimplicity'
import HomeSpamQuality from './components/HomeSpamQuality'
import HomeIncubated from './components/HomeIncubated'
import HomeContact from './components/HomeContact'
import HomeFooter from './components/HomeFooter'

const HomePage = () => {
  return (
    <>

    {/* header  */}
     <div className='w-screen bg-[#161616]' >
      <HomeHeader2></HomeHeader2>
      </div>
      {/* hero */}
      <HomeHero></HomeHero>

      {/* services compnonent */}
      <HomeHeroFlip></HomeHeroFlip>

      {/* earn money section */}
      <HomeEarnMoney></HomeEarnMoney>

      {/* simplicity is key section */}
      <HomeSimplicity></HomeSimplicity>

      {/* spam section */}
      <HomeSpamQuality></HomeSpamQuality>

      {/* Incubated section */}
      <HomeIncubated></HomeIncubated>

      {/* contact */}
      <HomeContact></HomeContact>

      {/* footer */}
      <HomeFooter></HomeFooter>   
      
    </>
  )
}

export default HomePage