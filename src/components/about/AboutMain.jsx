import React from 'react'
import AboutHero from './AboutHero'
import AboutSection from './AboutSection'
import StatsSection from './StatsSection'
import CTASection from '../home/CTASection'
import LeadFormSection from '../home/LeadFormSection'

const AboutMain = () => {
  return (
    <div>
        <AboutHero/>
        <AboutSection/>
        <StatsSection/>
        <CTASection/>
        <LeadFormSection/>
    </div>
  )
}

export default AboutMain