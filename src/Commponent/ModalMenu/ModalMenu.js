import React from 'react'
import './ModalMenu.css'
import ReactDOM from 'react-dom'
export default function ModalMenu({ children }) {
    return ReactDOM.createPortal(
        <div className='modals'>
            {children}
        </div>,
        document.getElementById('modal')
    )
}
