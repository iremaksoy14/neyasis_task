import React from 'react';
import './right.css'
import ok from '../../../../assets/images/ok.png'
function index(props) {
    const user = {
        profesyonelBakis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        experience: [
            {
                title: "Founder",
                company: "Neyasis Technology",
                time: "February 2014 - Present (6 Years , 10 Months)",
                address: "Ümraniye - İstanbul / Turkey",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            },
            {
                title: "Software Development Manager",
                company: "IBM ",
                time: "Jully 2011 - January 2014  (2 Years, 6 Months)",
                address: "Armonk- New York /ABD",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
            }
        ],
        education: [
            {
                name: "Bahçeşehir Üniversitesi",
                degree: "Master Degree",
                department: "Computer & Information Scienses",
                time: "2015-2019"
            },
            {
                name: "Boğaziçi Üniversitesi ",
                degree: "Bachelor’s Degree ",
                department: "Political Science and International Relations",
                time: "2010-2015"
            },
        ],
        certificates: [
            {
                title: "MCP (Microsoft Certified Professional)",
                name: "Microsoft",
                date: "January 2015",
            },
        ],
        skills: [
            {
                name: "C#.Net (10 years)"
            },
            {
                name: "Swift (5 years)"
            },
            {
                name: "React (3 years)"
            },
        ],
        hobbies: [
            {
                name: "Boating / Sailing"
            },
            {
                name: "Snowboarding"
            },
            {
                name: "Windsurfing"
            }
        ]
    }
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
                            <label className='info w-fit' style={{ fontSize: 18 ,marginTop:index!=0 && index!=1 ? 10:0 }}>{skill.name}</label>
                                
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
                                <label className='info w-fit' style={{ fontSize: 18 ,marginTop:index!=0 && index!=1 ? 10:0 }}>{hobbie.name}</label>
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