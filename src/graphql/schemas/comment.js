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
    createComment(content: String!, postId: ID!): CreateCommentResponse
  }

  type CreateCommentResponse {
    id: ID!
    content: String!
    createdAt: String!
  }
`