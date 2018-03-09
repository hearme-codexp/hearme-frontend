import React from 'react'
import './button.css'

export default ({ children, ...props}) => {
    return <button {...props}>{children}</button>
}
    