import React from 'react'

export default function ThemColor({ id, selectedHandler, classThem }) {
    return (
        <div id={id} onClick={(event) => selectedHandler(event)} className={classThem}>

        </div>
    )
}
