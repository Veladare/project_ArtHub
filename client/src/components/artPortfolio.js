import React from 'react';
import Art from './Art';
import './artPortfolio.css';//if we have css need to import it here

import artPiece from '../../../server/assets/David.jpeg';//might need to fix these paths
import artPiece2 from '../../../server/assets/Guernica.jpeg';
import artPiece3 from '../../../server/assets/Jimson_Weed.jpeg';
import artPiece4 from '../../../server/assets/Mona_Lisa.jpeg';
import artPiece5 from '../../../server/assets/number-1a.jpeg';
import artPiece6 from '../../../server/assets/Starry_Night.jpeg';
import artPiece7 from '../../../server/assets/the_persistence_of_memory.jpeg';

const artPieces = [
    {image: artPiece, altText: "artPiece", description: "artPiece"},
    {image: artPiece2, altText: "artPiece2", description: "artPiece2"},
    {image: artPiece3, altText: "artPiece3", description: "artPiece3"},
    {image: artPiece4, altText: "artPiece4", description: "artPiece4"},
    {image: artPiece5, altText: "artPiece5", description: "artPiece5"},
    {image: artPiece6, altText: "artPiece6", description: "artPiece6"},
    {image: artPiece7, altText: "artPiece7", description: "artPiece7"},
];

export default function artPortfolio() {
    return (
        <div style={{textAlign: "center",
          paddingBottom: "50px"}}>
            <h1 id="art portfolio">Art Portfolio</h1>
            <div className="art-container">
                {artPieces.map((art, idx) => (
                    <Art
                        key={idx}
                        image={art.image}
                        altText={art.altText}
                        description={art.description}
                     />
                ))}
            </div>
        </div>
    );
}