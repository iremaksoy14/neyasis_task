import React from "react"
import "./home.css"
import Footer from '../../components/home/footer/index'
import Companies from '../../components/home/companies/index'
import Jobs from '../../components/home/jobs/index'


import Profile from '../../components/home/profile/index'
import Header from '../../components/home/header/index'
import Highlights from '../../components/home/highlights/index'
import PostingJob from '../../components/home/postingjobs/index'
export default () => {
    return (
        <div className="container">
            <Header></Header>
            <Jobs></Jobs>
            <Highlights></Highlights>
            <Profile/>
            <Companies/>
            <PostingJob/>
            <Footer/>
           
        </div>
    )
}


