import React from 'react';
import './left.css'
import behance from "../../../../assets/images/social/behance.png";
import facebook from "../../../../assets/images/social/facebook.png";
import github from "../../../../assets/images/social/github.png";
import linkedin from "../../../../assets/images/social/linkedin.png";
import neun from "../../../../assets/images/social/neun.png";
import shape from "../../../../assets/images/social/shape.png";
import twitter from "../../../../assets/images/social/twitter.png";
import connection from "../../../../assets/images/social/connection.png";


import { isNullOrUndefined } from 'util';


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
    return (
        <div className='leftSectionFrame'>
            <article></article>
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
                <img></img>
                <a>Find CV'mi indir</a>
            </div>
            <a>Profili Düzenle</a>
            <hr style={{marginBottom:0}}/>
            <span>
                Web sitesi
            </span>
            <div className='webSitesFrame'>
                {
                    social_media.map((item)=>{
                        return(
                            <img src={item.url}/>
                        )
                    })
                }
            </div>
            <a>Düzenle</a>
            <hr/>
            <a>Dokümanlar</a>
            <div className='ducFrame'>  
                {
                    Array.from(Array(3).keys()).map((item)=>{
                        return(
                            <div>
                                <img/>
                                <label>fasfsdfsdf</label>
                                <img/>
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
                    Array.from(Array(2).keys()).map((item)=>{
                        return(
                            <div>
                                <img/>
                                <label>fasfsdfsdf</label>
                                <img/>
                            </div>
                        )
                    })
                }
            </div>
            <hr/>
            <a>Başvurularım</a>
            <div className='ducFrame'>  
                {
                    Array.from(Array(1).keys()).map((item)=>{
                        return(
                            <div>
                                <img/>
                                <label>fasfsdfsdf</label>
                                <img/>
                            </div>
                        )
                    })
                }
            </div>
            <a>Tümğnğ gör</a>
        </div>
    );
}

export default index;