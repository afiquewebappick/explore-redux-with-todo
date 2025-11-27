import React from 'react';
import { store } from '@/app/store';
import UpdateTodo from '@/components/UpdateTodo';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

const Wrapper = ({ children }) => (
  <Provider store={store}>
    <MemoryRouter>{children}</MemoryRouter>
  </Provider>
);

describe('UpdateTodo component', () => {
  it('check update form', async () => {
    render(<UpdateTodo />, { wrapper: Wrapper });

    const textBox = screen.getByRole('textbox', {
        name: /task title/i
    });

    await userEvent.type(textBox, 'abc');

    expect(textBox).toBeInTheDocument();
    expect(textBox).toHaveValue('abc');
  });
});
