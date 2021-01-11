import React from 'react';

function WhoamiCard({setWhoamiModal, whoami}) {
    return (
        <div className="card bg-light h-100">
            <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                    <button className="rounded px-2 py-1" onClick={setWhoamiModal} style={{marginBottom: '5px', border: '1px blue solid', color: 'blue'}}>
                        <i className="fas fa-edit"></i>
                        <span style={{marginLeft: '5px'}}>Edit</span>
                    </button>
                </div>
                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">About</i>Who am I?</h6>
                <p> {whoami} </p>
            </div>
        </div>
    );
}

export default WhoamiCard;
