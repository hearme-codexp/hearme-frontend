import React from 'react'
import './input.css'

export default ({ innerRef, ...props}) => <input ref={innerRef} {...props} /> 