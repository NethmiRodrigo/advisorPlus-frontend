import React, { Component } from 'react';
import Advisor from './Advisor';
import adv1 from '../../assets/images/adv1.png';
import adv2 from '../../assets/images/adv2.png';
import adv3 from '../../assets/images/adv3.png';
import adv4 from '../../assets/images/adv4.png';

class Category1 extends Component {
    render() {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin: '2.5vw', marginLeft: '3.3vw', marginBottom: '20vh', align: 'center'}}>
                    <Advisor imgSrc={adv1} name={"Oreo Melandor"} rating={"8.7"} status={"Hey there!"} />
                    <Advisor imgSrc={adv2} name={"Jeff Otterson"} rating={"9.7"} status={"Looking for help?"} />
                    <Advisor imgSrc={adv3} name={"Leonard Vincy"} rating={"7.9"} status={"Good to see you!"} />
                    <Advisor imgSrc={adv4} name={"Jack Kerrem"} rating={"8.5"} status={":)"} />
            </div>
        )
    }
}

export default Category1;
