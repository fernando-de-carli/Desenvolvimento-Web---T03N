import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  
  const [textoInput, setTextoInput] = useState('');

  const adicionarTarefa = (e) => {
    e.preventDefault();

    if (textoInput.trim() === '') return;

    const novaTarefa = {
      id: Date.now(),
      text: textoInput
    };

    setTarefas([...tarefas, novaTarefa]);

    setTextoInput('');
  };

  const removerTarefa = (id) => {
    const tarefasRestantes = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(tarefasRestantes);
  };

  return (
    <div className="App">
      <h1>To-Do List (Atv 8)</h1>

      {}
      <form onSubmit={adicionarTarefa}>
        <input 
          type="text" 
          placeholder="O que precisa ser feito?"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>

      {}
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.text}
            <button 
              onClick={() => removerTarefa(tarefa.id)} 
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App