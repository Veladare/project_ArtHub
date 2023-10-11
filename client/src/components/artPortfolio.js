import React from 'react';
import Art from './Art';
import './artPortfolio.css';//if we have css need to import it here

import artPiece from './artPiece';//will need img folders for all these
import artPiece2 from './artPiece2';
import artPiece3 from './artPiece3';
import artPiece4 from './artPiece4';
import artPiece5 from './artPiece5';
import artPiece6 from './artPiece6';

const artPieces = [
    {image: artPiece, altText: "artPiece", description: "artPiece"},
    {image: artPiece2, altText: "artPiece2", description: "artPiece2"},
    {image: artPiece3, altText: "artPiece3", description: "artPiece3"},
    {image: artPiece4, altText: "artPiece4", description: "artPiece4"},
    {image: artPiece5, altText: "artPiece5", description: "artPiece5"},
    {image: artPiece6, altText: "artPiece6", description: "artPiece6"},
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