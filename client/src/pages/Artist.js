import React from 'react';
import '../Artist.css'; // import CSS file

const Artist = () => {
    // Artist Information 
    const artistInfo = {
        name: 'Artist Name',
        style: 'Art Style',
        bio: 'Artist Biography',
        art: 'URL_of_Art_Photo.jpg'
    };

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-6 mb-3 p-3 artist-container"
        >
            {/* Artist Name */}
            <h1 className="artist-name">{artistInfo.name}</h1>

            {/* Artist Style */}
            <h2 className="artist-style">Art Style: {artistInfo.style}</h2>
            {/* Artist Bio */}
            <p className="artist-bio">{artistInfo.bio}</p>
        </div>
        <div className="col-12 col-md-6 mb3 p-3 image-container">
             {/* Art Photo */}
        <img src={artistInfo.art} alt="Artwork" className="artist-image"/>
        </div>
      </div>
    </main>
  );
};

export default Artist;
