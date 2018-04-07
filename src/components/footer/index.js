import React from 'react'
import Contact from '../contact'
import './footer.css'
import Header from '../header'
import senai from './senai.png'
import jpMorgan from './jpmorgan.png'
import microsoft from './microsoft.png'

class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="item">
                    <div className="container">
                            <Contact />
                    </div>
                   <div className="footer-companies">
                        <div className="container">
                            <h2 className="footer-companies__title">Partners:</h2>
                            <div class="footer-companies__items">
                                <div>
                                    <img src={senai} className="footer-companies__partner" />
                                </div> 
                                <div>
                                    <img src={jpMorgan}  className="footer-companies__partner" />
                                </div>    
                                <div>
                                    <img src={microsoft}  className="footer-companies__partner" />
                                </div>       
                            </div>
                            <div className="footer--copyright">
                                <p>Copyright &copy; 2018 Hear me. All Rights Reserved. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;