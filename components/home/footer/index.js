import React,{useState}from 'react'
import './footer.css'
import iskur from '../../../assets/images/iskur-logo.png'
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
const translationsEn = {
  welcome: "Welcome!",
  find:" ®2020 Finddeveloper.net",
  security_centre:" Privacy Center",
  cookies:"Cookies",
  security:"Security",
  conditions:"Conditions",
  work:"Working at Fiddeveloper",
  about:"About",
  help:"Help Center",
  textMessage:"Finddeveloper.net Inc. As a Private Employment Agency, it operates with the document numbered 170 in accordance with the decision of the Turkish Employment Agency dated 16.07.2018 and numbered 26124, to operate between 31/08/2018-30/08/2021. Pursuant to Law No. 4904, job seekers will not be charged and no benefits will be provided. You can contact the following phone number for complaints. Click for other provinces. Istanbul Provincial Directorate of Turkish Employment Agency: 0212 555 55 55 Turkish Employment Agency Istanbul Labor and Employment Agency Ümraniye Service Center:0216 523 90 26"


 
};

const translationsTr = {
  welcome: "hosgeldiniz!",
  find:" ®2020 Finddeveloper.net",
  security_centre:" Gizlilik Merkezi",
  cookies:"Çerezler",
  security:"Gizlilik",
  conditions:"Şartlar",
  work:"Fiddeveloper'da Çalışmak",
  about:"Hakkımızda",
  help:"Yardım Merkezi",
  textMessage:" Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak 31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Diğer iller için tıklayın. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi :0216 523 90 26"


 
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      tr: { translation: translationsTr },
    },
    lng: "tr",
    fallbackLng: "tr",
    interpolation: { escapeValue: false },
  });
export default function index() {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <footer className='footer_container'>
      <div className='footerTop'>
        <span>
        {t("find")}
        </span>
        <div style={{marginRight:81}} className='footer_margin'>
          <span>
          {t("security_centre")}

          </span>
          <span>
        {t("cookies")}
            
          </span>
          <span>
          {t("security")}
          </span>
          <span>
          
          {t("conditions")}

          </span>
        </div>
        <div  className='footer_secondmargin'>
        <span>
          {t("work")}
          </span>
          <span>
          {t("about")}
          
          </span>
          <span>
          {t("help")}
           
          </span>
         
        </div>
        <select className='language' name="language"  onChange={onChange}>
       <option class="special" value="tr">Turkish</option>
            <option class="special" value="en">English</option>
            
          </select>
         
      </div>
      
      <div className='footerTop_nav'>
      <img className='iskur_image' src={iskur}/>
      <label > Finddeveloper.net A.Ş. Özel İstihdam Bürosu Olarak 31/08/2018-30/08/2021 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 16.07.2018 tarih ve 26124 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Diğer iller için tıklayın. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 555 55 55 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi :
0216 523 90 26</label>
      </div>
    </footer>
  )
}
