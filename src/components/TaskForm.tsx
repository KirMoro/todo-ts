import TextField from '@mui/material/TextField';
import { Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Task } from '../App';

const TaskForm = ({ getTask }: { getTask: (task: Task) => void }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getTask({ name: value, isDone: false });
    setValue('');
  };

  return (
            <form onSubmit={handleSubmit}>
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ p: '10px' }}
                >
                    ToDo
                </Typography>
                <Container>
                    <TextField
                        id="task"
                        variant="outlined"
                        label="Task field"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={value}
                        autoFocus
                        placeholder="New task"
                        size="small"
                    />
                    <Button type="submit" sx={{ p: '7px' }}>Add</Button>
                </Container>
            </form>
  );
};

export default TaskForm;
