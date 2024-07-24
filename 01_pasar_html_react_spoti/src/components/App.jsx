import '../styles/App.scss';
import logoImg from '../images/logo.png';
import hamburgerImg from '../images/menu-icon.png';
import benefitOne from '../images/benefit-1.png';
import benefitTwo from '../images/benefit-2.png';
import benefitThree from '../images/benefit-3.png';
import benefitFour from '../images/benefit-4.png';
import SpainFlag from '../images/es.svg';

function App() {
  return (
    <>
      <header className="header">
      <img className="header__logo" src={logoImg} alt="Spotify logo" />
      <img className="header__menu--mobile" src={hamburgerImg} alt="Icono del menú hamurguesa" />

      <nav className="header__menu--desktop">
        <ul className="menu__list">
          <li>  <a className="menu__link" href="">Premium</a>  </li>
          <li>  <a className="menu__link" href="">Ayuda</a>  </li>
          <li>  <a className="menu__link menu__link--separator" href="">Descargar</a> </li>
          <li>  <a className="menu__link" href="">Registrarse</a>  </li>
          <li>  <a className="menu__link" href="">Iniciar sesión</a>  </li>
        </ul>
      </nav>
    </header>
    <main>
      {/* hero */}
      <section className="hero">
        <h1 className="hero__title">Prueba Premium gratis 3 meses</h1>
        <p className="hero__subtitle">Escucha millones de canciones sin anuncios, a la carta y sin conexión.</p>
        <a className="btn" href="#">Ver planes</a>
        <small>Rigen términos y condiciones. Los tres meses gratis no están disponibles para usuarios que
        ya hayan probado Premium.</small>
      </section>

      {/* benefits */}
      <section className="reasons">
        <h2 className="reasons__title">¿Por qué pasarte a Premium?</h2>
        <article className="reasons__content">
          <img className="benefit-img" src={benefitOne} alt="Descarga música" />
          Descarga música
          Llévala siempre contigo
        </article>
        <article className="reasons__content">
          <img className="benefit-img" src={benefitTwo} alt="Sin anuncios" />
          Sin anuncios
          Disfruta de música sin interrupciones
        </article>
        <article className="reasons__content">
          <img className="benefit-img" src={benefitThree} alt="Escucha lo que quieras" />
          Escucha lo que quieras
          Incluso en el móvil
        </article>
        <article className="reasons__content">
          <img className="benefit-img" src={benefitFour} alt="Salta todas las canciones que quieras" />
          Salta todas las canciones que quieras
          Simplemente dale a siguiente
        </article>
      </section>
    </main>
    {/* footer */}
    <footer className="footer">
      Legal
      Cookies
      Información sobre los anuncios
      España <img className="copy-spain-flag" src={SpainFlag} alt="Salta todas las canciones que quieras" />
      &copy; 2020 Spotify AB
    </footer>
    </>
  )
}

export default App;
