import React from 'react';
import Navbar from '@/components/Navbar';
import {
  cleanup,
  logRoles,
  render,
  screen,
} from '@testing-library/react';
import { afterEach, describe, expect, it} from 'vitest';
import { MemoryRouter } from 'react-router';

describe('Navbar', () => {

  //  Add this to clean up after each test
  afterEach(() => {
    cleanup();
  });

  it('Text render checking', () => {
    // const view = render(
    //   <MemoryRouter>
    //     <Navbar></Navbar>
    //   </MemoryRouter>
    // );
    // logRoles(view.container);
    render(
      <MemoryRouter>
        <Navbar></Navbar>
      </MemoryRouter>
    );

    // const homeText = screen.getByText(/home/i);
    // expect(homeText).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // const homeLink = screen.getByRole('link', { name: /home/i });
    // const addListLink = screen.getByRole('link', { name: /add task/i });

    // expect(homeLink).toBeInTheDocument();
    // expect(addListLink).toBeInTheDocument();
    // expect(homeLink).toHaveAttribute('href', '/');
    // expect(addListLink).toHaveAttribute('href', '/add');
  });
});
