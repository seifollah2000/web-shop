import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// reducer

const initialState = {
    value: [],
    inValid: false
}


function nameInput(state, action) {
    let newTilte = {
        name: action.payload.title
    }
    if (state.value.length === 0) {
        state.value.push(newTilte)
    } else {
        state.value.map(item => {
            item.name = action.payload.title
        })
    }
}

function nameUserInput(state, action) {
    let newTilte = {
        userName: action.payload.title
    }
    if (state.value.length === 0) {
        state.value.push(newTilte)
    } else {
        state.value.map(item => {
            item.UserName = action.payload.title
        })
    }
}

function emailInput(state, action) {
    let newTilte = {
        email: action.payload.title
    }
    if (state.value.length === 0) {
        state.value.push(newTilte)
    } else {
        state.value.map(item => {
            item.email = action.payload.title
        })
    }


}

function passwordInput(state, action) {
    let newTilte = {
        password: action.payload.title
    }
    if (state.value.length === 0) {
        state.value.push(newTilte)
    } else {
        state.value.map(item => {
            item.password = action.payload.title
        })
    }

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