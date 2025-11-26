import React from 'react';
import Navbar from '@/components/Navbar';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router';

describe('Navbar', () => {
  it('Text render checking', () => {
    render(
      <MemoryRouter>
        <Navbar></Navbar>
      </MemoryRouter>
    );

    const homeText = screen.getByText(/home/i);
    expect(homeText).toBeInTheDocument();
  });
});
