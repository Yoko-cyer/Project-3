const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    phonenumber: String
    introduction: String
   
    comments: [Comment]
  }
  type Comment{
    text: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(Text: String!):Comment
    # addIntroduction(userId: ID!, introduction: String!): User
    deleteMyAccount: User
    updateUser(phonenumber: String!, introduction: String!): User
   }
`;

module.exports = typeDefs;
