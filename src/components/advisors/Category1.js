import React, { Component } from 'react';
import Advisor from './Advisor';

class Category1 extends Component {
    render() {
        return (
            <div class="row row-cols-1 row-cols-md-5 g-4" style={{margin: '2.5vw', marginLeft: '3.3vw', marginBottom: '20vh'}}>
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

export default Category1;
