import React from 'react'
import Contact from '../contact'
import './footer.css'

class Footer extends React.Component {

    render(){
        return (
            <div>
                <div className="container">
                    <Contact />
                    <div className="container--copyright">
                        <p>Copyright &copy; 2018 Hear me. All Rights Reserved. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;