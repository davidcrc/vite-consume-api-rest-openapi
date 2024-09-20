import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CreateTaskDto, TasksService } from "./api";

function App() {
  const [tasks, setTasks] = useState<CreateTaskDto[]>([]);

  // Función para obtener las tareas
  const fetchTasks = async () => {
    try {
      const response = await TasksService.tasksControllerGetTasks(); // Llamada a la API
      setTasks(response); // Guardamos las tareas en el estado
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // Obtener las tareas cuando el componente se monta
  }, []);

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
      <h1>Tasks {tasks.length}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.title}>{task.description}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
