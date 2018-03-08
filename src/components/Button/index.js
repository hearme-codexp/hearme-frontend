import React from 'react'
import './button.css'

export default ({ children, ...props}) => {
    console.log(props);
    return <button {...props}>{children}</button>
}
    