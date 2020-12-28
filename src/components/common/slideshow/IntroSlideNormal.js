import React from 'react';

const IntroSlideNormal = ({imgSrc, text, textLeftPadding, textTopPadding}) => {
    return (
        <div className="carousel-item">
            <div style={{position: 'absolute', paddingLeft: textLeftPadding, paddingTop: textTopPadding}}>{text}</div>
            <img src={imgSrc} className="d-block w-100" alt="pic" style={{maxHeight: '49vw'}} />
        </div>
    )
}

export default IntroSlideNormal;