import React from 'react';

function ProfileCard({
    name, 
    // occupation,
    // address
}) {
    return (
        <div className="card bg-light">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                    <div className="mt-3">
                        <p style={{fontSize: '2.5em'}}>{name}</p>
                        {/* <p className="text-secondary mb-1">{occupation}</p>
                        <p className="text-muted font-size-sm">{address}</p> */}
                        <br />
                        <button className="rounded text-black px-4 py-2" style={{margin: '5px', border: '1px solid black'}}>
                            <i className="fab fa-telegram-plane"></i>
							<span style={{marginLeft: '5px'}}>Message</span>
						</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
