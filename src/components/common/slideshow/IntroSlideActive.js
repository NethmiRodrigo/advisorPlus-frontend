import React from 'react';

const IntroSlideActive = ({imgSrc, text, textLeftPadding, textTopPadding}) => {
    return (
        <div className="carousel-item active">
            <div style={{position: 'absolute', paddingLeft: textLeftPadding, paddingTop: textTopPadding}}>{text}</div>
            <img src={imgSrc} className="d-block w-100" alt="pic" style={{maxHeight: '49vw'}} />
        </div>
    )
}

export default IntroSlideActive;
