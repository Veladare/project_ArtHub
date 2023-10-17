import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import { useQuery } from '@apollo/client';
import { QUERY_ART_ALL} from '../utils/queries';


const Home = () => {
    const { data } = useQuery(QUERY_ART_ALL);
    const art = data?.arts || [];
    console.log(art)
  return (
    <div>
      {art.map((artwork, index) => (
        <Gallery key={index} title={artwork.title} name={artwork.description} id={artwork.artist._id} />
      ))}
    </div>
  );
  
}

export default Home;
