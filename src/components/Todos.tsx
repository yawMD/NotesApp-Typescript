import React from 'react';
import Todo from './models/todo';
import List from "./List"

const Todos: React.FC<{items: Todo[]}> = (props)=>{
    return(
        <ul className='m-4 border text-left bg-blue-200 rounded-xl '>
        {props.items.map(item=><List key={item.id} text={item.text}/>)}   
        </ul>
    )
}

export default Todos