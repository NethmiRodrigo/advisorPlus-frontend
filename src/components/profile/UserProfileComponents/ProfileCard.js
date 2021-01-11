import React from 'react';

function ProfileCard({
    picModal,
    profilePic,
    name,
    // occupation,
    // address
}) {
    return (
        <div className="card" style={{background: "#F2F3F4"}}>
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        onClick={picModal}
                        width="50" 
                        height="40" 
                        fill="currentColor" 
                        className="bi bi-camera-fill" 
                        viewBox="0 0 15 16" 
                        style={{
                            position: "absolute", 
                            borderRadius: "100%", 
                            background: "white", 
                            padding: "4px", 
                            marginTop: "16vh", 
                            marginLeft: "6vw",
                            cursor: "pointer",
                            border: "1px solid grey"
                        }}
                    >
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                    </svg>
                    <img src={profilePic} alt="Admin" className="rounded-circle" width="150" style={{background: "white"}} />
                    <div className="mt-3">
                        <p style={{fontSize: '2.5em'}}>{name}</p>
                        {/* <p className="text-secondary mb-1">{occupation}</p>
                        <p className="text-muted font-size-sm">{address}</p> */}
                        <br />
                        <button className="rounded text-black px-4 py-2" style={{margin: '5px', border: '1px solid black'}}>
                            <i className="fa fa-fas fa-mail-bulk"></i>
			                <span style={{marginLeft: '5px'}}>Inbox</span>
					    </button>
                        <button className="rounded px-4 py-2" style={{margin: '5px', border: '1px solid red', color: 'red'}}>
                            <i className="fas fa-trash"></i>
					        <span style={{marginLeft: '5px'}}>Delete</span>
					    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
