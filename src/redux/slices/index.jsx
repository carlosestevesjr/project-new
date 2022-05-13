import { combineReducers } from "redux";
import authSlice from './authSlice';
import pokemonSlice from './pokemonSlice';
import newsSlice from './newsSlice';
import newsChannelSlice from './newsChannelSlice';
import newsTagSlice from './newsTagSlice';
import searchNewsSlice from './searchNewsSlice';
import channelsSlice from './channelsSlice';
import tagsSlice from './tagsSlice';
import geralSlice from './geralSlice';
import geralPersistSlice from './geralPersistSlice';

export default combineReducers({ 
    auth: authSlice,
    pokemon: pokemonSlice,
    news: newsSlice,
    news_channel: newsChannelSlice,
    channels: channelsSlice,
    tags: tagsSlice,
    news_tag: newsTagSlice,
    search_news: searchNewsSlice,
    geral: geralSlice,
    geral_persist: geralPersistSlice,
});