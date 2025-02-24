import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for additional matchers like "toBeInTheDocument"
import TaskList from './components/TaskList';  // Ensure the correct path

// Sample test for task completion
test('marks a task as completed when checkbox is clicked', () => {
  const tasks = [
    { id: 1, text: 'Finish Homework', completed: false },
    { id: 2, text: 'Read a book', completed: false },
  ];

  const mockUpdateTask = jest.fn(); // mock function for updating the task status

  // Render the component with initial props
  render(<TaskList tasks={tasks} updateTask={mockUpdateTask} />);

  // Get the checkbox element for the first task
  const checkbox = screen.getByLabelText('Finish Homework');
  expect(checkbox).not.toBeChecked(); // Assert it starts unchecked

  // Simulate clicking the checkbox
  fireEvent.click(checkbox);

  // Ensure the mockUpdateTask was called with correct arguments
  expect(mockUpdateTask).toHaveBeenCalledWith(1, true);  // ID 1 and completed status as true
});
