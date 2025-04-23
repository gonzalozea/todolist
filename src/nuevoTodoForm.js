import React, { useState } from 'react';
import axios from 'axios';

function NewTodoForm({ onSave, onCancel }) {
  const [newTodoValue, setNewTodoValue] = useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSaveNewTodo = () => {
    if (newTodoValue.trim()) {
      axios.post('http://127.0.0.1:8000/api/todos/', { text: newTodoValue })
        .then(response => {
          onSave(); // Llamamos a la función para recargar los todos en App.js
          onCancel(); // Cerramos el formulario
        })
        .catch(error => {
          console.error('Error creating todo:', error);
          // Aquí podrías mostrar un mensaje de error al usuario
        });
    } else {
      alert('Por favor, ingresa el texto de la tarea.');
    }
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', border: '1px solid #ccc', zIndex: 1000 }}>
      <h2>Nueva Tarea</h2>
      <input
        type="text"
        placeholder="Texto de la nueva tarea"
        value={newTodoValue}
        onChange={onChange}
      />
      <div>
        <button onClick={onSaveNewTodo}>Guardar</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
}

export default NewTodoForm;