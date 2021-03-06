import React, { Component } from 'react';
import AdvisorProfileStyles from '../../assets/styles/AdvisorProfileStyles.css';
import ChangePic from '../../components/Modal/ChangePic';
import Links from '../../components/Modal/Links';
import Details2 from '../../components/Modal/Details2';
import Whoami from '../../components/Modal/Whoami';
import ProfileCard from '../../components/profile/UserProfileComponents/ProfileCard';
import LinksCard from '../../components/profile/UserProfileComponents/LinksCard';
import BioCard from '../../components/profile/UserProfileComponents/BioCard';
import InterestsCard from '../../components/profile/UserProfileComponents/InterestsCard';
import WhoamiCard from '../../components/profile/UserProfileComponents/WhoamiCard';

class UserProfile extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: '12345',
            name: 'John Doe',
            // occupation: 'Full Stack Developer',
            // address: 'Bay Area, San Francisco, CA',
            email: 'johndoe@gmail.com',
            // phone: '123456789',
            // web: 'https://code360.com',
            // github: 'Code360',
            // twitter: '@Code360',
            // insta: 'Code360',
            // fb: 'Code360',
            whoami: 'About me...',
            profilePic: "https://bootdey.com/img/Content/avatar/avatar7.png",
            deatilsModal: false,
            // linksModal: false,
            whoamiModal: false,
            changePicModal: false
        }
    }

    // New States
    newName = '';
    // newOccupation = '';
    // newAddress = '';
    newEmail = '';
    // newPhone = '';
    // newWeb = '';
    // newGithub = '';
    // newTwitter = '';
    // newInsta = '';
    // newFb = '';
    newWhoami = '';

    // Backup States
    backupName = '';
    // backupOccupation = '';
    // backupAddress = '';
    backupEmail = '';
    // backupPhone = '';
    // backupWeb = '';
    // backupGithub = '';
    // backupTwitter = '';
    // backupInsta = '';
    // backupFb = '';
    backupWhoami = '';

    // Setting backup
    setDetailsModal = () => {
        this.backupName = this.state.name;
        // this.backupOccupation = this.state.occupation;
        // this.backupAddress = this.state.address;
        this.backupEmail = this.state.email;
        // this.backupPhone = this.state.phone;

        this.setState({
            deatilsModal: true
        });
    }

    // setLinksModal = () => {
    //     this.backupWeb = this.state.web;
    //     this.backupGithub = this.state.github;
    //     this.backupTwitter = this.state.twitter;
    //     this.backupInsta = this.state.insta;
    //     this.backupFb = this.state.fb;

    //     this.setState({
    //         linksModal: true
    //     });
    // }

    setWhoamiModal = () => {
        this.backupWhoami = this.state.whoami;

        this.setState({
            whoamiModal: true
        });
    }

    picModal = () => {
        this.setState({
            changePicModal: true
        });
    }

    // Reset states with backup state values
    unsetDetailsModal = () => {
        this.setState({
            name: this.backupName,
            // occupation: this.backupOccupation,
            // address: this.backupAddress,
            email: this.backupEmail,
            // phone: this.backupPhone,
            deatilsModal: false
        });
    }

    // unsetLinksModal = () => {
    //     this.setState({
    //         web: this.backupWeb,
    //         github: this.backupGithub,
    //         twitter: this.backupTwitter,
    //         insta: this.backupInsta,
    //         fb: this.backupFb,
    //         linksModal: false
    //     });
    // }

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
            // occupation: this.newOccupation,
            // address: this.newAddress,
            email: this.newEmail,
            // phone: this.newPhone,
            deatilsModal: false
        });
    }

    // submitLinks = () => {
    //     this.setState({
    //         web: this.newWeb,
    //         github: this.newGithub,
    //         twitter: this.newTwitter,
    //         insta: this.newInsta,
    //         fb: this.newFb,
    //         linksModal: false
    //     });
    // }

    submitWhoami = () => {
        this.setState({
            whoami: this.newWhoami,
            whoamiModal: false
        });
    }

    submitProfilePic = () => {
        this.setState({
            changePicModal: false
        });
    }

    //  Editing event handlers

    nameChangeHandler = (event) => {
        this.newName = event.target.value;
    }

    // occupationChangeHandler = (event) => {
    //     this.newOccupation = event.target.value;
    // }

    // addressChangeHandler = (event) => {
    //     this.newAddress = event.target.value;
    // }

    emailChangeHandler = (event) => {
        this.newEmail = event.target.value;
    }

    // phoneChangeHandler = (event) => {
    //     this.newPhone = event.target.value;
    // }

    // webChangeHandler = (event) => {
    //     this.newWeb = event.target.value;
    // }

    // githubChangeHandler = (event) => {
    //     this.newGithub = event.target.value;
    // }

    // twitterChangeHandler = (event) => {
    //     this.newTwitter = event.target.value;
    // }

    // instaChangeHandler = (event) => {
    //     this.newInsta = event.target.value;
    // }

    // fbChangeHandler = (event) => {
    //     this.newFb = event.target.value;
    // }

    whoamiChangeHandler = (event) => {
        this.newWhoami = event.target.value;
    }

    render() {
        return (
            <div className="container prof" style={{marginTop: '10px'}}>
                {/* Edit modals */}
                <ChangePic 
                    changePicModal={this.state.changePicModal}
                    submitProfilePic={this.submitProfilePic}
                    unsetChangePicModal={this.state.unsetChangePicModal}
                />
                {/* <Links 
                    linksModal={this.state.linksModal}
                    submitLinks={this.submitLinks}
                    web={this.state.web}
                    webChangeHandler={this.webChangeHandler}
                    github={this.state.github}
                    githubChangeHandler={this.githubChangeHandler}
                    twitter={this.state.twitter}
                    twitterChangeHandler={this.twitterChangeHandler}
                    insta={this.state.insta}
                    instaChangeHandler={this.instaChangeHandler}
                    fb={this.state.fb}
                    fbChangeHandler={this.fbChangeHandler}
                    unsetLinksModal={this.state.unsetLinksModal}
                /> */}
                <Details2 
                    deatilsModal={this.state.deatilsModal} 
                    submitDetails={this.submitDetails} 
                    name={this.state.name}
                    nameChangeHandler={this.nameChangeHandler} 
                    email={this.state.email} 
                    emailChangeHandler={this.emailChangeHandler} 
                    // phone={this.state.phone} 
                    // phoneChangeHandler={this.phoneChangeHandler} 
                    // address={this.state.address} 
                    // addressChangeHandler={this.addressChangeHandler} 
                    // occupation={this.state.occupation} 
                    // occupationChangeHandler={this.occupationChangeHandler}  
                    unsetDetailsModal={this.unsetDetailsModal}
                />
                <Whoami  
                    whoamiModal={this.state.whoamiModal}
                    submitWhoami={this.submitWhoami}
                    whoami={this.state.whoami}
                    whoamiChangeHandler={this.whoamiChangeHandler}
                    unsetWhoamiModal={this.unsetWhoamiModal}
                />
                {/* Edit modals */}
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <ProfileCard
                                picModal={this.picModal}
                                profilePic={this.state.profilePic}
                                name={this.state.name}
                                // occupation={this.state.occupation}
                                // address={this.state.address}
                            />
                            {/* <LinksCard 
                                setLinksModal={this.setLinksModal}
                                web={this.state.web}
                                github={this.state.github}
                                twitter={this.state.twitter}
                                insta={this.state.insta}
                                fb={this.state.fb}
                            /> */}
                        </div>
                        <div className="col-md-8">
                            <BioCard 
                                setDetailsModal={this.setDetailsModal}
                                id={this.state.id}
                                name={this.state.name}
                                email={this.state.email}
                                // phone={this.state.phone}
                                // address={this.state.address}
                                // occupation={this.state.occupation}
                            />
                            <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <InterestsCard />
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <WhoamiCard 
                                        setWhoamiModal={this.setWhoamiModal}
                                        whoami={this.state.whoami}
                                    />
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
