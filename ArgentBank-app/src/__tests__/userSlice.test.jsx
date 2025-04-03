//Test unitaire pour le reducer logoutUser


import { describe, it, expect } from 'vitest'; // Remplacez jest par vitest

import userReducer, { logoutUser } from '../features/userSlice';

describe('userSlice', () => {
    it('should reset the user state on logout', () => {
        const initialState = {
            user: { firstName: 'Tony', lastName: 'Stark' },
            token: '12345',
            error: null,
            loading: false,
        };

        const newState = userReducer(initialState, logoutUser());

        expect(newState).toEqual({
            user: null,
            token: null,
            error: null,
            loading: false,
        });
    });
});
