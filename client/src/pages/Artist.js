import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ARTIST } from '../utils/queries';
import { useParams } from 'react-router-dom';
import '../Artist.css'; 
import Art from '../components/Art'; 

import artist from '../assets/Artists/Van_Gogh.jpeg';
import artist2 from '../assets/Artists/Salvador_Dali.jpeg';
import artist3 from '../assets/Artists/Michelangelo.jpeg';
import artist4 from '../assets/Artists/Picasso.jpeg';
import artist5 from '../assets/Artists/Claud_Monet.jpeg';
import artist6 from '../assets/Artists/Okeefe.jpeg';
import artist7 from '../assets/Artists/Frida_Kahlo.jpeg';
import artist8 from '../assets/Artists/Jackson_Pollock.jpeg';
import artist9 from '../assets/Artists/Da_Vinci.jpeg';
import artist10 from '../assets/Artists/Auguste_Rodin.jpg';

const artists = [
  {image: artist, altText: "artist", description: "artist",name: "Vincent van Gogh"},
  {image: artist2, altText: "artist2", description: "artist2",name: "Salvador Dalí"},
  {image: artist3, altText: "artist3", description: "artist3",name: "Michelangelo"},
  {image: artist4, altText: "artist4", description: "artist4",name: "Pablo Picasso"},
  {image: artist5, altText: "artist5", description: "artist5",name: "Claude Monet"},
  {image: artist6, altText: "artist6", description: "artist6",name: "Georgia O'Keeffe"},
  {image: artist7, altText: "artist7", description: "artist7",name: "Frida Kahlo"},
  {image: artist8, altText: "artist8", description: "artist8",name: "Jackson Pollock"},
  {image: artist9, altText: "artist9", description: "artist9",name: "Leonardo da Vinci"},
  {image: artist10, altText: "artist10", description: "artist10",name: "Auguste Rodin"},
];

const Artist = () => {
  const { artistId } = useParams();

  console.log('artistId:', artistId);

  const { loading, error, data } = useQuery(QUERY_ARTIST, {
    variables: { artistId: artistId },
  });

  //console.log('loading:', loading);
  //console.log('error:', error);
  //console.log('data:', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  //console.log('artistId:', artistId);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const artist = data?.artist || {};
  const artistImage = artists.find((image) => image.name === artist.name);
  return (
    <main>
      <div className="flex-row">
        <div
          className="artist-info">
          <h1>{artist.name}</h1>
          <p>Style: {artist.style}</p>
          <p>Bio: {artist.bio}</p>
          <a href=''>
            <img src={artistImage?.image} 
              alt={artistImage?.altText}
              style={{ maxWidth: '300px', height: 'auto' }} // Setting a max width, height adjusts proportionally
            />
          </a>
          </div>
          <div className="artwork-container">
          {artist.art?.map((art, index) => (
              <Art
                key={index} // Use a unique key for each Art component
                title={art.title}
                description={art.description}
              />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Artist;


