import { describe, it, expect, vi } from 'vitest'; // Remplacez jest par vi et vitest
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Store from '../store/store';
import Login from '../Pages/Login';

import axios from 'axios';

vi.mock('axios'); // Utilisez vi.mock pour moquer Axios

describe('Login Page', () => {
    it('should display an error message for invalid credentials', async () => {
        const store = Store;

        // Simuler une réponse d'erreur pour Axios
        axios.post.mockRejectedValueOnce({
            response: {
                data: { message: 'User not found!' },
            },
        });

        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );

        // Remplir le formulaire
        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'test@name.com' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } });

        // Soumettre le formulaire
        //fireEvent.click(screen.getByText(/sign in/i));
        fireEvent.click(document.querySelector('.sign-in-button'));

        // Vérifier que le message d'erreur s'affiche
        expect(await screen.findByText(/user not found/i)).toBeInTheDocument();
    });
});
