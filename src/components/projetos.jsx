import projetos from "../data/projetos";

function Projetos() {
  return (
    <section id="projetos">
      <h1>Meus Projetos</h1>
      <div className="grid-container">
        {projetos.map((projeto, index) => (
          <div key={index} className="card">
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projetos;