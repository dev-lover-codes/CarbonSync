import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Badge from '../../components/ui/Badge';

describe('Badge component', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────
  it('renders children text', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    render(<Badge>Label</Badge>);
    expect(screen.getByText('Label').tagName).toBe('SPAN');
  });

  // ── Default variant (gray) ────────────────────────────────────────────────
  it('applies gray variant classes by default', () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText('Default');
    expect(badge.className).toContain('bg-gray-100');
    expect(badge.className).toContain('text-gray-700');
  });

  // ── Named variants ────────────────────────────────────────────────────────
  it('applies green variant classes when variant="green"', () => {
    render(<Badge variant="green">Success</Badge>);
    const badge = screen.getByText('Success');
    expect(badge.className).toContain('text-primary-dark');
  });

  it('applies amber variant classes when variant="amber"', () => {
    render(<Badge variant="amber">Warning</Badge>);
    const badge = screen.getByText('Warning');
    expect(badge.className).toContain('bg-amber-100');
    expect(badge.className).toContain('text-amber-800');
  });

  it('applies blue variant classes when variant="blue"', () => {
    render(<Badge variant="blue">Info</Badge>);
    const badge = screen.getByText('Info');
    expect(badge.className).toContain('text-sky-dark');
  });

  it('applies red variant classes when variant="red"', () => {
    render(<Badge variant="red">Error</Badge>);
    const badge = screen.getByText('Error');
    expect(badge.className).toContain('bg-red-100');
    expect(badge.className).toContain('text-red-800');
  });

  // ── className prop ────────────────────────────────────────────────────────
  it('merges custom className with variant classes', () => {
    render(<Badge className="ml-2">Extra</Badge>);
    const badge = screen.getByText('Extra');
    expect(badge.className).toContain('ml-2');
    // default variant classes still present
    expect(badge.className).toContain('bg-gray-100');
  });

  // ── Base styles always present ────────────────────────────────────────────
  it('always contains base pill styles', () => {
    render(<Badge>Pill</Badge>);
    const badge = screen.getByText('Pill');
    expect(badge.className).toContain('rounded-full');
    expect(badge.className).toContain('inline-flex');
    expect(badge.className).toContain('font-bold');
  });

  // ── Edge cases ────────────────────────────────────────────────────────────
  it('renders numeric children without crashing', () => {
    render(<Badge>{42}</Badge>);
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('renders with empty string children', () => {
    const { container } = render(<Badge>{''}</Badge>);
    expect(container.firstChild).toBeInTheDocument();
  });
});
