import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignupPage from './registerPage';
import api from '../api/axiosInstance';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../api/axiosInstance');
jest.mock('lucide-react', () => ({
  __esModule: true,
  User: () => <div data-testid="user-icon" />,  
  Mail: () => <div data-testid="mail-icon" />,  
  Lock: () => <div data-testid="lock-icon" />,  
  Loader2: () => <div data-testid="loader2" />,  
  Eye: () => <div data-testid="eye-icon" />,  
  EyeClosed: () => <div data-testid="eye-closed-icon" />,  
}));
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('<SignupPage />', () => {
  beforeEach(() => {
    api.post.mockClear();
    mockNavigate.mockClear();
  });

  it('shows validation errors on empty submit', async () => {
    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /s'inscrire/i }));

    expect(await screen.findByText(/Vous avez oublié votre nom d'utilisateur/)).toBeInTheDocument();
    expect(screen.getByText(/Adresse email invalide|Vous avez oublié votre email/)).toBeInTheDocument();
    expect(screen.getByText(/Veuillez entrer votre mot de passe/)).toBeInTheDocument();
  });

  it('submits valid data and navigates', async () => {
    const data = {
      userName: 'foo',
      email: 'foo@example.com',
      password: 'Password1',
      confirmPassword: 'Password1',
    };
    api.post.mockResolvedValueOnce({});

    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Nom d'utilisateur/), { target: { value: data.userName } });
    fireEvent.change(screen.getByPlaceholderText(/Email/), { target: { value: data.email } });
    fireEvent.change(screen.getByPlaceholderText(/Mot de passe/), { target: { value: data.password } });
    fireEvent.change(screen.getByPlaceholderText(/Confirmer mot de passe/), { target: { value: data.confirmPassword } });
    fireEvent.click(screen.getByRole('button', { name: /s'inscrire/i }));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/auth/register', data);
      expect(mockNavigate).toHaveBeenCalledWith('/login');
    });
  });

  it('displays global error on unexpected failure', async () => {
    const error = new Error('Network');
    api.post.mockRejectedValueOnce(error);

    render(
      <MemoryRouter>
        <SignupPage />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Nom d'utilisateur/), { target: { value: 'foo' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/), { target: { value: 'foo@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Mot de passe/), { target: { value: 'Password1' } });
    fireEvent.change(screen.getByPlaceholderText(/Confirmer mot de passe/), { target: { value: 'Password1' } });
    fireEvent.click(screen.getByRole('button', { name: /s'inscrire/i }));

    expect(await screen.findByText(/Une erreur inattendue est survenue/)).toBeInTheDocument();
  });
});
