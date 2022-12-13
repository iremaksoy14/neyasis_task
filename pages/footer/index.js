import React from 'react'
import './index.css'
export default function index() {
  return (
    <div className="BG">
      <div className='bg_first'>
        <div className='bg_child1'>
          <div className='list_row'>
          <div className='footer_color'>®2020 Finddeveloper.net</div>
          <div className='footer_color'>
           <ul  style={{margin:0}}>
            <li>Gizlilik Merkezi  |</li>
            <li>Çerezler  |</li>

            <li>Gizlilik  | </li>
            <li>Şartlar  |</li>
         
           </ul>
          </div>
          </div>
         

        </div>
        <div className='bg_child1'>
          <div className='list_row'>
          <div className='footer_color'>Finddeveloper’da Çalışmak</div>
          <div className='footer_color'>
           <ul  style={{margin:0}}>
            <li>Hakkımızda</li>
            <li>Yardım Merkezi</li>
            <li>Türkçe</li>
           
         
           </ul>
          </div>
          </div>
         

        </div>
        <div></div>

      </div>
      <div className='bg_second'>
        <div></div>
        <div></div>

      </div>
      <div></div>

    </div>
  )
}
