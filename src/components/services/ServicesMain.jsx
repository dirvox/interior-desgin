import React from 'react'
import ServicesHero from './ServicesHero'
import InteriorCaseStudies from './InteriorCaseStudies'
import ScrollingServices from '../home/ScrollingServices'
import LeadFormSection from '../home/LeadFormSection'
import FAQSection from '../home/FAQSection'

const ServicesMain = () => {
  return (
    <div>
        <ServicesHero/>
        <InteriorCaseStudies/>
        <ScrollingServices/>
        <FAQSection/>
        <LeadFormSection/>
    </div>
  )
}

export default ServicesMain