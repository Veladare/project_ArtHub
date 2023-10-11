const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Art {
    _id: ID
    name: String
    artist: Artist
    added: Int
    medium: String
    description: String
  }

  type Artist {
    _id: ID
    name: String
    style: String
    bio: String
    art: [Art]
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
