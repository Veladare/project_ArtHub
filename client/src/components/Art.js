import React from 'react';

import artPiece from '../assets/Art/David.jpeg';//might need to fix these paths
import artPiece2 from '../assets/Art/Guernica.jpeg';
import artPiece3 from '../assets/Art/Jimson_Weed.jpeg';
import artPiece4 from '../assets/Art/Mona_Lisa.jpeg';
import artPiece5 from '../assets/Art/number-1a.jpeg';
import artPiece6 from '../assets/Art/Starry_Night.jpeg';
import artPiece7 from '../assets/Art/the_persistence_of_memory.jpeg';

const artPieces = [
    {image: artPiece, altText: "artPiece", description: "artPiece", title: "Starry Night"},
    {image: artPiece2, altText: "artPiece2", description: "artPiece2"},
    {image: artPiece3, altText: "artPiece3", description: "artPiece3"},
    {image: artPiece4, altText: "artPiece4", description: "artPiece4"},
    {image: artPiece5, altText: "artPiece5", description: "artPiece5"},
    {image: artPiece6, altText: "artPiece6", description: "artPiece6"},
    {image: artPiece7, altText: "artPiece7", description: "artPiece7"},
];

function Art({ title, description }) {
    const artImage = artPieces.find((art) => art.title === title);
    if (!artImage) {
        return null;
    }
    return (
    <div className="art" style={{ padding: "10px",
        margin: "10px", backgroundColor: "white", border: "1px solid black"}}>
        <div className='art-image'>
            <figure className='art-image-wrapper'>
                <img src={artImage.image} alt={artImage.altText} />
                <p style={{color:"blue"}}>{description}</p>
            </figure>
        </div>    
    </div>
    );
}

export default Art;