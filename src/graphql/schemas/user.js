import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    posts: [Post!]
  }

  extend type Mutation {
    register(input: RegisterInput!): RegisterResponse
    login(input: LoginInput!): LoginResponse
  }

  type RegisterResponse {
    id: ID!
    name: String!
    email: String!
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type LoginResponse {
    id: ID!
    name: String!
    email: String!
    token: String!
  }
`