import React from 'react'

function WhoamiCard({whoami}) {
    return (
        <div className="card bg-light h-100">
            <div className="card-body">
                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">About</i>Who am I?</h6>
                <p>
                    {whoami} 
                </p>
            </div>
        </div>
    );
}

export default WhoamiCard;
