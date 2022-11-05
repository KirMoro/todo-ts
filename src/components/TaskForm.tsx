import TextField from '@mui/material/TextField';
import {Button, Container, Typography} from "@mui/material";
import React, {useState} from "react";
import {Task} from "../App";
import IconButton from '@mui/material/IconButton';
import DirectionsIcon from '@mui/icons-material/Directions';


const TaskForm = ({ getTask }: { getTask: (task: Task) => void }) => {

    const [value, setValue] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getTask({ name: value, isDone: false });
        setValue('');
    }

    return (
            <form onSubmit={handleSubmit}>
                <Typography variant="h1" gutterBottom>
                    ToDo
                </Typography>
                <Container>
                    <TextField
                        id="task"
                        variant="outlined"
                        label="Task field"
                        type="task"
                        name="name"
                        onChange={handleChange}
                        value={value}
                    />
                    <IconButton color="primary" sx={{ p: '15px' }} aria-label="directions">
                        <DirectionsIcon />
                    </IconButton>
                    <Button type="submit">Add</Button>
                </Container>
            </form>
    );
}

export default TaskForm;
