import React from 'react'
import './button.css'

export default ({...props, children}) => {
    return <button {...props}>{children}</button>
}
    