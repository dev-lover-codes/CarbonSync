import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';

function Bomb() {
  throw new Error('test crash');
}

describe('ErrorBoundary', () => {
  it('renders fallback UI instead of crashing', () => {
    // Suppress React error logging in console during this intentional crash test
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    );

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();

    consoleSpy.mockRestore();
  });
});
