import React from 'react';
import Modal from 'react-modal';

function Whoami({
    whoamiModal, 
    submitWhoami, 
    whoami, 
    whoamiChangeHandler, 
    unsetWhoamiModal
}) {
    return (
        <Modal isOpen={whoamiModal}>
            <form onSubmit={submitWhoami}>
                <div className="form-group">
                    <label for="whoami">About me</label>
                    <textarea type="text" className="form-control" id="whoami" placeholder={whoami} onChange={whoamiChangeHandler} style={{backgroundColor: 'white'}} />
                </div>
                <button style={{marginTop: '50px', marginRight: '10px'}} type="submit" className="btn btn-primary">Save changes</button>
                <button style={{marginTop: '50px', marginLeft: '10px'}} className="btn btn-danger" onClick={unsetWhoamiModal}>Cancel</button>
            </form>
        </Modal>
    );
}

export default Whoami;
