import { createSlice } from '@reduxjs/toolkit'

import { API }   from '../../services/api'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        single: {},
        message: "",
    },
    reducers: {
        salvaPokemonSingle: (state, action) => {
            // console.log('action', action)
            state.single = action.payload
           
        },
    },
});

export const { 
    salvaPokemonSingle, 
} = pokemonSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const buscaPokemon = payload => async(dispatch) => {
     
    try {
        const { buscaPokemon }  = API
        const res = await buscaPokemon(payload)

        // console.log('resposta', res.data.name)
        // console.log('resposta', res.status)

        if(res.status == 200) {
            console.log('dei o dispatch')
            dispatch(
                salvaPokemonSingle(res.data)
            );
        }

    } catch (error) {
        console.log('errou')
        console.log(error)
        // dispatch(loginFailed());
    }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default pokemonSlice.reducer;
