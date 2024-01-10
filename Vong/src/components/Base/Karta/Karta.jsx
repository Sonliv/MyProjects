export default function Karta(){
    return(
        <section className="karta">
            <div className="container">
            <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.ru/maps/35/krasnodar/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Краснодар
        </a>
        <a
          href="https://yandex.ru/maps/35/krasnodar/house/ulitsa_yevdokii_bershanskoy_19a/Z0AYdgBmSkcOQFpvfXxwdnhjYA==/panorama/?ll=39.076306%2C45.016817&panorama%5Bdirection%5D=334.791409%2C7.082873&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=39.076538%2C45.017014&panorama%5Bspan%5D=113.700685%2C60.000000&tab=panorama&utm_medium=mapframe&utm_source=maps&z=17.8"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Улица Евдокии Бершанской, 19А — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=39.076306%2C45.016817&mode=whatshere&panorama%5Bdirection%5D=334.791409%2C7.082873&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=39.076538%2C45.017014&panorama%5Bspan%5D=113.700685%2C60.000000&tab=panorama&whatshere%5Bpoint%5D=39.076569%2C45.017435&whatshere%5Bzoom%5D=17&z=17.8"
          width="100%"
          height="600px"
          frameBorder="1"
          allowFullScreen="true"
          style={{ position: "relative" }}
        ></iframe>
      </div>
            </div>
        </section>
    )
}