import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import './right.css'
import user from "../../../../data/user"
import ok from '../../../../assets/images/ok.png'
import * as homeAction from '../../../../Store/_redux/home/homeAction'

function index(props) {
   
    
   
    const getTitleFrameWithLabel = (name) => {
        return (
            <>
                <div>
                    <label className='contentText'>
                        {name}
                    </label>
                    <label className='duzenle'>Düzenle</label>
                </div>
                <hr />
            </>

        )
    }
    const getTitleFrameWithA = (name) => {
        return (
            <>
                <div>
                    <a>
                        {name}
                    </a>
                    <label className='duzenle'>Düzenle</label>
                </div>
                <hr />
            </>
        )
    }
    const getExperience = () => {
        return (
            <>
                {getTitleFrameWithLabel("Deneyim")}
                {
                    user.experience.map((experience, index) => {
                        return (
                            <>
                                <a style={{ marginTop: index != 0 ? 20 : 0 }}>{experience.title}</a>
                                <a className='info m-0' style={{ fontSize: 18, marginTop: 5 }}>{experience.company}</a>
                                <label className='info m-2'>{experience.time}</label>
                                <label className='info m-2'>{experience.address}</label>
                                <label className='info m-10'>{experience.text}</label>
                            </>
                        )
                    })
                }
            </>
        )
    }
    const geteducation = () => {
        return (
            <>
                {getTitleFrameWithLabel("Eğitim")}
                {
                    user.education.map((education) => {
                        return (
                            <>
                                <a style={{ marginTop: index != 0 ? 20 : 0 }}>{education.name}</a>
                                <label className='info m-10' style={{ fontSize: 18 }}>{education.degree}</label>
                                <label className='info m-2'>{education.department}</label>
                                <label className='info m-2'>{education.time}</label>

                            </>
                        )
                    })
                }
            </>
        )
    }
    const getBio = () => {
        return (
            <>
                {getTitleFrameWithA("Profesyonel Bakış")}
                <label className='info'>
                    {user.profesyonelBakis}
                </label>
            </>

        )
    }
    const getCertificates = () => {
        return (
            <>
                {getTitleFrameWithLabel("Sertifikalar")}
                {
                    user.certificates.map((certificate) => {
                        return (
                            <>
                                <label className='info m-10 certificates ' style={{ fontSize: 18 }}>{certificate.title}</label>
                                <label className='info m-2'>{certificate.name}</label>
                                <label className='info m-2'>{certificate.date}</label>

                            </>
                        )
                    })
                }
            </>
        )
    }
    const getSkills = () => {
        return (
            <>
                {getTitleFrameWithLabel("Yetenekler")}
                <div className='wrappedFrame'>
                    {
                        user.skills.map((skill, index) => {
                            return (
                            <label className='info w-fit' style={{ fontSize: 18 ,marginTop:index!=0 && index!=1 ? 10:0 }}><img  width={15} heiht={14}  src={ok}/>{skill.name}</label>
                                
                            )
                        })
                    }
                </div>
            </>

        )
    }
    const getHobbies = () => {
        return (
            <>
                {getTitleFrameWithLabel("İlgi Alanları")}
                <div className='wrappedFrame'>
                    {
                        user.hobbies.map((hobbie, index) => {
                            return (
                                <label className='info w-fit' style={{ fontSize: 18 ,marginTop:index!=0 && index!=1 ? 10:0 }}><img width={15} heiht={14} src={ok}/>{hobbie.name}</label>
                            )
                        })
                    }
                </div>
            </>

        )
    }
    return (
        <div className='rightSectionContainer'>
            <label className='title'>Profil</label>
            {getBio()}
            {getExperience()}
            {geteducation()}
            {getCertificates()}
            {getSkills()}
            {getHobbies()}
        </div>
    );
}

export default index;