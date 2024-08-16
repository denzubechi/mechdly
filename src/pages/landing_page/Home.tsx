import React from 'react'
import Hero from '../../components/landing_page_components/Hero'
import CTA from '../../components/landing_page_components/CTA'
import Testimonials from '../../components/landing_page_components/Testimonials'
import Services from '../../components/landing_page_components/Services'
import Header from '../../components/landing_page_components/Header'
import Footer from '../../components/landing_page_components/Footer'
const Home = () => {
  return (
    <>
        <Header/>
        <CTA/>
        <Services/>
        <Testimonials/>
        <Footer/>
    </>
  )
}

export default Home