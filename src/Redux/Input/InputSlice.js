import { createSlice } from "@reduxjs/toolkit";

function shared(nameItem, state, action) {
    if (state.value.length === 0) {
        let newTilte = {
            [nameItem]: action.payload.title
        }
        state.value.push(newTilte)
    } else {
        state.value.map(item => {
            item[nameItem] = action.payload.title
        })
    }
}
// reducer

const initialState = {
    value: [],
    inValid: false
}


function nameInput(state, action) {
    shared('name', state, action)
}

function nameUserInput(state, action) {
    shared('userName', state, action)
}

function emailInput(state, action) {

    shared('email', state, action)
}

function passwordInput(state, action) {

    shared('password', state, action)
}


const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        nameInput,
        nameUserInput,
        emailInput,
        passwordInput
    }
})

export const {

    nameInput: nameInputAction,
    nameUserInput: nameUserInputAction,
    emailInput: emailInputAction,
    passwordInput: passwordInputAction

} = inputSlice.actions

export default inputSlice.reducer