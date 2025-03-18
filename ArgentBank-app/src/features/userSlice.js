// src/features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Fonction asynchrone pour récupérer les informations utilisateur
export const getUserProfile= createAsyncThunk(
  'user/getUserProfile',
  async (thunkAPI) => {
      try {
        const token= thunkAPI.getState().auth.token; // je retire l'appel token depuis asyn
      const response = await axios.get('http://localhost:3001/api/v1/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.body; // Retourne les données utilisateur
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Erreur lors de la récupération des informations utilisateur');
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (user, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
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
/*
export const asyncLogoutUser = () => {
    return async (dispatch) => {
        dispatch
    }
}
    */
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
    
const initialState = {
  user: null,
  token: null,
  error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser(state) {
        state.user = null;
        state.token = null;
        state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.body.user;
            state.token = action.payload.body.token;
            state.error = null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(getUserProfile.fulfilled, (state, action) => {
            state.user = action.payload; // je retire .user
            state.error = null;
        })
        .addCase(getUserProfile.rejected, (state, action) => {
            state.error = action.payload;
        })
        .addCase(updateUserProfile.fulfilled, (state, action) => {
            state.user = action.payload; // je retire .user
            state.error = null;
        })
        .addCase(updateUserProfile.rejected, (state, action) => {
            state.error = action.payload;
        });
    },
});
export const { logoutUser } = userSlice.actions;
 export default userSlice.reducer;
