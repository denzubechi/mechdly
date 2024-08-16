import React from 'react'
import Hero from '../../components/landing_page_components/Hero'
import CTA from '../../components/landing_page_components/CTA'
import Testimonials from '../../components/landing_page_components/Testimonials'
import Services from '../../components/landing_page_components/Services'
import Header from '../../components/landing_page_components/Header'
const Home = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <CTA/>
        <Services/>
        <Testimonials/>
    </>
  )
}

export default Home