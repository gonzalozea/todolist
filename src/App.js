import React,{useState, useEffect} from 'react';
//import { BrowserRouter } from 'react-router-dom';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButtom } from './CreateTodoButtom';
import NewTodoForm from './nuevoTodoForm';
//import React from 'react';
import axios from 'axios';

/* const defaultTodos = [
  { text: 'cortar cebolla', completed: true},
  { text: 'Tomar curso de React', completed: false},
  { text: 'mimir y respirar', completed: false},
  { text: 'cocinarme', completed: false},
  { text: 'supermimicion', completed: false},
  { text: 'MIAU', completed: true}

]; */

function App() {
  
  // const [todos, setTodos]= React.useState(defaultTodos); //estado para los to dos, crea un array, y esta llenada por el default
  // const [searchValue, setSearchValue ] = React.useState(''); //estado para las busqeudas
  const [todos, setTodos] = useState([]); // Inicialmente vacío
  const [searchValue, setSearchValue ] = useState('');
  const [openNewTodoModal, setOpenNewTodoModal] = useState(false);

  const fetchTodos = () => {
    axios.get('http://127.0.0.1:8000/api/todos/')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todolist:', error);
      });
  };

  useEffect(() => {
    fetchTodos(); // Llamamos a la función al montar el componente
  }, []);
  
  const openModal = () => {
    setOpenNewTodoModal(true);
  };

  const closeModal = () => {
    setOpenNewTodoModal(false);
  };

  const handleSaveNewTodo = () => {
    fetchTodos(); // Volvemos a cargar los todos después de guardar uno nuevo
  };

  // useEffect(() => {
  //   axios.get('/api/todolist/') // Petición GET a tu API de Django
  //     .then(response => {
  //       setTodos(response.data); // Actualiza el estado con los datos recibidos
  //     })
  //     .catch(error => {
  //       console.error('Error fetching todos:', error);
  //       // Aquí podrías mostrar un mensaje de error al usuario
  //     });
  // }, []); // El array vacío como segundo argumento asegura que esto solo se ejecute una vez al montar el componente

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


  const completeTodo = (id) => {
    axios.put(`http://127.0.0.1:8000/api/todos/${id}/`, { completed: true }) // Petición PUT para actualizar el estado de completado
      .then(response => {
        // Actualiza el estado local después de la actualización exitosa en el backend
        setTodos(todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, completed: true };
          }
          return todo;
        }));
      })
      .catch(error => {
        console.error('Error completing todo:', error);
      });
  };

    //   {
  //   const newTodos = [...todos]; //hace una copia
  //   const todoIndex = newTodos.findIndex( //funcion findindex
  //     (todo) => todo.text === text  //regresa la ubicacion donde text sea igual al todo.text
  //   );
  //   newTodos[todoIndex].completed = true;
  //   setTodos(newTodos);
  // };

  const deleteTodo = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`) // Petición DELETE para eliminar el todo
      .then(response => {
        // Actualiza el estado local eliminando el todo
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => {
        console.error('Error deleting todo:', error);
      });
  }; 

  //   {
  //   const newTodos = [...todos];
  //   const todoIndex = newTodos.findIndex(
  //     (todo) => todo.text === text
  //   );
  //   newTodos.splice(todoIndex,1);
  //   setTodos(newTodos);
  // };

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
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>

      <CreateTodoButtom onClick={openModal} /> {/* Modificamos el botón para abrir el modal */}

      {openNewTodoModal && (
        <NewTodoForm
          onSave={handleSaveNewTodo}
          onCancel={closeModal}
        />
      )}
      
    </React.Fragment>
  );
}
//aqui hay un cambio
//Añadir un cambio
export default App;
