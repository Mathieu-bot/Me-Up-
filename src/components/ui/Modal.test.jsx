import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from './Modal';
import { MemoryRouter } from 'react-router-dom';

// Mock useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');
  return {
    ...actual,
    MemoryRouter: actual.MemoryRouter,
    useNavigate: () => mockNavigate,
  };
});

describe('Modal component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders its children inside a dialog', () => {
    render(
      <MemoryRouter>
        <Modal>
          <div data-testid="child">Hello Modal</div>
        </Modal>
      </MemoryRouter>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    // role dialog is present
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes when clicking on the backdrop', () => {
    render(
      <MemoryRouter>
        <Modal><div>Inner</div></Modal>
      </MemoryRouter>
    );
    const backdrop = screen.getByTestId('modal-backdrop');
    fireEvent.click(backdrop);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('does not close when clicking inside the content', () => {
    render(
      <MemoryRouter>
        <Modal><button data-testid="inner-button">Click me</button></Modal>
      </MemoryRouter>
    );
    const button = screen.getByTestId('inner-button');
    fireEvent.click(button);
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('closes when pressing Escape key', () => {
    render(
      <MemoryRouter>
        <Modal><div>Test Escape</div></Modal>
      </MemoryRouter>
    );
    fireEvent.keyDown(document, { key: 'Escape', code: 'Escape' });
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
