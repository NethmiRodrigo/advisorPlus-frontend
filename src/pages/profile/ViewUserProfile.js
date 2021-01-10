import React, { Component } from 'react';
import ViewAdvisorProfileStyles from '../../assets/styles/ViewAdvisorProfileStyles.css';
import BioCard from '../../components/profile/ViewUserProfileComponents/BioCard';
import ProfileCard from '../../components/profile/ViewUserProfileComponents/ProfileCard';
import SkillsCard from '../../components/profile/ViewUserProfileComponents/SkillsCard';
import WhoamiCard from '../../components/profile/ViewUserProfileComponents/WhoamiCard';
// import LinksCard from '../../components/profile/ViewUserProfileComponents/LinksCard';

class ViewUserProfile extends Component {
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
            whoami: 'About me...'
        }
    }

    render() {
        return (
            <div className="container prof" style={{marginTop: '10px'}}>
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <ProfileCard 
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
                                id={this.state.id}
                                name={this.state.name}
                                email={this.state.email}
                                // phone={this.state.phone}
                                // address={this.state.address}
                                // occupation={this.state.occupation}
                            />
                            <div className="row gutters-sm">
                                <div className="col-sm-6 mb-3">
                                    <SkillsCard />
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <WhoamiCard whoami={this.state.whoami} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewUserProfile;
