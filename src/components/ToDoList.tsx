import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {Button, ButtonGroup} from "@mui/material";
import {Task, Tasks} from "../App";
import {useEffect, useState} from "react";

export default function ToDoList({ tasks }: { tasks: Tasks }) {
    const [filter, setFilter] = useState<string>('All');
    const [checked, setChecked] = useState<number[]>([0]);

    type filterOption = {
        [key: string]: any,
    }
    const filterMap: filterOption = {
        All: () => true,
        Done: (task: Task) => task.isDone,
        inProgress: (task: Task) => !task.isDone
    };

    const handleToggle = (task: Task, index: number) => () => {
       task.isDone = !task.isDone;
            const currentIndex = checked.indexOf(index);
            const newChecked = [...checked];

        if (currentIndex === -1) {
                newChecked.push(index);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {tasks
                .filter(filterMap[filter]).map((task, index: number) => {
                const labelId = `checkbox-list-label-${index}`;

                return (
                    <ListItem
                        key={index}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <DeleteOutlinedIcon />
                            </IconButton>
                        }
                        disablePadding
                    >
                        <ListItemButton role={undefined} onClick={handleToggle(task, index)} dense>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(index) !== -1 || task.isDone !== false}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={task.name} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
            <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={() => setFilter('All')}>All</Button>
                <Button onClick={() => setFilter('Done')}>Done</Button>
                <Button onClick={() => setFilter('inProgress')}>In Progress</Button>
            </ButtonGroup>
        </List>
    );
}
