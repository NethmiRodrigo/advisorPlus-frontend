import React from 'react';
import Modal from 'react-modal';

function ChangePic({
    changePicModal,
    submitProfilePic,
    unsetChangePicModal
}) {
    return (
        <Modal isOpen={changePicModal} >
            <form onSubmit={submitProfilePic}>
                <div className="form-group">
                    <form>
                        <div className="custom-file">
                            <label className="form-label" for="customFile">Set a new profile image...</label>
                            <input type="file" className="form-control" id="customFile" />
                        </div>
                    </form>
                </div>
                <button style={{marginTop: '50px', marginRight: '10px'}} type="submit" className="btn btn-primary">Save changes</button>
                <button style={{marginTop: '50px', marginLeft: '10px'}} className="btn btn-danger" onClick={unsetChangePicModal}>Cancel</button>
            </form>
        </Modal>  
    );
}

export default ChangePic;
