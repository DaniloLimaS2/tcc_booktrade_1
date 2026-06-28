import styles from './ListarProduto.module.css';
import MenuFuncionario from '../MenuFuncionario/MenuFuncionario';

const ListarProduto = () => {
  const livros = [
    { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", imagem: "/livros/dom-casmurro.jpg" },
    { id: 2, titulo: "1984", autor: "George Orwell", imagem: "/livros/livro-1984.jpg" },
    { id: 3, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", imagem: "/livros/pequeno-principe.jpg" },
   
  ];

  return (
    <div>
      <MenuFuncionario />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Livros disponíveis</h1>
        <p className={styles.subtitulo}>Escolha um livro para trocar.</p>

        <div className={styles.grade}>
          {livros.map((livro) => (
            <div key={livro.id} className={styles.card}>
              <img src={livro.imagem} alt={livro.titulo} className={styles.capa} />
              <h2 className={styles.cardTitulo}>{livro.titulo}</h2>
              <p className={styles.cardAutor}>{livro.autor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListarProduto;