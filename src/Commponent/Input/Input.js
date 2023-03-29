import React from 'react'
import { TextField } from '@mui/material'
import './Input.css'

export default function Input({ labelText, changeHandler }) {
    return (
        <div className='input_text'>
            <TextField id="outlined-basic" label={labelText} variant="outlined" onChange={(event) => changeHandler(event)} />

        </div>
    )
}
