import React, { Component } from 'react';
import Advisor from './Advisor';

class Category3 extends Component {
    render() {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin: '2.5vw', marginLeft: '3.3vw', marginBottom: '20vh', align: 'center'}}>
                    <Advisor />
                    <Advisor />
                    <Advisor />
                    <Advisor />
                    <Advisor />
                    <Advisor />
                    <Advisor />
                    <Advisor />
            </div>
        )
    }
}

export default Category3;