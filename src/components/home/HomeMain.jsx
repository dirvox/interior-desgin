import React from 'react'
import HeroSection from './HeroSection'
import PhilosophyStats from './PhilosophyStats'
import ScrollingServices from './ScrollingServices'
import PortfolioSection from './PortfolioSection'
import TestimonialsSection from './TestimonialsSection'
import CTASection from './CTASection'
import VideoShowcase from './VideoShowcase'
import OurProcess from './OurProcess'
import LeadFormSection from './LeadFormSection'
import FAQSection from './FAQSection'
import Transform from './Transform'
import OurProcessAnimation from './OurProcessAnimation'


const HomeMain = () => {
  return (
    <div>
        <HeroSection/>
        <PhilosophyStats/>
        <ScrollingServices/>
         {/* <OurProcess/> */}
         <OurProcessAnimation/>

         <Transform/>
        <PortfolioSection/>
         <VideoShowcase/>
           <CTASection/>
        <TestimonialsSection/>
        <FAQSection/>
       
      
       <LeadFormSection/>
       
    </div>
  )
}

export default HomeMain