import React from "react"
import "./home.css"
import Footer from '../footer/index'
import Companies from '../../components/companies/index'
import Jobs from '../../components/jobs/index'
import PopulerSearch from '../../components/populer_search/index'
export default () => (
 <div className="home_container">
 
  <img src={require("../../assets/images/home.png")}
    
     className="BG_image"/>
 
 <PopulerSearch/>
 <Jobs/>

  <div>
   <Companies/>
  </div>
  <div>5</div>
  <div><Footer/></div>

 </div>
)