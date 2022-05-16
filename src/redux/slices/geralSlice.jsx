import { createSlice } from '@reduxjs/toolkit'

// import { API }   from '../../services/api'

export const geralSlice = createSlice({
    name: 'geral',
    initialState: {
        loaderGeral: {
            open:false
        },
        message: "",
    },
    reducers: {
        alteraStatusLoaderGeral_: (state, action) => {
            console.log('loaderGeral', action.payload)
            state.loaderGeral.open = action.payload  
        },
    },
});

export const { 
    alteraStatusLoaderGeral_, 
} = geralSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const alteraStatusLoaderGeral = payload => async(dispatch) => {
     
    try {
       
        // console.log('disparado dispatch teste'),
        dispatch(
            alteraStatusLoaderGeral_(payload)
        )

    } catch (error) {
        console.log('erro ao alterar o loader')
        // console.log(error)
        // dispatch(loginFailed());
    }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export default geralSlice.reducer;
