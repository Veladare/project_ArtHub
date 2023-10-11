import React from 'react';

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
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
            {/* Artist Name */}
            <h1>{artistInfo.name}</h1>

            {/* Artist Style */}
            <h2>Art Style: {artistInfo.style}</h2>
            {/* Artist Bio */}
            <p>{artistInfo.bio}</p>
            {/* Art Photo */}
            <img src={artistInfo.art} alt="Artwork"/>

        </div>
      </div>
    </main>
  );
};

export default Artist;
