import "./CreateTodobutton.css"
function CreateTodoButtom(){
    return(
    <button className="CreateTodoButton" 
    onClick={
      (event)=> {
        console.log('le diste click')
        console.log(event)
        console.log(event.target)
      }}
    >+</button>
    );
  }

  export {CreateTodoButtom};