import React from 'react';
import Card from './Card';

const CardSet = () => {
    return (
        <div className="card-group" style={{marginLeft: '7vw', marginRight: '7vw', marginBottom: '7vw', height: '20rem'}}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardSet;
