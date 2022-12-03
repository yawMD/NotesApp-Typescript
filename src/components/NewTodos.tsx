import React,{useRef} from 'react';

const NewTodos: React.FC<{submitText:(text:string)=>void}> = (props)=>{
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event:React.FormEvent) =>{
        event.preventDefault();

        const enteredText = inputRef.current!.value

        if(enteredText.length===0){
            return;
        }
        props.submitText(enteredText);
    }
    return(
        <form className=" rounded p-2" onSubmit={submitHandler}>
        <input className="outline-none border rounded" ref={inputRef} type="text" />
        <button className="border rounded-xl mx-2 bg-blue-600 text-white p-1" type="submit">submit</button>
        </form>
    )
}

export default NewTodos