<<<<<<< HEAD
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
=======
import { render, screen } from '@testing-library/react';
>>>>>>> main
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('test that App component renders', () => {
  render(<App />, container);
<<<<<<< HEAD
});
=======
 });
>>>>>>> main

test('test that new-item-button is a button', () => {
  render(<App/>, container);
  const element = screen.getByTestId('new-item-button');
  expect(element).toBeInTheDocument();
});

test('test that new-item-textfield is an textfield ', () => {
  render(<App/>, container);
  const element = screen.getByTestId('new-item-textfield');
  expect(element).toBeInTheDocument();
});
<<<<<<< HEAD

test('renders Todos component with empty todo list', () => {
  render(<App />, container);
  expect(screen.getByText("You have no todo's left")).toBeInTheDocument();
});

test('test that App component doesn\'t add a blank task', () => {
  render(<App />, container);
  const addButton = screen.getByTestId('new-item-button');

  fireEvent.click(addButton);

  const check = screen.getByText(/You have no todo's left/i);
  expect(check).toBeInTheDocument();
});


test('test that App component renders Task', () => {
  render(<App />, container);
  const taskInput = screen.getByTestId("new-item-textfield");
  const addButton = screen.getByTestId('new-item-button');

  fireEvent.change(taskInput.querySelector('input'), { target: { value: 'History Test' } });

  waitFor(() => {
    expect(taskInput.value).toBe("History Test");
  });

  fireEvent.click(addButton);

  waitFor(() => {
    const taskTextElement = screen.getByText(/History Test/i);
    expect(taskTextElement).toBeInTheDocument();
  });
});

test('test that App component renders Task', () => {
  render(<App />, container);
  const taskInput = screen.getByTestId("new-item-textfield");
  const addButton = screen.getByTestId('new-item-button');

  fireEvent.change(taskInput.querySelector('input'), { target: { value: 'History Test' } });

  waitFor(() => {
    expect(taskInput.value).toBe("History Test");
  });

  fireEvent.click(addButton);

  waitFor(() => {
    const taskTextElement = screen.getAllByText(/History Test/i);
    expect(taskTextElement.length).toBe(1);
  });
});
=======
>>>>>>> main
