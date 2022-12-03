import React,{useState} from 'react';
import Todos from "./components/Todos";
import Todo from "./components/models/todo"
import NewTodos from './components/NewTodos'

function App() {

  const [text, setText] = useState<Todo[]>([])


  const passedText =(data:string)=>{
    const newtodo = new Todo(data)

    setText((prev)=>{
      return prev.concat(newtodo)
    })
  }
 
  return (
    <div className="border m-auto items-center justify-center text-center w-2/6 bg-gray-300 p-4 ">
      <NewTodos submitText={passedText}/>
      <Todos items={text}/>
    </div>
  );
}

export default App;
