import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ForgotPasswordPage from './forgotPasswordPage';
import api from '../api/axiosInstance';

jest.mock('../api/axiosInstance');
jest.mock('lucide-react', () => ({
  __esModule: true,
  Loader2: () => <svg data-testid="loader2-icon" />,
}));

describe('<ForgotPasswordPage />', () => {
  beforeEach(() => {
    api.post.mockClear();
  });

  it('shows validation error on empty submit', async () => {
    render(<ForgotPasswordPage />);
    fireEvent.click(screen.getByRole('button', { name: /^Envoyer le lien$/i }));

    expect(await screen.findByText(/Veuillez entrer une adresse email valide/)).toBeInTheDocument();
  });

  it('shows validation error on invalid email', async () => {
    render(<ForgotPasswordPage />);
    fireEvent.change(screen.getByPlaceholderText(/Votre email/), { target: { value: 'foo' } });
    fireEvent.click(screen.getByRole('button', { name: /^Envoyer le lien$/i }));

    expect(await screen.findByText(/Adresse email invalide/)).toBeInTheDocument();
  });

  it('submits valid email and shows success message', async () => {
    api.post.mockResolvedValueOnce({});
    render(<ForgotPasswordPage />);
    const input = screen.getByPlaceholderText(/Votre email/);
    fireEvent.change(input, { target: { value: 'foo@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /^Envoyer le lien$/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/auth/forgot-password', { email: 'foo@example.com' });
    });
    expect(await screen.findByText(/vous recevrez un lien de réinitialisation/)).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  it('displays error message on API failure', async () => {
    api.post.mockRejectedValueOnce(new Error('Network'));
    render(<ForgotPasswordPage />);
    fireEvent.change(screen.getByPlaceholderText(/Votre email/), { target: { value: 'foo@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /^Envoyer le lien$/i }));

    expect(await screen.findByText(/Une erreur est survenue\. Veuillez réessayer\./)).toBeInTheDocument();
  });
});
