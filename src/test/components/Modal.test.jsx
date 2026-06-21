import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

// framer-motion mock — render motion.div as a plain div in jsdom
vi.mock('framer-motion', () => ({
  motion: {
    div: React.forwardRef(({ children, className, onClick, ...rest }, ref) =>
      React.createElement('div', { ref, className, onClick, ...rest }, children)
    ),
  },
  AnimatePresence: ({ children }) => children,
}));

// lucide-react X icon mock
vi.mock('lucide-react', () => ({
  X: ({ size, className }) =>
    React.createElement('span', { className, 'data-testid': 'close-icon' }, '✕'),
}));

import Modal from '../../components/ui/Modal';

describe('Modal component', () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    title: 'Test Modal',
  };

  // ── Conditional rendering ─────────────────────────────────────────────────
  it('renders nothing when isOpen is false', () => {
    const { container } = render(
      <Modal {...defaultProps} isOpen={false}>
        Hidden
      </Modal>
    );
    expect(container.firstChild).toBeNull();
  });

  it('renders the modal when isOpen is true', () => {
    render(<Modal {...defaultProps}>Content</Modal>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  // ── Title and children ────────────────────────────────────────────────────
  it('displays the title', () => {
    render(<Modal {...defaultProps}>Body</Modal>);
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });

  it('renders children inside the modal', () => {
    render(<Modal {...defaultProps}>Hello World</Modal>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  // ── Accessibility ─────────────────────────────────────────────────────────
  it('has role="dialog"', () => {
    render(<Modal {...defaultProps}>a</Modal>);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('has aria-modal="true"', () => {
    render(<Modal {...defaultProps}>a</Modal>);
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-modal', 'true');
  });

  it('has aria-labelledby="modal-title"', () => {
    render(<Modal {...defaultProps}>a</Modal>);
    expect(screen.getByRole('dialog')).toHaveAttribute(
      'aria-labelledby',
      'modal-title'
    );
  });

  // ── Close interactions ────────────────────────────────────────────────────
  it('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} title="Close test">
        Body
      </Modal>
    );
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape key is pressed', () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} title="Esc test">
        Body
      </Modal>
    );
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on Escape when modal is closed', () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen={false} onClose={onClose} title="Closed">
        Body
      </Modal>
    );
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).not.toHaveBeenCalled();
  });
});
