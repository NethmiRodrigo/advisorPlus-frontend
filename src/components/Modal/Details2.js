import React from 'react';
import Modal from 'react-modal';

function Details2({   
        deatilsModal, 
        submitDetails, 
        name, 
        nameChangeHandler, 
        email, 
        emailChangeHandler, 
        // phone, 
        // phoneChangeHandler, 
        // address, 
        // addressChangeHandler, 
        // occupation, 
        // occupationChangeHandler,  
        unsetDetailsModal
}) {
    return (
        <Modal isOpen={deatilsModal}>
            <form onSubmit={submitDetails}>
                <div className="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname" placeholder={name} onChange={nameChangeHandler} />
                </div>
                <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder={email} onChange={emailChangeHandler} />
                </div>
                {/* <div className="form-group">
                    <label for="phone">Contact Number</label>
                    <input type="text" className="form-control" id="phone" placeholder={phone} onChange={phoneChangeHandler} />
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder={address} onChange={addressChangeHandler} />
                </div>
                <div className="form-group">
                    <label for="occupation">Occupation</label>
                    <input type="text" className="form-control" id="occupation" placeholder={occupation} onChange={occupationChangeHandler} />
                </div> */}
                <button style={{marginTop: '50px', marginRight: '10px'}} type="submit" className="btn btn-primary">Save changes</button>
                <button style={{marginTop: '50px', marginLeft: '10px'}} className="btn btn-danger" onClick={unsetDetailsModal}>Cancel</button>
            </form>
        </Modal>
    );
}

export default Details2;
