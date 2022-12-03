import React from 'react';
import Todo from './models/todo'

const List: React.FC<{text: string}> = (props)=>{
    return(
        <li className="m-3">{props.text}</li>
    )
}
export default List