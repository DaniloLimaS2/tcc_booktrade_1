import { Link } from 'react-router-dom';
import styles from './MenuFuncionario.module.css';

const MenuFuncionario = () => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg p-2 rounded shadow-sm w-100 ${styles.menu}`}>
        <Link className={`navbar-brand ${styles.logo}`} to="/">
          BookTrade
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className={`nav-link ${styles.itemMenu}`} to="/">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.itemMenu}`} to="/livros">
                Livros
              </Link>
            </li>
          </ul>

          <button type="button" className="btn btn-primary">
            Entrar
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MenuFuncionario;