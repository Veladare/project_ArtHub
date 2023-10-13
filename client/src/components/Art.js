import React from 'react';

import artPiece from '../assets/Art/David.jpeg';//might need to fix these paths
import artPiece2 from '../assets/Art/Guernica.jpeg';
import artPiece3 from '../assets/Art/Jimson_Weed.jpeg';
import artPiece4 from '../assets/Art/Mona_Lisa.jpeg';
import artPiece5 from '../assets/Art/number-1a.jpeg';
import artPiece6 from '../assets/Art/Starry_Night.jpeg';
import artPiece7 from '../assets/Art/the_persistence_of_memory.jpeg';
import artPiece8 from '../assets/Art/the_thinker.jpeg';
import artPiece9 from '../assets/Art/the_two_fridas.jpeg';
import artPiece10 from '../assets/Art/Water_Lilies.jpeg';


const artPieces = [
    {image: artPiece, altText: "artPiece", description: "artPiece", title: "Starry Night"},
    {image: artPiece2, altText: "artPiece2", description: "artPiece2"},
    {image: artPiece3, altText: "artPiece3", description: "artPiece3"},
    {image: artPiece4, altText: "artPiece4", description: "artPiece4"},
    {image: artPiece5, altText: "artPiece5", description: "artPiece5"},
    {image: artPiece6, altText: "artPiece6", description: "artPiece6"},
    {image: artPiece7, altText: "artPiece7", description: "artPiece7"},
    {image: artPiece8, altText: "artPiece8", description: "artPiece8"},
    {image: artPiece9, altText: "artPiece9", description: "artPiece9"},
    {image: artPiece10, altText: "artPiece10", description: "artPiece10"},
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