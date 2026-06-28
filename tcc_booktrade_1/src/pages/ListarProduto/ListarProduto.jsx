import MenuFuncionario from '../MenuFuncionario/MenuFuncionario';

const ListarProduto = () => {
  return (
    <div className="container">
      <MenuFuncionario />
      <h1>Livros disponíveis</h1>
      <p>Veja os livros que estão disponíveis para troca.</p>
    </div>
  );
};

export default ListarProduto;