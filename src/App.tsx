import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { TasksControllerGetTasksResponse, useApi } from "./hooks/useApi";

function App() {
  const api = useApi();

  const [tasks, setTasks] = useState<TasksControllerGetTasksResponse>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.tasksControllerGetTasks();

      setTasks(data ?? []);
    })();
  }, [api]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ul>
        {tasks.length === 0 && <span>No Tasks</span>}

        {tasks?.map(({ id, title, description, createdAt }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{createdAt}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
