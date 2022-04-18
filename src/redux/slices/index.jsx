import { combineReducers } from "redux";
import authSlice from './authSlice';
import pokemonSlice from './pokemonSlice';
import newsSlice from './newsSlice';
import newsChannelSlice from './newsChannelSlice';
import channelsSlice from './channelsSlice';
import geralSlice from './geralSlice';

export default combineReducers({ 
    auth: authSlice,
    pokemon: pokemonSlice,
    news: newsSlice,
    news_channel: newsChannelSlice,
    channels: channelsSlice,
    geral: geralSlice,
});