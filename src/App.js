import { BrowserRouter } from 'react-router-dom';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
import React from 'react';

const defaultTodos = [
  { text: 'cortar cebolla', completed: true},
  { text: 'Tomar curso de React', completed: false},
  { text: 'mimir y respirar', completed: false},
  { text: 'cocinarme', completed: false},
  { text: 'supermimicion', completed: false},
  { text: 'MIAU', completed: true}

];

function App() {
  
  const [todos, setTodos]= React.useState(defaultTodos); //estado para los to dos, crea un array, y esta llenada por el default
  const [searchValue, setSearchValue ] = React.useState(''); //estado para las busqeudas
  const completedTodos = todos.filter(   //variable que guarda la cantidad de todos completed del array que filtro con el value completed
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length; //variable da la cantidad de todos

  const searchedTodos = todos.filter(
    (todo)=>{
      const todoText = todo.text.toLocaleLowerCase(); //variable que baja a minusculas la lista de todos
      const searchText = searchValue.toLocaleLowerCase(); //variable que la busqueda tambien las convierte en minusculas
      return todoText.includes(searchText); //busqueda en los todos que cumplan con el input
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos]; //hace una copia
    const todoIndex = newTodos.findIndex( //funcion findindex
      (todo) => todo.text === text  //regresa la ubicacion donde text sea igual al todo.text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>

      <TodoCounter 
       completed={completedTodos}
       total={totalTodos}
       />
      <TodoSearch 
        searchValue= {searchValue}
        setSearchValue={setSearchValue}
      />

<TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButtom />
      
    </React.Fragment>
  );
}

//Añadir un cambio
export default App;
