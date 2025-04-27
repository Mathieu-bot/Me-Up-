import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ResetPasswordPage from './resetPasswordPage';
import api from '../api/axiosInstance';
import { toast } from 'react-toastify';

const mockNavigate = jest.fn();
const mockUseSearchParams = jest.fn();

// Mocks
jest.mock('../api/axiosInstance');
jest.mock('react-toastify', () => ({ toast: { success: jest.fn() } }));
jest.mock('lucide-react', () => ({
  __esModule: true,
  Lock: () => <svg data-testid="lock-icon" />,
  Loader2: () => <svg data-testid="loader2-icon" />,
  Eye: () => <svg data-testid="eye-icon" />,
  EyeClosed: () => <svg data-testid="eye-closed-icon" />,
}));
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useSearchParams: () => mockUseSearchParams(),
}));

describe('<ResetPasswordPage />', () => {
  beforeEach(() => {
    api.post.mockClear();
    mockNavigate.mockClear();
    toast.success.mockClear();
  });

  it('shows expired view when no token', () => {
    mockUseSearchParams.mockReturnValue([{ get: () => null }, () => {}]);
    render(<ResetPasswordPage />);
    expect(screen.getByText(/Le lien de réinitialisation est expiré/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Renvoyer un mail/i }));
    expect(mockNavigate).toHaveBeenCalledWith('/forgot-password');
  });

  it('shows validation errors on empty submit', async () => {
    mockUseSearchParams.mockReturnValue([{ get: () => 'token123' }, () => {}]);
    render(<ResetPasswordPage />);
    fireEvent.click(screen.getByRole('button', { name: /^Réinitialiser$/i }));

    expect(await screen.findByText(/Veuillez entrer un mot de passe/)).toBeInTheDocument();
    expect(screen.getByText(/Veuillez confirmer votre mot de passe/)).toBeInTheDocument();
  });

  it('submits valid data and navigates on success', async () => {
    mockUseSearchParams.mockReturnValue([{ get: () => 'token123' }, () => {}]);
    api.post.mockResolvedValueOnce({});
    render(<ResetPasswordPage />);

    fireEvent.change(screen.getByPlaceholderText(/Nouveau mot de passe/), { target: { value: 'Password1' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirmer mot de passe/), { target: { value: 'Password1' } });
    fireEvent.click(screen.getByRole('button', { name: /^Réinitialiser$/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/auth/reset-password', { password: 'Password1', token: 'token123' });
      expect(toast.success).toHaveBeenCalledWith('Mot de passe réinitialisé avec succès !');
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
  });

  it('shows expired on API error with expired message', async () => {
    mockUseSearchParams.mockReturnValue([{ get: () => 'token123' }, () => {}]);
    const error = { response: { data: { message: 'Le token est expiré' } } };
    api.post.mockRejectedValueOnce(error);
    render(<ResetPasswordPage />);

    fireEvent.change(screen.getByPlaceholderText(/Nouveau mot de passe/), { target: { value: 'Password1' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirmer mot de passe/), { target: { value: 'Password1' } });
    fireEvent.click(screen.getByRole('button', { name: /^Réinitialiser$/i }));

    expect(await screen.findByText(/Le lien de réinitialisation est expiré/)).toBeInTheDocument();
  });

  it('shows error message on generic API failure', async () => {
    mockUseSearchParams.mockReturnValue([{ get: () => 'token123' }, () => {}]);
    const error = { response: { data: { message: 'Some error occurred' } } };
    api.post.mockRejectedValueOnce(error);
    render(<ResetPasswordPage />);

    fireEvent.change(screen.getByPlaceholderText(/Nouveau mot de passe/), { target: { value: 'Password1' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirmer mot de passe/), { target: { value: 'Password1' } });
    fireEvent.click(screen.getByRole('button', { name: /^Réinitialiser$/i }));

    expect(await screen.findByText(/Some error occurred/)).toBeInTheDocument();
  });
});
