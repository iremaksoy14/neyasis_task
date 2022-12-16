import React from 'react'
import './footer.css'
import iskur from '../../../assets/images/iskur-logo.png'
export default function index() {
  return (
    <footer className='footer_container'>
      <div className='footerTop'>
        <span>
          ®2020 Finddeveloper.net
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
           Fiddeveloper'da Çalışmak
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
      
      <div className='footerTop_nav'>
      <img className='iskur_image' src={iskur}/>
      <label > Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak 31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Diğer iller için tıklayın. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi :
0216 523 90 26</label>
      </div>
    </footer>
  )
}
