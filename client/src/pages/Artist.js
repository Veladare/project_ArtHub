import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ARTIST } from '../utils/queries';
import { useParams } from 'react-router-dom';


const Artist = () => {
  const { artistId } = useParams();

  console.log('artistId:', artistId);

  const { loading, error, data } = useQuery(QUERY_ARTIST, {
    variables: { artistId: artistId },
  });

  console.log('loading:', loading);
  console.log('error:', error);
  console.log('data:', data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const artist = data?.artist || {};

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <h1>{artist.name}</h1>
          <p>Style: {artist.style}</p>
          <p>Bio: {artist.bio}</p>

          <a href=''>
            <img src='/src/Artists/' />
          </a>

        </div>
      </div>
    </main>
  );
};

export default Artist;