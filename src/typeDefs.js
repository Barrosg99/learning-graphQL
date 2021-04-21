import { gql } from "apollo-server-core";

export const typeDefs = gql`
  type Query {
      hello: String!
      cats: [Cat!]!
      cat(name: String!): Cat!
  }

  type Cat {
    id: ID!
    name: String! 
  }

  type Mutation {
    createCat(name: String!): Cat!
  }
`;