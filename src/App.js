import './App.css';

function App() {
  return (
    <div className="App">
      <header className="headerList">
        <p>Lista de tarefas</p>
      </header>
      <div className="taskList">
        <p> FUNÇÃO QUE RENDERIZA DADOS PERCORRIDOS</p>
        <p> RENDERIZAÇÃO DE COMPONENTES COM INFOS PROPS.CHILDREN </p>
      </div>
    </div>
  );
}

export default App;

// listagem de tarefas tem que ser armazenada em algum local, após o reload.
// lista armazenada vai ser renderizada por uma função (iteração)
// tarefas devem ter tag's de identificação
// tags (como? pensar)
// o sort opicional na renderização vai ocorrer conforme tags
// tags como atributos (?)
// taks's como componentes recebendo a lista por props.children


// REQUISITOS:
//Funcionalidades:
// Visualizar a lista de tarefas;
// Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
// Inserir uma nova tarefa na lista;
// Remover uma tarefa da lista;
// Atualizar uma tarefa da lista;
// A tarefa deve possuir um status editável: pendente, em andamento ou pronto;
