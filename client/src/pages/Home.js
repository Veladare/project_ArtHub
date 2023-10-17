import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import { useQuery } from '@apollo/client';
import { QUERY_ART_ALL} from '../utils/queries';


// const artworkData = [
//   { title: "Starry Night", description: "A beautiful night sky painting", name:"Vincent van Gogh"},
//   { title: "The Persistence of Memory", description: "A surreal painting by Salvador Dalí", name: "Salvador Dalí" },
//   { title: "David", description: "A famous sculpture by Michelangelo", name: "Michelangelo" },
//   { title: "Guernica", description: "A powerful anti-war painting by Picasso", name: "Pablo Picasso" },
//   { title: "Water Lilies", description: "A series of paintings by Claude Monet", name: "Claude Monet" },
//   { title: "Jimson Weed/White Flower No. 1", description: "A floral painting by Georgia O'Keeffe", name: "Georgia O'Keeffe" },
//   { title: "The Two Fridas", description: "A painting depicting Frida Kahlo's emotional pain", name: "Frida Kahlo" },
//   { title: "Number 1A, 1948", description: "An abstract expressionist painting by Jackson Pollock", name: "Jackson Pollock" },
//   { title: "Mona Lisa", description: "The iconic portrait by Leonardo da Vinci", name: "Leonardo da Vinci" },
//   { title: "The Thinker", description: "A famous sculpture by Auguste Rodin", name: "Auguste Rodin" }3
// ];


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
