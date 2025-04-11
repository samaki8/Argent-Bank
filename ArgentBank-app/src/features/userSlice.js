// src/features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fonction asynchrone pour récupérer les informations utilisateur
export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, { // Le corps peut être vide -- Si vous souhaitez conserver la méthode POST pour récupérer les données utilisateur, cela va à l'encontre des bonnes pratiques RESTful. Cependant, cela peut être utilisé si vous avez besoin d'envoyer des données sensibles ou complexes dans le corps de la requête.Solution :Si vous décidez de garder POST pour cette route, modifiez votre thunk pour utiliser une requête POST :
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.body; // Retourne les données utilisateur
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Erreur lors de la récupération des informations utilisateur'
      );
    }
  }
);
// Fonction asynchrone pour mettre à jour les informations utilisateur
export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (user, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.token;
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.body; // Retourne les données utilisateur
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Erreur lors de la mise à jour des informations utilisateur');
    }
  }
);
// Fonction asynchrone pour se connecter
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', {
        email,
        password,
      });
      return response.data; // Retourne les données utilisateur et le token
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Erreur lors de la connexion');
    }
  }
);
// Fonction asynchrone pour créer un utilisateur
export const createUser = createAsyncThunk(
    'user/create',
  async ({ firstname, lastname, email, password }, thunkAPI) => {
      
        try {
          const response = await axios.post('http://localhost:3001/api/v1/user/create', {
            firstname,
            lastname,
            email,
            password,
        });
        return response.data; // Retourne les données utilisateur et le token
        } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || 'Erreur lors de la connexion');
        }
    }
);
 // Création du slice pour gérer les informations utilisateur   
const userSlice = createSlice({
    name: 'user',
    initialState:{
      user: null,
      token: null,
      error: null,
      loading: false,
    },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },  
    logoutUser(state) {
        state.user = null;
        state.token = null;
      state.error = null;
        sessionStorage.removeItem('token'); // Supprime le token du sessionStorage lors de la déconnexion
    },
     clearError: (state) => {
        state.error = null;
    }
  },
  extraReducers: (builder) => {
        builder
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.body.user;
            state.token = action.payload.body.token;
            sessionStorage.setItem('token', action.payload.body.token); // Stocke le token dans le sessionStorage
            state.error = null;
            state.loading = false;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.error = action.payload;
          state.loading = false;
        })
          .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
          .addCase(getUserProfile.fulfilled, (state, action) => {
          console.log('Reponse api brut', action.payload);
           //state.user = action.payload.body.user; // je retire .body.user
           console.log('Reponse api', action.payload.user);
           
          state.user = action.payload;
           state.loading = false;// je retire .body.user
            state.error = null;
        })
        .addCase(getUserProfile.rejected, (state, action) => {
          state.error = action.payload;
           state.loading = false;
        })
        .addCase(getUserProfile.pending, (state) => {
            state.loading = true;
        })
        .addCase(updateUserProfile.pending, (state) => {
          state.loading = true;
      })
        .addCase(updateUserProfile.fulfilled, (state, action) => {
            state.user = action.payload; // je retire .user
          state.error = null;
          state.loading = false;
        })
        .addCase(updateUserProfile.rejected, (state, action) => {
          state.error = action.payload || 'Erreur lors de la mise à jour des informations utilisateur';
          state.loading = false;
        });
    },
});

export const { logoutUser, setToken, clearError } = userSlice.actions;

 export default userSlice.reducer;
