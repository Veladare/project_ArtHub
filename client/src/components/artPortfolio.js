import React from 'react';
import Art from './Art';
import './artPortfolio.css';//if we have css need to import it here



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