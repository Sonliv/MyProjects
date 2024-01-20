import "./Info.scss";
import InfoImg from "/info_wooman.png";
export default function Info() {
  return (
    <section id="aboutID" className="info">
      <div className="container">
        <div className="info-wrapper">
          <div className="info-text">
            <h2 className="title info-title">Индивидуальный подход</h2>
            <p className="info-subtitle">
              Мы специализируемся на индивидуальном пошиве костюмов, которые
              подчеркивают ваш стиль и уникальность. Независимо от повода - будь
              то деловая встреча, официальное мероприятие или особый случай -
              наши опытные мастера создадут для вас настоящее произведение
              искусства. Мы начинаем с тщательной консультации, чтобы понять
              ваши предпочтения и пожелания. Затем наши талантливые дизайнеры
              разработают уникальный дизайн, а опытные портнихи превратят его в
              реальность, используя только лучшие материалы.
            </p>
            <button className="info-btn">Подробнее</button>
          </div>
          <img src={InfoImg} alt="" className="info-img" />
        </div>
      </div>
    </section>
  );
}
