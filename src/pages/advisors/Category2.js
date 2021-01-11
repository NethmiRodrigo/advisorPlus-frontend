import React, { Component } from 'react';
import Advisor from './Advisor';
import adv5 from '../../assets/images/adv5.png';
import adv6 from '../../assets/images/adv6.png';
import adv7 from '../../assets/images/adv7.png';
import adv8 from '../../assets/images/adv8.png';

class Category2 extends Component {
    render() {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin: '2.5vw', marginLeft: '3.3vw', marginBottom: '20vh', align: 'center'}}>
                    <Advisor imgSrc={adv5} name={"Oreo Melandor"} rating={"8.7"} status={"Hey there!"} />
                    <Advisor imgSrc={adv6} name={"Jeff Otterson"} rating={"9.7"} status={"Looking for help?"} />
                    <Advisor imgSrc={adv7} name={"Leonard Vincy"} rating={"7.9"} status={"Good to see you!"} />
                    <Advisor imgSrc={adv8} name={"Jack Kerrem"} rating={"8.5"} status={":)"} />
            </div>
        )
    }
}

export default Category2;
