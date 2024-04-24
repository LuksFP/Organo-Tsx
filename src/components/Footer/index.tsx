import './Footer.css';

const Footer = () => {
  return (
    <footer className="container-footer">
      <section className="social-media">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/lucas-kayck-franco-pinheiro-bb3971246/" target="_blank" rel="noreferrer">
              <img src="/images/lk.png" alt="Twitter da Alura" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/eaelukinhasmp/" target="_blank" rel="noreferrer">
              <img src="/images/ig.png" alt="Instagram da Alura" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/images/brand.png" alt="Logo Organo"/>
      </section>
      <section>
        <p>Desenvolvido por Lukas.</p>
      </section>
    </footer>
  )
}

export default Footer;
