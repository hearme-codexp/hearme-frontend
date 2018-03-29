import React, { Component } from 'react';
import tutorial from './tutorial.jpg'

class Tutorial extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <section className="tutorial" >
                <img src={tutorial} className="img-tutorial" />
            </section>
        )
    }
}

export default Tutorial;
