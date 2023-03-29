import React from 'react'
import Button from '@mui/material/Button'


export default function Btn({ classBtn, clickHandler, icon, title }) {
    return (
        <>
            <Button variant="contained" className={classBtn} onClick={() => clickHandler()} startIcon={icon}>
                {title}
            </Button>
        </>
    )
}
