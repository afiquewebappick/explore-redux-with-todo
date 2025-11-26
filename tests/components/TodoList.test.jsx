import React from 'react';
import { store } from '@/app/store';
import TodoList from '@/components/TodoList';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';

describe('TodoList', () => {
  it('Checking header', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <TodoList></TodoList>
        </MemoryRouter>
      </Provider>
    );

    const header = screen.getByRole('heading');
    expect(header).toBeInTheDocument();

    const editText = screen.queryByRole('button', {
        name: /edit/i
    });
    expect(editText).not.toBeInTheDocument();

    const deleteText = screen.queryByText(/delete/i);
    expect(deleteText).not.toBeInTheDocument();
  });
});
