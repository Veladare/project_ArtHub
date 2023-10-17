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
    artist(artistId: $artistId) {
      _id
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

export const QUERY_ARTIST_All = gql`
query Artist {
  artists {
    _id
    name
    style
    bio
  }
}`

export const QUERY_ART_ALL = gql`
query Query {
  arts {
    _id
    title
    description
    artist {
      _id
      name
      style
    }
  }
}`