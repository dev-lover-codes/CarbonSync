import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

// framer-motion uses ResizeObserver & requestAnimationFrame which aren't
// available in jsdom. Provide a lightweight mock so motion.div just renders
// a plain <div> with its children, allowing us to test ProgressBar logic.
vi.mock('framer-motion', () => {
  const MotionDiv = React.forwardRef(({ children, className, style, ...rest }, ref) =>
    React.createElement('div', { ref, className, style, ...rest }, children)
  );
  MotionDiv.displayName = 'MotionDiv';
  return {
    motion: { div: MotionDiv },
    AnimatePresence: ({ children }) => children,
  };
});

import ProgressBar from '../../components/ui/ProgressBar';

// Rendered DOM structure (querySelectorAll('div') from container, depth-first):
//   [0] div.w-full                       ← ProgressBar outer wrapper
//   [1] div.flex.justify-between...      ← label row
//   [2] div.h-2.5.w-full...${className}  ← track  (className prop lands here)
//   [3] div.h-full.rounded-full...       ← motion.div bar (color class here)
const getBar = (container) => container.querySelectorAll('div')[3];
const getTrack = (container) => container.querySelectorAll('div')[2];

describe('ProgressBar component', () => {
  // ── Basic rendering ───────────────────────────────────────────────────────
  it('renders without crashing', () => {
    const { container } = render(<ProgressBar value={50} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  // ── Percentage calculation via value/max ──────────────────────────────────
  it('calculates percentage as Math.round(value/max * 100)', () => {
    render(<ProgressBar value={1} max={3} showLabel />);
    expect(screen.getByText('33%')).toBeInTheDocument();
  });

  it('caps percentage at 100 when value > max', () => {
    render(<ProgressBar value={200} max={100} showLabel />);
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('defaults max to 100', () => {
    render(<ProgressBar value={75} showLabel />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  // ── Direct progress prop takes precedence ─────────────────────────────────
  it('uses progress prop directly when provided', () => {
    render(<ProgressBar progress={42} showLabel />);
    expect(screen.getByText('42%')).toBeInTheDocument();
  });

  it('uses progress=0 correctly', () => {
    render(<ProgressBar progress={0} showLabel />);
    expect(screen.getByText('0%')).toBeInTheDocument();
  });

  // ── showLabel toggle ──────────────────────────────────────────────────────
  it('hides the label by default', () => {
    const { container } = render(<ProgressBar value={50} />);
    expect(container.querySelector('span')).not.toBeInTheDocument();
  });

  it('shows the label when showLabel is true', () => {
    render(<ProgressBar value={50} showLabel />);
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  // ── Variant colour classes (on the animated bar div, index [3]) ───────────
  it('applies green variant class by default', () => {
    const { container } = render(<ProgressBar value={50} />);
    expect(getBar(container).className).toContain('bg-primary');
  });

  it('applies amber variant class', () => {
    const { container } = render(<ProgressBar value={50} variant="amber" />);
    expect(getBar(container).className).toContain('bg-amber-500');
  });

  it('applies red variant class', () => {
    const { container } = render(<ProgressBar value={50} variant="red" />);
    expect(getBar(container).className).toContain('bg-red-500');
  });

  // ── Custom color override ─────────────────────────────────────────────────
  it('uses custom color class when color prop is provided', () => {
    const { container } = render(<ProgressBar value={50} color="bg-purple-500" />);
    expect(getBar(container).className).toContain('bg-purple-500');
  });

  // ── className passthrough (on the track div, index [2]) ───────────────────
  it('merges custom className on track element', () => {
    const { container } = render(<ProgressBar value={50} className="my-track" />);
    expect(getTrack(container).className).toContain('my-track');
  });
});
