import { Post } from '../../database/models';
import { AuthenticationError, ApolloError } from 'apollo-server-express';

export default {
  Mutation: {
    async createComment(_, { content, postId }, { user = null }) {
      console.log(content);
      if (!user) {
        throw new AuthenticationError('You must login to create a comment');
      }

      const post = await Post.findByPk(postId);

      if (post) {
        return post.createComment({ content, userId: user.id });
      }
      throw new ApolloError('Unable to create a comment');
    },
  },

  Comment: {
    author(comment) {
      return comment.getUser();
    },
    post(comment) {
      return comment.getPost();
    },
  },
};