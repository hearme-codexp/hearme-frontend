import React from 'react'
import logo from './logo-hearme.png'
import street from './street.jpg'


class LandingPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav>
                    <img src={street}/>
                    <img src={logo} />
                </nav>
            </React.Fragment>
        )
    }
}

export default LandingPage;


