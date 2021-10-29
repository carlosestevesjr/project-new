import { combineReducers } from "redux";
import authSlice from './authSlice';
import pokemonSlice from './pokemonSlice';

export default combineReducers({ 
    auth: authSlice,
    pokemon: pokemonSlice,
});