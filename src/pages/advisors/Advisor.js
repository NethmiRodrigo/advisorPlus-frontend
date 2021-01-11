import React from 'react';
import AdvisorStyles from '../../assets/styles/AdvisorStyles.css';
import samplepic from '../../assets/images/samplepic.jpg';
import {Link} from 'react-router-dom';

const Advisor = ({imgSrc, name, rating, status}) => {
    return (
        <div className="col">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div 
                            style={{
                                position: "absolute",
                                bottom: "5vh",
                                width: "100%",
                                height: "20%",
                                backgroundColor: "#28B463",
                                color: "white",
                                fontSize: "150%"
                            }}
                        >
                            <p>{name}</p>
                            <p>{rating}</p>
                        </div>
                        <img src={imgSrc} alt="Avatar" style={{width: '350px', height: '450px', borderRadius: '30px'}} />
                    </div>
                    <div className="flip-card-back">
                        <p style={{fontSize: '2em', paddingTop: '3vh', color: 'black'}}><b>{name}</b></p> 
                        <p style={{fontSize: '1.3em', paddingTop: '5vh'}}>{status}</p>
                        <Link to="/advisor-view">
                            <button className="rounded text-black px-4 py-2" style={{margin: '5px', border: '1px solid black'}}>
                                <i className="fas fa-user-tie"></i>
                                <span style={{marginLeft: '5px'}}>View Advisor</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advisor;
