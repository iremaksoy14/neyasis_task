import React,{useEffect,useState} from 'react';
import './left.css'
import behance from "../../../../assets/images/social/behance.png";
import facebook from "../../../../assets/images/social/facebook.png";
import github from "../../../../assets/images/social/github.png";
import linkedin from "../../../../assets/images/social/linkedin.png";
import neun from "../../../../assets/images/social/neun.png";
import shape from "../../../../assets/images/social/shape.png";
import twitter from "../../../../assets/images/social/twitter.png";
import connection from "../../../../assets/images/social/connection.png";
import editfilled from '../../../../assets/images/editfillled.png'
import profile from '../../../../assets/images/profile.png'
import dowland from '../../../../assets/images/dowland.png'
import filled from '../../../../assets/images/filled.png'
import filledpdf from '../../../../assets/images/filledpdf.png'
import cross from '../../../../assets/images/cross.png'
import searching from '../../../../assets/images/searching.png'
import paper from '../../../../assets/images/paper.png'
import * as homeActionAction from '../../../../Store/_redux/home/homeAction'
import {useDispatch,useSelector} from 'react-redux'
import golge from '../../../../assets/images/golge.png'

function index(props) {
  

   
    const user = {
        name: "Nesil Aksoy",
        job: "UX Designer",
        address: "Türkiye, İstanbul, Sarıyer",
        mail: "eray_karakullukcu.neyasis.com",
        phone: "+90 555 66 44"
    }
    const social_media=[
        { url:behance},
        { url:facebook},
        { url:github},
        { url:linkedin},
        { url:neun},
        { url:shape},
        { url:twitter},
        { url:connection},

      

    ]
    const documentInfo=[
        { img:filled,name:"eraycv.docx"},
        { img:filledpdf,name:"eraycv—eng.pdf"},
        { img:filledpdf,name:"mcpd-cert.pdf"},
    ]
    const documentSaved=[
        { img:searching,name:"Neyasis Tech"},
        { img:searching,name:"Apple"},
     
    ]
    const applicaitons=[
        { img:paper,name:"Neyasis Tech."},  
    ]

    return (
        <div className='leftSectionFrame'>
            <article><img className='article_image' src={golge}/><img className='edit_image' src={editfilled} alt="burası"/><img src={profile}/></article>
            <span>{user.name}</span>
            {
                Object.keys(user).map((key) => {
                    return (
                        <>
                            {
                                key !== "name" ? <label>{user[key]}</label> : null
                            }
                        </>
                    )
                })
            }
            <div className='cvLinkFrame'>
                <img  src={dowland}></img>
                <a>Find CV'mi indir</a>
            </div>
            <a>Profili Düzenle</a>
            <hr style={{marginBottom:0}}/>
            <span>
                Web sitesi
            </span>
            <div className='webSitesFrame'>
                {
                    social_media.map((item,index)=>{
                        return(
                            <img key={index} src={item.url}/>
                        )
                    })
                }
            </div>
            <a>Düzenle</a>
            <hr/>
            <a>Dokümanlar</a>
            <div className='ducFrame'>  
                {
                  documentInfo.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className='itemsFrame'>
                                <img src={item.img}/>
                                <label>{item.name}</label>
                                </div>
                              
                                <img src={cross}/>
                            </div>
                        )
                    })
                }
            </div>
            <a>Başka bir dokğman ekle</a>
            <hr/>
            <a>Kaydedilen Aramalar</a>
            <div className='ducFrame'>  
                {
                    documentSaved.map((item)=>{
                        return(
                            <div>
                                <div className='itemsFrame'>
                                <img src={item.img}/>
                                <label>{item.name}</label>
                                </div>

                               
                                <img src={cross}/>
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
            <a>Başvurularım</a>
            <div className='ducFrame'>  
                {
                  applicaitons.map((item)=>{
                        return(
                            <div>
                                <div className='itemsFrame' >
                                <img src={item.img}/>
                                <label>{item.name}</label>
                                </div>
                                
                                <img src={cross}/>
                            </div>
                        )
                    })
                }
            </div>
            <a>Tümünü gör</a>
        </div>
    );
}

export default index;