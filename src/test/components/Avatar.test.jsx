import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Avatar from '../../components/ui/Avatar';

// Avatar DOM structure:
//   container (RTL div)
//     └── div.relative.inline-block          ← outer wrapper
//          └── div.h-12.w-12.rounded-full…   ← the coloured circle (has size + ring classes)
//               └── text "JD"
//
// container.querySelector('div > div')       → outer (relative inline-block)
// container.querySelector('div > div > div') → inner circle (has size/ring classes)
const getInner = (container) => container.querySelector('div > div > div');

describe('Avatar component', () => {
  // ── Initials derivation ───────────────────────────────────────────────────
  it('shows first letter of a single-word name', () => {
    render(<Avatar name="Alice" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('shows two initials for a two-word name', () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('capitalises initials', () => {
    render(<Avatar name="alice bob" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('shows ? when name is empty string', () => {
    render(<Avatar name="" />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('shows ? when name is undefined', () => {
    render(<Avatar />);
    expect(screen.getByText('?')).toBeInTheDocument();
  });

  it('truncates to two characters for very long names', () => {
    render(<Avatar name="Albert Benjamin Charles" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  // ── Size variants ─────────────────────────────────────────────────────────
  it('applies md size by default', () => {
    const { container } = render(<Avatar name="Test" />);
    const inner = getInner(container);
    expect(inner.className).toContain('h-12');
    expect(inner.className).toContain('w-12');
  });

  it('applies sm size classes', () => {
    const { container } = render(<Avatar name="Test" size="sm" />);
    const inner = getInner(container);
    expect(inner.className).toContain('h-8');
    expect(inner.className).toContain('w-8');
  });

  it('applies lg size classes', () => {
    const { container } = render(<Avatar name="Test" size="lg" />);
    const inner = getInner(container);
    expect(inner.className).toContain('h-16');
    expect(inner.className).toContain('w-16');
  });

  // ── Level ring colours ────────────────────────────────────────────────────
  it('applies Seedling ring colour', () => {
    const { container } = render(<Avatar name="A" level="Seedling" />);
    expect(getInner(container).className).toContain('ring-green-300');
  });

  it('applies Tree ring colour', () => {
    const { container } = render(<Avatar name="A" level="Tree" />);
    expect(getInner(container).className).toContain('ring-green-600');
  });

  it('falls back to default ring for unknown level', () => {
    const { container } = render(<Avatar name="A" level="Unknown" />);
    expect(getInner(container).className).toContain('ring-primary-light');
  });
});
