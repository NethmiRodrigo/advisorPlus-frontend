import React, { Component } from 'react';
import AdvisorProfileStyles from '../../assets/styles/AdvisorProfileStyles.css';
import Modal from 'react-modal';
import SkillSet from '../../components/profile/skillset/SkillSet';

class UserProfile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: '12345',
            name: 'John Doe',
            occupation: 'Full Stack Developer',
            address: 'Bay Area, San Francisco, CA',
            email: 'johndoe@gmail.com',
            phone: '123456789',
            web: 'https://code360.com',
            github: 'Code360',
            twitter: '@Code360',
            insta: 'Code360',
            fb: 'Code360',
            whoami: 'About me...',
            deatilsModal: false,
            linksModal: false,
            whoamiModal: false
        }
    }

    // New States
    newName = '';
    newOccupation = '';
    newAddress = '';
    newEmail = '';
    newPhone = '';
    newWeb = '';
    newGithub = '';
    newTwitter = '';
    newInsta = '';
    newFb = '';
    newWhoami = '';

    // Backup States
    backupName = '';
    backupOccupation = '';
    backupAddress = '';
    backupEmail = '';
    backupPhone = '';
    backupWeb = '';
    backupGithub = '';
    backupTwitter = '';
    backupInsta = '';
    backupFb = '';
    backupWhoami = '';

    // Setting backup
    setDetailsModal = () => {
        this.backupName = this.state.name;
        this.backupOccupation = this.state.occupation;
        this.backupAddress = this.state.address;
        this.backupEmail = this.state.email;
        this.backupPhone = this.state.phone;

        this.setState({
            deatilsModal: true
        });
    }

    setLinksModal = () => {
        this.backupWeb = this.state.web;
        this.backupGithub = this.state.github;
        this.backupTwitter = this.state.twitter;
        this.backupInsta = this.state.insta;
        this.backupFb = this.state.fb;

        this.setState({
            linksModal: true
        });
    }

    setWhoamiModal = () => {
        this.backupWhoami = this.state.whoami;

        this.setState({
            whoamiModal: true
        });
    }

    // Reset states with backup state values
    unsetDetailsModal = () => {
        this.setState({
            name: this.backupName,
            occupation: this.backupOccupation,
            address: this.backupAddress,
            email: this.backupEmail,
            phone: this.backupPhone,
            deatilsModal: false
        });
    }

    unsetLinksModal = () => {
        this.setState({
            web: this.backupWeb,
            github: this.backupGithub,
            twitter: this.backupTwitter,
            insta: this.backupInsta,
            fb: this.backupFb,
            linksModal: false
        });
    }

    unsetWhoamiModal = () => {
        this.setState({
            whoami: this.backupWhoami,
            whoamiModal: false
        });
    }

    // Submit
    submitDetails = () => {
        this.setState({
            name: this.newName,
            occupation: this.newOccupation,
            address: this.newAddress,
            email: this.newEmail,
            phone: this.newPhone,
            deatilsModal: false
        });
    }

    submitLinks = () => {
        this.setState({
            web: this.newWeb,
            github: this.newGithub,
            twitter: this.newTwitter,
            insta: this.newInsta,
            fb: this.newFb,
            linksModal: false
        });
    }

    submitWhoami = () => {
        this.setState({
            whoami: this.newWhoami,
            whoamiModal: false
        });
    }

    //  Editing event handlers

    nameChangeHandler = (event) => {
        this.newName = event.target.value;
    }

    occupationChangeHandler = (event) => {
        this.newOccupation = event.target.value;
    }

    addressChangeHandler = (event) => {
        this.newAddress = event.target.value;
    }

    emailChangeHandler = (event) => {
        this.newEmail = event.target.value;
    }

    phoneChangeHandler = (event) => {
        this.newPhone = event.target.value;
    }

    webChangeHandler = (event) => {
        this.newWeb = event.target.value;
    }

    githubChangeHandler = (event) => {
        this.newGithub = event.target.value;
    }

    twitterChangeHandler = (event) => {
        this.newTwitter = event.target.value;
    }

    instaChangeHandler = (event) => {
        this.newInsta = event.target.value;
    }

    fbChangeHandler = (event) => {
        this.newFb = event.target.value;
    }

    whoamiChangeHandler = (event) => {
        this.newWhoami = event.target.value;
    }

    render() {
        return (
            <div className="container prof" style={{marginTop: '10px'}}>
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <p style={{fontSize: '2.5em'}}>{this.state.name}</p>
                                            <p className="text-secondary mb-1">{this.state.occupation}</p>
                                            <p className="text-muted font-size-sm">{this.state.address}</p>
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
                            <div className="card bg-light mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <button className="rounded px-2 py-1" onClick={this.setLinksModal} style={{border: '1px blue solid', color: 'blue'}}>
                                            <i className="fas fa-edit"></i>
									        <span style={{marginLeft: '5px'}}>Edit</span>
								        </button>

                                        {/* Edit modals */}
                                        <Modal isOpen={this.state.linksModal}>
                                            <form onSubmit={this.submitLinks}>
                                                <div className="form-group">
                                                    <label for="website">Website</label>
                                                    <input type="link" className="form-control" id="website" placeholder={this.state.web} onChange={this.webChangeHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label for="github">Github</label>
                                                    <input type="link" className="form-control" id="github" placeholder={this.state.github} onChange={this.githubChangeHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label for="twitter">Twitter</label>
                                                    <input type="link" className="form-control" id="twitter" placeholder={this.state.twitter} onChange={this.twitterChangeHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label for="insta">Instagram</label>
                                                    <input type="link" className="form-control" id="insta" placeholder={this.state.insta} onChange={this.instaChangeHandler} />
                                                </div>
                                                <div className="form-group">
                                                    <label for="fb">Facebook</label>
                                                    <input type="link" className="form-control" id="fb" placeholder={this.state.fb} onChange={this.fbChangeHandler} />
                                                </div>
                                                <button style={{marginTop: '50px', marginRight: '10px'}} type="submit" className="btn btn-primary">Save changes</button>
                                                <button style={{marginTop: '50px', marginLeft: '10px'}} className="btn btn-danger" onClick={this.unsetLinksModal}>Cancel</button>
                                            </form>
                                        </Modal>
                                        {/* Edit modals */}

                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                                        <span className="text-secondary">{this.state.web}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                                        <span className="text-secondary">{this.state.github}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                                        <span className="text-secondary">{this.state.twitter}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                                        <span className="text-secondary">{this.state.insta}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                                        <span className="text-secondary">{this.state.fb}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card bg-light mb-3">
                                <div className="card-body">
                                    <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                                        <div className="col-sm-3">
                                            <button type="button" className="rounded px-2 py-1" onClick={this.setDetailsModal} style={{marginBottom: '5px', border: '1px blue solid', color: 'blue'}}>
                                                <i className="fas fa-edit"></i>
                                                <span style={{marginLeft: '5px'}}>Edit</span>
                                            </button>

                                            {/* Edit modals */}
                                            <Modal isOpen={this.state.deatilsModal}>
                                                <form onSubmit={this.submitDetails}>
                                                    <div className="form-group">
                                                        <label for="fullname">Full Name</label>
                                                        <input type="text" className="form-control" id="fullname" placeholder={this.state.name} onChange={this.nameChangeHandler} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="email">Email</label>
                                                        <input type="email" className="form-control" id="email" placeholder={this.state.email} onChange={this.emailChangeHandler} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="phone">Contact Number</label>
                                                        <input type="text" className="form-control" id="phone" placeholder={this.state.phone} onChange={this.phoneChangeHandler} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="address">Address</label>
                                                        <input type="text" className="form-control" id="address" placeholder={this.state.address} onChange={this.addressChangeHandler} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="occupation">Occupation</label>
                                                        <input type="text" className="form-control" id="occupation" placeholder={this.state.occupation} onChange={this.occupationChangeHandler} />
                                                    </div>
                                                    <button style={{marginTop: '50px', marginRight: '10px'}} type="submit" className="btn btn-primary">Save changes</button>
                                                    <button style={{marginTop: '50px', marginLeft: '10px'}} className="btn btn-danger" onClick={this.unsetDetailsModal}>Cancel</button>
                                                </form>
                                            </Modal>
                                            {/* Edit modals */}

                                        </div>
                                    </div>
                                    <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">ID</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.id}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.email}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Contact Number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.phone}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.address}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row" style={{paddingTop: '2px', paddingBottom: '2px'}}>
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Occupation</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {this.state.occupation}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Interests</i>I am interested in...</h6>
                                            <SkillSet />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <div className="card bg-light h-100">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center mb-3">
                                                <button className="rounded px-2 py-1" onClick={this.setWhoamiModal} style={{marginBottom: '5px', border: '1px blue solid', color: 'blue'}}>
                                                    <i className="fas fa-edit"></i>
                                                    <span style={{marginLeft: '5px'}}>Edit</span>
                                                </button>

                                            {/* Edit modals */}
                                            <Modal isOpen={this.state.whoamiModal} >
                                                <form onSubmit={this.submitWhoami}>
                                                    <div className="form-group">
                                                        <label for="whoami">About me</label>
                                                        <textarea type="text" className="form-control" id="whoami" placeholder={this.state.whoami} onChange={this.whoamiChangeHandler} style={{backgroundColor: 'white'}} />
                                                    </div>
                                                    <button style={{marginTop: '50px', marginRight: '10px'}} type="submit" className="btn btn-primary">Save changes</button>
                                                    <button style={{marginTop: '50px', marginLeft: '10px'}} className="btn btn-danger" onClick={this.unsetWhoamiModal}>Cancel</button>
                                                </form>
                                            </Modal>
                                            {/* Edit modals */}

                                            </div>
                                            <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">About</i>Who am I?</h6>
                                            <p>
                                                {this.state.whoami} 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;
