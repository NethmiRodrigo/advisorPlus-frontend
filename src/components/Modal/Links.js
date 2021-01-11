import React from 'react';
import Modal from 'react-modal';

function Links({
    linksModal,
    submitLinks,
    web,
    webChangeHandler,
    github,
    githubChangeHandler,
    twitter,
    twitterChangeHandler,
    insta,
    instaChangeHandler,
    fb,
    fbChangeHandler,
    unsetLinksModal
}) {
    return (
        <Modal isOpen={linksModal}>
            <form onSubmit={submitLinks}>
                <div className="form-group">
                    <label for="website">Website</label>
                    <input type="link" className="form-control" id="website" placeholder={web} onChange={webChangeHandler} />
                </div>
                <div className="form-group">
                    <label for="github">Github</label>
                    <input type="link" className="form-control" id="github" placeholder={github} onChange={githubChangeHandler} />
                </div>
                <div className="form-group">
                    <label for="twitter">Twitter</label>
                    <input type="link" className="form-control" id="twitter" placeholder={twitter} onChange={twitterChangeHandler} />
                </div>
                <div className="form-group">
                    <label for="insta">Instagram</label>
                    <input type="link" className="form-control" id="insta" placeholder={insta} onChange={instaChangeHandler} />
                </div>
                <div className="form-group">
                    <label for="fb">Facebook</label>
                    <input type="link" className="form-control" id="fb" placeholder={fb} onChange={fbChangeHandler} />
                </div>
                <button style={{marginTop: '50px', marginRight: '10px'}} type="submit" className="btn btn-primary">Save changes</button>
                <button style={{marginTop: '50px', marginLeft: '10px'}} className="btn btn-danger" onClick={unsetLinksModal}>Cancel</button>
            </form>
        </Modal> 
    );
}

export default Links;
