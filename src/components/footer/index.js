import React from 'react'
import Contact from '../contact'

class Footer extends React.Component {

    render(){
        return (
            <div>
                <div className="container">
                    <Contact />
                    <div className="">
                        <h3>Copyright &copy; 2018 Hear me. All Rights Reserved. </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;