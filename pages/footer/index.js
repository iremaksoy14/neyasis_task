import React from 'react'
import './index.css'

export default function index() {
  return (
    <div className="BG">
      <div className='bg_first'>
        <div className='bg_child1'>
          <div className='list_row'>
          <div className='footer_color'><span class="-Finddeveloper Text-Style-7">
  ®2020 Finddeveloper.net
</span></div>
          <div className='footer_color'>
          <span class="Gizlilik-Merkezi Text-Style-7">
  Gizlilik Merkezi
</span>
<span class="erezler Text-Style-7">
  Çerezler
</span>
<span class="Gizlilik Text-Style-7">
  Gizlilik
</span>
<span class="artlar Text-Style-7">
  Şartlar
</span>
          </div>
          </div>
         

        </div>
        <div className='bg_child1'>
          <div className='list_row'>
          <div className='footer_color'><span class="Finddeveloperda-al Text-Style-7">
  Finddeveloper’da Çalışmak
</span></div>
          <div className='footer_color'>
          <span class="Hakkmzda Text-Style-7">
  Hakkımızda
</span>
<span class="Yardm-Merkezi Text-Style-7">
  Yardım Merkezi
</span>
<span class="Trke">
  Türkçe
</span>
          </div>
          </div>

        </div>
      </div>
      <div className='bg_second'>
       <div className='image_margin'><img src={require('../../assets/images/iskur-logo.png')}
     srcset="../../assets/images/iskur-logo@2x.png 2x,
             ../../assets./images/iskur-logo@3x.png 3x"
     class="iskur-logo"/></div>
        <div className='footer_color'><p>
        Finddeveloper.net A.Ş. Özel İstihdam Bürosu  <br/> Olarak 31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar uyarınca 170 nolu belge ile <br/> faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin <br/> edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Diğer iller için tıklayın. Türkiye <br/> İş Kurumu İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye <br/> Hizmet Merkezi :
0216 523 90 26</p></div>

      </div>
      <div></div>

    </div>
  )
}
