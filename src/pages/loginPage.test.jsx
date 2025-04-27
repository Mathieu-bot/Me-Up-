import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './loginPage';
import api from '../api/axiosInstance';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../api/axiosInstance');
jest.mock('lucide-react', () => ({
  __esModule: true,
  Mail: () => <svg data-testid="mail-icon" />,
  Lock: () => <svg data-testid="lock-icon" />,
  Smile: () => <svg data-testid="smile-icon" />,
  Loader2: () => <svg data-testid="loader2-icon" />,
  Eye: () => <svg data-testid="eye-icon" />,
  EyeClosed: () => <svg data-testid="eye-closed-icon" />,
}));
jest.mock('react-icons/fc', () => ({
  __esModule: true,
  FcGoogle: () => <svg data-testid="google-icon" />,
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('<LoginPage />', () => {
  beforeEach(() => {
    api.post.mockClear();
    mockNavigate.mockClear();
  });

  it('shows validation errors on empty submit', async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /^Se connecter$/i }));

    expect(await screen.findByText(/Adresse email requise/)).toBeInTheDocument();
    expect(screen.getByText(/Veuillez entrer votre mot de passe/)).toBeInTheDocument();
  });

  it('submits valid data and navigates', async () => {
    const data = { email: 'foo@example.com', password: 'Password1', remember: false };
    api.post.mockResolvedValueOnce({});
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Email/), { target: { value: data.email } });
    fireEvent.change(screen.getByPlaceholderText(/Mot de passe/), { target: { value: data.password } });
    fireEvent.click(screen.getByRole('button', { name: /^Se connecter$/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/auth/login', data);
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('displays global error on unexpected failure', async () => {
    const error = new Error('Network');
    api.post.mockRejectedValueOnce(error);

    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Email/), { target: { value: 'foo@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Mot de passe/), { target: { value: 'Password1' } });
    fireEvent.click(screen.getByRole('button', { name: /^Se connecter$/i }));

    // Assert ErrorPopup displays global error
    const popup = await screen.findByTestId('error-popup');
    expect(popup).toHaveTextContent(/Une erreur inattendue/);
  });

  it('sends remember flag when checkbox checked', async () => {
    const data = { email: 'foo@example.com', password: 'Password1' };
    api.post.mockResolvedValueOnce({});
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText(/Email/), { target: { value: data.email } });
    fireEvent.change(screen.getByPlaceholderText(/Mot de passe/), { target: { value: data.password } });
    fireEvent.click(screen.getByLabelText(/Se souvenir de moi/i));
    fireEvent.click(screen.getByRole('button', { name: /^Se connecter$/i }));
    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/auth/login', { email: data.email, password: data.password, remember: true });
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });
});
