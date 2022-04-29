import { combineReducers } from "redux";
import authSlice from './authSlice';
import pokemonSlice from './pokemonSlice';
import newsSlice from './newsSlice';
import newsChannelSlice from './newsChannelSlice';
import newsTagSlice from './newsTagSlice';
import channelsSlice from './channelsSlice';
import tagsSlice from './tagsSlice';
import geralSlice from './geralSlice';

export default combineReducers({ 
    auth: authSlice,
    pokemon: pokemonSlice,
    news: newsSlice,
    news_channel: newsChannelSlice,
    channels: channelsSlice,
    tags: tagsSlice,
    news_tag: newsTagSlice,
    geral: geralSlice,
});