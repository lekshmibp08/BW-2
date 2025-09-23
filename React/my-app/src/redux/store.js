import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {value: 0};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        addBy: (state, action) => {state.value += Number(action.payload) || 0},
        reset: (state) => {state.value = 0}
    }
})

export const {increment, decrement, addBy, reset} = counterSlice.actions;

const store = configureStore({
    reducer: {
        counterState: counterSlice.reducer,
    }
})

export default store;