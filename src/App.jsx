import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([
    {
      text: 'vue',
      done: true,
    },
    { text: 'react', done: false },
  ]);

  const handleChangeInput = (event) => {
    const text = event.target.value;
    setInputValue(text);
  };

  const handleClickAdd = () => {
    const nextTodoList = [...todoList, { text: inputValue, done: false }];
    setTodoList(nextTodoList);
  };

  const handleClickDel = (targetIndex) => {
    const nextTodoList = todoList.filter(
      (item, index) => index !== targetIndex
    );
    setTodoList(nextTodoList);
  };

  const handleToggleDone = (targetIndex) => {
    const nextTodoList = todoList.map((item, index) => {
      if (targetIndex === index) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    setTodoList(nextTodoList);
  };

  return (
    <>
      <h1>Todo List</h1>
      react: {JSON.stringify(todoList)}
      <div>
        <input value={inputValue} onChange={handleChangeInput} />
        <button onClick={handleClickAdd}>확인</button>
      </div>
      {todoList.map((item, index) => (
        <div>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => handleToggleDone(index)}
          />
          {item.text}
          <button onClick={() => handleClickDel(index)}>삭제</button>
        </div>
      ))}
    </>
  );
}

export default App;
