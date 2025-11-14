import React from 'react'
import HeroSection from '../components/Hero'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Product from '../components/ServiceSection'
import HowItWorks from "../components/HowItWork"
import FAQ from '../components/Faq'
import TestimonialSlider from '../components/Testimonials'
import OurTeam from '../components/OurTeam'
import StatsSection from '../components/StatsCounter'

const Home = () => {
  return (
   <>
   <HeroSection/>
   <About/>
   <Product/>
   <WhyChooseUs/>
   <HowItWorks/>
  <StatsSection/>
   <OurTeam/>
   <TestimonialSlider/>
   <FAQ/>
   </>
  )
}

export default Home