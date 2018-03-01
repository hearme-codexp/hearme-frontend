import React from 'react'
import './button.css'

// class Button extends React.Component {

//     render(){
//         return <button {...props}>{children}</button>
//     }
// }

export default ({...props, children}) => {
    return <button {...props}>{children}</button>
}
    