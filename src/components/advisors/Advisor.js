import React from 'react';
import AdvisorStyles from '../../assets/styles/AdvisorStyles.css';
import samplepic from '../../assets/images/samplepic.jpg';

const Advisor = () => {
    return (
        <div class="col">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={samplepic} alt="Avatar" style={{width: '250px', height: '250px', borderRadius: '60px'}} />
                    </div>
                    <div className="flip-card-back">
                        <p style={{fontSize: '2em', paddingTop: '3vh', color: 'black'}}><b>Name</b></p> 
                        <p style={{fontSize: '1.3em', paddingTop: '3vh'}}>Occupation</p> 
                        <p style={{fontSize: '1.3em', paddingTop: '5vh'}}>Status</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advisor;
