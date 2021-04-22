const { gql } = require("apollo-server-core");

export default gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]
    createdAt: String
  }

  extend type Query {
    getAllPosts: [Post]
    getSinglePost(postId: ID!): Post 
  }

  extend type Mutation {
    createPost(title: String!, content: String!): createPostResponse
  }

  type createPostResponse {
    id: ID!
    title: String!
    content: String!
    createdAt: String!
  }
`