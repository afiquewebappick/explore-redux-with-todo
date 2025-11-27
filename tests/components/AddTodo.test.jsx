import React from 'react';
import AddTodo from '@/components/AddTodo';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';

describe('Add Todo components', () => {
  it('All element renders correctly', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddTodo></AddTodo>
        </MemoryRouter>
      </Provider>
    );

    const textBox = screen.getByRole('textbox', { name: 'Task Title' });
    await userEvent.type(textBox, 'abc');

    expect(textBox).toBeInTheDocument();
    expect(textBox).toHaveValue('abc');

    const textBoxCnt = screen.getAllByRole('textbox');
    expect(textBoxCnt).toHaveLength(2);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it('Test for label text', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddTodo></AddTodo>
        </MemoryRouter>
      </Provider>
    );

    const titleLabel = screen.getByLabelText(/task title/i);
    expect(titleLabel).toBeInTheDocument();

    const descriptionLabel = screen.getByLabelText(/task description/i);
    expect(descriptionLabel).toBeInTheDocument();
  });
});
