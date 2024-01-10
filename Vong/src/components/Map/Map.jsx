import "./Map.scss";
import BtnBase from "../Base/BtnBase/BtnBase";
export default function Map() {
  return (
    <section className="map-section">
      <div className="container">
      <div className="map">
          <h3 className="title">Получить скидку 15%</h3>
          <p className="map-subtitle">Подписаться на рассылку</p>
          <form action="#" className="form">
            <input placeholder="ivan@yandex.ru" type="mail" />
            <BtnBase />
          </form>
        </div>
      </div>
      </section>
  )
}
