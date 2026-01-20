import React, { useContext } from 'react';
import './css/footer.css';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../translations';

function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].footer;

  return (
    <footer className="dark-mode">
      
      <div className="copyright">

        <div className="container container-copyright">

            {/* <hr className="line-title"/> */}
            <p className="copyright-small">{t.copyright}</p>
            <p className="copyright-small">{t.madeBy}</p>

        </div>

      </div>
      
    </footer>
  );
}

export default Footer