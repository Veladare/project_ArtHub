const db = require('../config/connection');
const { Art, Artist, User } = require('../models');
const artistSeeds = require('./artistSeeds.json');
const artSeeds = require('./artSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Art.deleteMany({});
    await Artist.deleteMany({});
    await User.deleteMany({});

    const users = await User.create(userSeeds);
    console.log('users:', users);

    const artists = await Artist.create(artistSeeds);
    console.log('artists:', artists);

    // loop over each artist, figure out artist ID



    for (let i = 0; i < artSeeds.length; i++) {

      const currentArtist = artSeeds[i].artist;
      const artistId = artists.find((artist) => {
        return artist.name === currentArtist
      })?._id

      artSeeds[i].artist = artistId;

      const art = await Art.create(artSeeds[i]);
      const artist = await Artist.findOneAndUpdate(
        { _id: artistId },
        {
          $addToSet: {
            art: art._id,
          },
        },
        {
          new: true
        }
      );
      console.log(artist);
      console.log(art);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
