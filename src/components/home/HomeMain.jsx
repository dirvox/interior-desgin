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


const HomeMain = () => {
  return (
    <div>
        <HeroSection/>
        <PhilosophyStats/>
        <ScrollingServices/>
         <OurProcess/>
        <PortfolioSection/>
         <VideoShowcase/>
           <CTASection/>
        <TestimonialsSection/>
       
      
       <LeadFormSection/>
       
    </div>
  )
}

export default HomeMain