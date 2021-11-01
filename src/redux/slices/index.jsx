import { combineReducers } from "redux";
import authSlice from './authSlice';
import pokemonSlice from './pokemonSlice';
import geralSlice from './geralSlice';

export default combineReducers({ 
    auth: authSlice,
    pokemon: pokemonSlice,
    geral: geralSlice,
});