import './Forma.scss'
const Forma = () => {
    return (
        <section id='Forma' className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <h3 className="contact-title">Заказать Пошив</h3>
                    <p className="contact-desc">Напишите нам, чтобы получить консультацию по пошиву одежды</p>
                    <form className="contact-form" action="#Forma">
                        <input type="text" className="contact-user" placeholder='Ваше имя' />
                        <input type="tel" className="contact-user-pass" placeholder='+7 (999) 999-99-99' />
                        <textarea placeholder='Опишите вашу просьбу' className="contact-textarea" name="#" id="#"></ textarea>
                        <button className="contact-btn">Отправить</button>
                        <p className="contact-politic">Нажимая кнопку "Отправить", я даю  <a target="_blank" href="https://example.com/"><span>согласие на обратку моих персональных данных</span> </a> </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
 
export default Forma;