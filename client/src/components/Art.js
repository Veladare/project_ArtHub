import React from 'react';

function Art({ image, altText, description }) {
    return (
    <div className="art" style={{ padding: "10px",
        margin: "10px", backgroundColor: "white", border: "1px solid black"}}>
        <div className='art-image'>
            <figure className='art-image-wrapper'>
                <img src={image} alt={altText} />
                <p style={{color:"blue"}}>{description}</p>
            </figure>
        </div>    
    </div>
    );
}

export default Art;