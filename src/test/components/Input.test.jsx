import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Input from '../../components/ui/Input';

describe('Input component', () => {
  // ── Basic rendering ───────────────────────────────────────────────────────
  it('renders an <input> element', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders with a placeholder', () => {
    render(<Input placeholder="Enter email" />);
    expect(screen.getByPlaceholderText('Enter email')).toBeInTheDocument();
  });

  // ── Label ─────────────────────────────────────────────────────────────────
  it('renders a label when label prop is provided', () => {
    render(<Input label="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('associates label with input via htmlFor', () => {
    render(<Input label="Username" id="username-field" />);
    const label = screen.getByText('Username');
    expect(label).toHaveAttribute('for', 'username-field');
  });

  it('does not render label when label prop is omitted', () => {
    const { container } = render(<Input />);
    expect(container.querySelector('label')).not.toBeInTheDocument();
  });

  // ── Error state ───────────────────────────────────────────────────────────
  it('renders error message when error prop is provided', () => {
    render(<Input error="This field is required" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('sets aria-invalid to true when error is provided', () => {
    render(<Input error="Bad input" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('sets aria-invalid to false when no error', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false');
  });

  it('applies error styling when error is set', () => {
    render(<Input error="Oops" />);
    const input = screen.getByRole('textbox');
    expect(input.className).toContain('border-red-300');
  });

  it('does not render error span when error prop is absent', () => {
    const { container } = render(<Input />);
    expect(container.querySelector('[id$="-error"]')).not.toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────
  it('sets aria-required when required prop is passed', () => {
    render(<Input required />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true');
  });

  it('sets aria-describedby pointing to error span when error exists', () => {
    render(<Input id="test-input" error="Required" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-describedby', 'test-input-error');
  });

  // ── Input type passthrough ────────────────────────────────────────────────
  it('accepts type prop for password fields', () => {
    render(<Input type="password" />);
    const input = document.querySelector('input[type="password"]');
    expect(input).toBeInTheDocument();
  });

  // ── className passthrough ─────────────────────────────────────────────────
  it('passes className to the outer wrapper', () => {
    const { container } = render(<Input className="mb-4" />);
    expect(container.firstChild.className).toContain('mb-4');
  });
});
