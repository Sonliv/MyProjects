import React from 'react';
import './Map.scss';

const Map = () => {
  const mapHTML = `
    <div style="position:relative;overflow:hidden;">
      <a href="https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">
        Краснодар
      </a>
      <a href="https://yandex.ru/maps/35/krasnodar/house/ulitsa_yevdokii_bershanskoy_19a/Z0AYdgBmSkcOQFpvfXxwdnhjYA==/?ll=39.076328%2C45.017404&utm_medium=mapframe&utm_source=maps&z=17" style="color:#eee;font-size:12px;position:absolute;top:14px;">
        Улица Евдокии Бершанской, 19А на карте Краснодара — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=39.076328%2C45.017404&mode=whatshere&utm_source=share&whatshere%5Bpoint%5D=39.076329%2C45.017404&whatshere%5Bzoom%5D=17&z=17"
        width="100%"
        height="600"
        allowFullScreen={true}
        style="position:relative;"
      ></iframe>
    </div>
  `;

  return (
    <section id='Karta' className="map">
      <div className="container">
        <h3 className="map-title">Ателье на карте</h3>
        <div className="map-wrapper" dangerouslySetInnerHTML={{ __html: mapHTML }}></div>
      </div>
    </section>
  );
};

export default Map;
