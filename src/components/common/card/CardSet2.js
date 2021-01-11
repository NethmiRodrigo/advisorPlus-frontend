import React from 'react';
import Card from './Card';
import healthandfitness from "../../../assets/images/healthandfitness.jpg"
import itconsultation from "../../../assets/images/itconsultation.jpg"
import hrconsultation from "../../../assets/images/hrconsultation.jpg"

const CardSet2 = () => {
    return (
        <div className="card-group" style={{background: "#EDF6FF"}}>
            <Card picSrc={healthandfitness} content="Health and Fitness" />
            <Card picSrc={itconsultation} content="IT Consultation" />
            <Card picSrc={hrconsultation} content="Human Resources Consultation" />
        </div>
    )
}

export default CardSet2;
