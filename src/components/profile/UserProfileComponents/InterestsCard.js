import React from 'react'
import SkillSet from '../skillset/SkillSet'

function InterestsCard() {
    return (
        <div className="card bg-light h-100">
            <div className="card-body">
                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">Interests</i>Some of my favourites...</h6>
                <SkillSet />
            </div>
        </div>
    );
}

export default InterestsCard;
