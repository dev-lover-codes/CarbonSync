import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Card from '../../components/ui/Card';

// Card DOM structure:
//   container (RTL div)
//     └── div.bg-white/5.backdrop-blur-lg.rounded-3xl...  ← Card root (container.firstChild)
//          └── {children}
//
// Always use container.firstChild to access Card's root div for class assertions.
// screen.getByText(…).parentElement is unreliable across parallel test workers.
const getCard = (container) => container.firstChild;

describe('Card component', () => {
  // ── Rendering ─────────────────────────────────────────────────────────────
  it('renders children correctly', () => {
    render(<Card>Test Content</Card>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders multiple children', () => {
    render(
      <Card>
        <span>Child A</span>
        <span>Child B</span>
      </Card>
    );
    expect(screen.getByText('Child A')).toBeInTheDocument();
    expect(screen.getByText('Child B')).toBeInTheDocument();
  });

  // ── className prop ────────────────────────────────────────────────────────
  it('applies custom className alongside default classes', () => {
    const { container } = render(<Card className="custom-class">Content</Card>);
    expect(getCard(container).className).toContain('custom-class');
  });

  it('retains default backdrop and border classes when custom className is added', () => {
    const { container } = render(<Card className="my-extra">Content</Card>);
    const card = getCard(container);
    expect(card.className).toContain('backdrop-blur-lg');
    expect(card.className).toContain('rounded-3xl');
  });

  // ── padding prop ──────────────────────────────────────────────────────────
  it('renders with default padding p-6 when not specified', () => {
    const { container } = render(<Card>Default Padding</Card>);
    expect(getCard(container).className).toContain('p-6');
  });

  it('accepts a custom padding override', () => {
    const { container } = render(<Card padding="p-2">Small Padding</Card>);
    const card = getCard(container);
    expect(card.className).toContain('p-2');
    // should NOT contain the default p-6 when overridden
    expect(card.className).not.toContain('p-6');
  });

  it('renders an empty Card without crashing', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toBeInTheDocument();
  });

  // ── Semantic structure ────────────────────────────────────────────────────
  it('renders as a div element', () => {
    const { container } = render(<Card>structure</Card>);
    expect(getCard(container).tagName).toBe('DIV');
  });
});
