import { MdCheckBox } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  // const[dateTime,setDateTime]=useState("")
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;
    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }
  

    setTask((prev) => [...prev, inputValue]);

    setInputValue("");
  };

  const now=new Date();
  const formattedDate=now.toLocaleDateString();
  const formattedTime=now.toLocaleTimeString();
  // const getDateTime=()=>{
  //   const now = new Date();
  //   const formattedDate = now.toLocaleDateString();
  //   const formattedTime = now.toLocaleTimeString();

  // };

  // setInterval(()=>{  const now = new Date();
  // const formattedDate = now.toLocaleDateString();
  // const formattedTime = now.toLocaleTimeString();
  // setDateTime(`${formattedDate}--${formattedTime}`),1000});

  const handleDeleteTodo=(value)=>{
    const updatedTask=task.filter((curElem)=>curElem!==value)
    setTask(updatedTask)

  }
  const handleClearAll=()=>{
    setTask([])

  }


  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <h2>{formattedDate}-{formattedTime}</h2>
        </header>

        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                className="todo-input"
                autoComplete="off"
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="todo-btn">
                ADD TASK
              </button>
            </div>
          </form>
        </section>
        <section className="myUnordList">
          <ul>
            {task.map((curElem, index) => {
              return (
                <li key={index}>
                  <span>{curElem}</span>
                  <button className="check-btn">
                    <MdCheckBox />
                  </button>
                  <button className="delete-btn" onClick={()=>handleDeleteTodo(curElem)}>
                    <MdDeleteForever />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <button onClick={handleClearAll}>clear</button>
        </section>
      </section>
    </>
  );
};
