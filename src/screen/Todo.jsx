import React, { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');

    const handleInput = (e) => {
        setInputText(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
            const newTodo = {
                id: todos.length + 1,
                text: inputText,
                completed: false
            };
            setTodos(prevTodos => [...prevTodos, newTodo]);
            setInputText('');
        } else {
            alert("Input Field Is Empty");
        }
    };

    const handleToggleComplete = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    const handleDelete = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className='mx-5 flex justify-center align-middle'>
            <div className='h-auto mt-20 text-xl bg-blue-300 rounded-lg p-8 w-[590px]'>
                <div className='m-4'>
                    <input
                        type="text"
                        placeholder='Enter text...'
                        className='h-12 w-96 rounded-full bg-transparent placeholder-red-700 border-l-2 outline-none p-2'
                        value={inputText}
                        onChange={handleInput}
                    />
                    <button
                        className='ml-2 py-2 px-4 rounded-full border-r-2 text-white bg-blue-700'
                        onClick={handleAddTodo}
                    >
                        Add
                    </button>
                </div>
                <div>
                    <ul>
                        {todos.map(todo => (
                            <li key={todo.id} className='flex items-center justify-between mt-4'>
                                <div className='flex items-center'>
                                    <input
                                        type='checkbox'
                                        checked={todo.completed}
                                        onChange={() => handleToggleComplete(todo.id)}
                                        className='mr-2'
                                    />
                                    <span
                                        className={`todo-text ${todo.completed ? 'line-through' : ''}`}
                                        style={{ maxWidth: '400px', wordWrap: 'break-word' }}
                                    >
                                        {todo.text}
                                    </span>
                                </div>
                                <button
                                    className='ml-2 py-1 px-2 rounded bg-red-500 text-white'
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;
