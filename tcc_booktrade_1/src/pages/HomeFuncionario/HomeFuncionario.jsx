import { Link } from 'react-router-dom';
import styles from './HomeFuncionario.module.css';
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";

const HomeFuncionario = () => {
  return (
    <div>
      <MenuFuncionario />
      <div className={styles.hero}>
        <h1 className={styles.titulo}>BookTrade</h1>
        <p className={styles.subtitulo}>
          Troque livros com outros leitores de forma simples e gratuita.
          Dê uma nova vida às suas leituras.
        </p>
        <Link to="/livros" className={styles.botao}>
          Ver livros disponíveis
        </Link>
      </div>
    </div>
  );
};

export default HomeFuncionario;