import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;


export const QUERY_ARTIST = gql`
  query artist($artistId: ID!) {
    artist(_id: $artistId) {
      name
      style
      bio
      art {
        _id
        title
      }
    }
  }
`;