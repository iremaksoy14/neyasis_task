import React from 'react'
import './footer.css'

export default function index() {
  return (
    <div className='footerFrame'>
      <div className='footerTop' style={{padding:0}}>
        <span>
        findtalent.net © 2022
        </span>
        <div className='footer_margin'>
          <span>
            Gizlilik Merkezi
          </span>
          <span>
            Çerezler
          </span>
          <span>
            Gizlilik
          </span>
          <span>
            Şartlar
          </span>
        </div>
        <div  className='footer_secondmargin'>
          <span>
          findtalent.net’de Çalışmak
          </span>
          <span>
            Hakımızda
          </span>
          <span>
            Yardım Merkezi
          </span>
         
        </div>
        <span >
            Türkçe 
          </span>
      </div>
      
     
    </div>
  )
}
