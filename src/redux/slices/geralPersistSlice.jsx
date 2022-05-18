import { createSlice } from '@reduxjs/toolkit'

// import { API }   from '../../services/api'

export const geralPersistSlice = createSlice({
    name: 'geral_persist',
    initialState: {
        modalDisclemer: {
            open:true
        },
        image:{
            mostrar:true
        },
        message: "",
    },
    reducers: {
        alterModalDisclemer: (state, action) => {
            console.log('modalDisclemer', action.payload.open)
            state.modalDisclemer.open = action.payload.open
        },

        alteraStatusMostraImage_: (state, action) => {
            console.log('mostraImage', action.payload)
            state.image.mostrar = action.payload      
        }
    },
});

export const { 
    alterModalDisclemer, 
    alteraStatusMostraImage_
} = geralPersistSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const alteraModalDisclemer = payload => async(dispatch) => {
    try {
        // console.log('disparado dispatch teste'),
        dispatch(
            alterModalDisclemer(payload)
        )

    } catch (error) {
        console.log('erro ao alterar o disclemer')
        // console.log(error)
        // dispatch(loginFailed());
    }
};

export const alteraStatusMostraImage = payload => async(dispatch) => {
    try {
        dispatch(
            alteraStatusMostraImage_(payload.mostraImage)
        )
    } catch (error) {
        console.log('erro alterar mostra image')
        // console.log(error)
        // dispatch(loginFailed());
    }
};

export default geralPersistSlice.reducer;