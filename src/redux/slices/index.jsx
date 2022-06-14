import { combineReducers } from "redux";
import authSlice from './authSlice';
import pokemonSlice from './pokemonSlice';
import newsSlice from './newsSlice';
import channelsSlice from './channelsSlice';
import tagsSlice from './tagsSlice';
import geralSlice from './geralSlice';
import geralPersistSlice from './geralPersistSlice';

export default combineReducers({ 
    auth: authSlice,
    pokemon: pokemonSlice,
    news: newsSlice,
    channels: channelsSlice,
    tags: tagsSlice,
    geral: geralSlice,
    geral_persist: geralPersistSlice,
});