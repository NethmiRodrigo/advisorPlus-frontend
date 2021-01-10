import React from 'react';
import Card from './Card';
import mentalhealth from "../../../assets/images/mentalhealth.jpg"
import financialguidance from "../../../assets/images/financialguidance.jpg"
import careerguidance from "../../../assets/images/careerguidance.jpg"

const CardSet = () => {
    return (
        <div className="card-group" style={{background: "#EDF6FF"}}>
            <Card picSrc={mentalhealth} content="Mental Health" />
            <Card picSrc={financialguidance} content="Financial Guidance" />
            <Card picSrc={careerguidance} content="Carrier Guidance" />
        </div>
    )
}

export default CardSet;
