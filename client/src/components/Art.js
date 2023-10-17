import React from 'react';
import '../Art.css';

import artPiece from '../assets/Art/Starry_Night.jpeg';
import artPiece2 from '../assets/Art/the_persistence_of_memory.jpeg';
import artPiece3 from '../assets/Art/David.jpeg';
import artPiece4 from '../assets/Art/Guernica.jpeg';
import artPiece5 from '../assets/Art/Water_Lilies.jpeg';
import artPiece6 from '../assets/Art/Jimson_Weed.jpeg';
import artPiece7 from '../assets/Art/the_two_fridas.jpeg';
import artPiece8 from '../assets/Art/number-1a.jpeg';
import artPiece9 from '../assets/Art/Mona_Lisa.jpeg';
import artPiece10 from '../assets/Art/the_thinker.jpeg';


const artPieces = [
    {image: artPiece, altText: "artPiece", description: "artPiece", title: "Starry Night"},
    {image: artPiece2, altText: "artPiece2", description: "artPiece2", title: "The Persistence of Memory"},
    {image: artPiece3, altText: "artPiece3", description: "artPiece3", title: "David"},
    {image: artPiece4, altText: "artPiece4", description: "artPiece4", title: "Guernica"},
    {image: artPiece5, altText: "artPiece5", description: "artPiece5", title: "Water Lilies"},
    {image: artPiece6, altText: "artPiece6", description: "artPiece6", title: "Jimson Weed/White Flower No. 1"},
    {image: artPiece7, altText: "artPiece7", description: "artPiece7", title: "The Two Fridas"},
    {image: artPiece8, altText: "artPiece8", description: "artPiece8", title: "Number 1A, 1948"},
    {image: artPiece9, altText: "artPiece9", description: "artPiece9", title: "Mona Lisa"},
    {image: artPiece10, altText: "artPiece10", description: "artPiece10", title: "The Thinker"},
];


function Art({ title, description }) {
    const artImage = artPieces.find((art) => art.title === title);
    if (!artImage) {
      return null;
    }
    return (
    <div className="art">
        
            <figure className='art-image'>
                <img src={artImage.image} alt={artImage.altText} className="art-img"/>
                
            </figure>
            <p style={{color:"blue"}}>{description}</p>    
    </div>

    );
  }
  
  // Define another function to export
  
  
  export default Art; // Export the Art component as well.