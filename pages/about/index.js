import React from "react"
import Header from '../../components/about/header'
import Section from '../../components/about/section/index'
import Search from '../../components/about/search'
import Footer from '../../components/about/footer/index'
import group from '../../assets/images/group-2.png'

import './about.css'
export default function () {

  return (
    <div className="aboutContainer">
    
      <Header />
      <Search />
      <Section/>
      <Footer/>

    </div>

  )
}
