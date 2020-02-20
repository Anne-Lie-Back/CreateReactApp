import React, { HTMLProps, ChangeEvent} from 'react';

interface Props extends HTMLProps<HTMLFormElement> {
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TodoForm = ({onInputChange, ...props}: Props) =>{
    return (
        <form {...props}>
            <input 
                placeholder = "Watcha wanna do?"
                onChange = {onInputChange}
            />
            <button>Create</button>
        </form>
    )
}

export default TodoForm;