import React from 'react'
import Contact from '../contact'
import './footer.css'
import Header from '../header'

class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <main className="section">
                    <div>
                        <div className="container">
                            <Contact />
                            <div className="container--copyright">
                                <p>Copyright &copy; 2018 Hear me. All Rights Reserved. </p>
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default Footer;