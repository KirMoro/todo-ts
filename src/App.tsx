import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import TaskForm from './components/TaskForm';
import ToDoList from './components/ToDoList';
import { fakeTasks } from './__fixtures__/fakeTasks.js';

export type Task = {
    name: string;
    isDone: boolean
}

export type Tasks = Task[];

function App() {
  const [tasks, setTasks] = useState<Tasks>([]);

  useEffect(() => setTasks(fakeTasks), []);

  const handleTask = (task: Task): void => {
    if (task.name.length > 0) {
      setTasks([task, ...tasks]);
    }
  };

  return (
        <Container maxWidth="sm">
            <TaskForm
                getTask={handleTask}
            />
            <ToDoList tasks={tasks}/>
        </Container>
  );
}

export default App;
