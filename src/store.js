import {createStore} from "redux";
import {configureStore, createAction, createReducer} from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([/* initial state */], {
    // mutate the state
    [addToDo]: (state, action) => { // doesn't return anything
        state.push({ text: action.payload, id: Date.now() });
    },
    // create new state
    [deleteToDo]: (state, action) => // return must be new state
        state.filter(toDo => toDo.id !== action.payload)
})

// enable Redux Dev Tools
const store = configureStore({reducer});

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;