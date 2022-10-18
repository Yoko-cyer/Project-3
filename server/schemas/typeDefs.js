const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    phonenumber: String
    introduction: String
    candolightduties: Boolean
    wanttobabysit: Boolean
    haslicense: Boolean
    howmuchexperience: String
    candopickupdropoff: Boolean
    covidvaccinated: Boolean
    availabledays:[ String]
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
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addIntroduction(userId: ID!, introduction: String!): User
    deleteMyAccount: User
    updateMyAccount(phonenumber: String!, wanttobabysit: Boolean!,  howmuchexperience: String!, haslicense: Boolean!, candolightduties: Boolean!, candopickupdropoff: Boolean!, covidvaccinated: Boolean!, availabledays: String!): User
   }
`;

module.exports = typeDefs;
