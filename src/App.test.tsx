import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import TaskForm from './components/TaskForm';

test('Renders Task Label', () => {
  render(<App />);
  const linkElement = screen.getByText('Покрыть тестами');
  expect(linkElement).toBeInTheDocument();
});

test('add new task in form', () => {
  const getTask = jest.fn();
  render(<TaskForm getTask={getTask}/>);

  TaskForm.value = 'new task';

  expect(TaskForm.value === 'new task');
});

test('Button works', async () => {
  const { findByText } = render(<App />);
  const addButton = await findByText('Add');

  fireEvent.click(addButton);
});
