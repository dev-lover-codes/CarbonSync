import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Spinner from '../../components/ui/Spinner';

// Spinner renders:
//   <div class="flex justify-center items-center ...">   ← outer (div > div from RTL root)
//     <div class="h-8 w-8 animate-spin ...">            ← inner spinner ring
//   </div>
// container.querySelector('div > div') → outer wrapper
// container.querySelector('div > div > div') → inner ring
const getInner = (container) => container.querySelector('div > div > div');

describe('Spinner component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies md size classes by default', () => {
    const { container } = render(<Spinner />);
    const inner = getInner(container);
    expect(inner.className).toContain('h-8');
    expect(inner.className).toContain('w-8');
  });

  it('applies sm size classes', () => {
    const { container } = render(<Spinner size="sm" />);
    const inner = getInner(container);
    expect(inner.className).toContain('h-4');
    expect(inner.className).toContain('w-4');
  });

  it('applies lg size classes', () => {
    const { container } = render(<Spinner size="lg" />);
    const inner = getInner(container);
    expect(inner.className).toContain('h-12');
    expect(inner.className).toContain('w-12');
  });

  it('always includes animate-spin class', () => {
    const { container } = render(<Spinner />);
    const inner = getInner(container);
    expect(inner.className).toContain('animate-spin');
  });

  it('merges custom className on outer wrapper', () => {
    const { container } = render(<Spinner className="my-spinner" />);
    expect(container.firstChild.className).toContain('my-spinner');
  });

  it('outer wrapper is centered with flex', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild.className).toContain('flex');
    expect(container.firstChild.className).toContain('justify-center');
    expect(container.firstChild.className).toContain('items-center');
  });
});
