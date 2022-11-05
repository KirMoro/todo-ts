import React, {useEffect, useState} from 'react';
import TaskForm from "./components/TaskForm";
import {Button, Container} from "@mui/material";
import ToDoList from "./components/ToDoList";
import {fakeTasks} from "./__fixtures__/fakeTasks"

export type Task = {
    name: string;
    isDone: boolean
}

export type Tasks = Task[];

type State = {
    newTask: string;
    tasks: Tasks
}

const initialState: State = {
    newTask: '',
    tasks: []
}

function App() {
    const [tasks, setTasks] = useState<Tasks>([]);

    useEffect(() => setTasks(fakeTasks), [])

    const handleTask = (task: Task): void => {
        if (task.name.length > 0) {
            setTasks([task, ...tasks]);
        }
    };

    return (
        <Container maxWidth="md">
            <TaskForm
                getTask={handleTask}
            />
            <ToDoList tasks={tasks}/>

        </Container>
  );
}

export default App;
