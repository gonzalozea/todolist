import "./CreateTodobutton.css";
import React from 'react'; // Import React

function CreateTodoButtom(props) { // Recibe las props
  return (
    <button
      className="CreateTodoButton"
      onClick={props.onClick} // Llama a la función que recibe como prop
    >
      +
    </button>
  );
}

export { CreateTodoButtom };

// import "./CreateTodobutton.css"
// function CreateTodoButtom(){
//     return(
//     <button className="CreateTodoButton" 
//     onClick={
//       (event)=> {
//         console.log('le diste click')
//         console.log(event)
//         console.log(event.target)
//       }}
//     >+</button>
//     );
//   }

//   export {CreateTodoButtom};