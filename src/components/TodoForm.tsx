import React, { useState } from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, settitle] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        settitle(e.target.value)
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            props.onAdd(title);
            settitle('')
        }
    }

    return (
        <div className='input-field mt2'>
            <input onChange={changeHandler} onKeyPress={keyPressHandler} value={title} type="text" id="title" placeholder='Add name todo' />
            <label htmlFor="title" className='active'>Add name todo</label>
        </div>
    );
};

export default TodoForm;