import { MdCheckBox } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import './Torent.css'
import { useState } from "react";

const Todo = () => {
  const [inputHandle, setInputHandle] = useState("");
  cosnt[(task, setTask)] = useState([]);
  const HandleInputChange = (value) => {
    setInputHandle(value);
  };
  const HandleForm = (event) => {
    event.preventDefault();

    if (!HandleInputChange) return;

    if (task.includes(HandleInputChange)) {
      HandleInputChange("");
    }
    setTask(() => [...Previous, inputHandle]);
  };
  return (
    <>
      <section className="Overall">
        <header class="headring">
          <h1>TODO-LIST</h1>
        </header>

        <section className="Formclass">
          <form onchange={HandleForm}>
            <div>
              <input className="inputstyle"
                type="text"
                autoComplete="off"
                value={inputHandle}
                onChange={(event) => HandleInputChange(event.target.value)}
              />
            </div>
            <button type="submit" className="addtask">ADD TASK</button>
          </form>
        </section>

        <section>
          <ul>
            {task.map((curElem, id) => {
              return (
                <li key={id}>
                  <span>{curElem}</span>
                  <button className="tick">
                    <MdCheckBox />
                  </button>
                  <button className="cross">
                    <MdDeleteForever />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </>
  );
};
