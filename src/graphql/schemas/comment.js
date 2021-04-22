const { gql } = require("apollo-server-core");

export default gql`
  type Comment {
    id: ID!
    content: String!
    author: User!
    post: Post!
    createdAt: String
  }

  extend type Mutation {
    createCommment(content: String!, postId: ID!): CreateCommmentResponse
  }

  type CreateCommmentResponse {
    id: ID!
    content: String!
    createdAt: String!
  }
`