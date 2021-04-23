import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AuthenticationError, ApolloError } from 'apollo-server-express';

import { User } from '../../database/models';

export default {
  Mutation: {
    async register(root, args, context) {
      const { name, email, password } = args.input;
      const user = await User.findOne({ where: { email } });
      if (user) throw new ApolloError('Email already exists', 'EMAIL_CONFLICT');
      return User.create({ name, email, password });
    },

    async login(root, { input }, context) {
      const { email, password } = input;
      const user = await User.findOne({ where: { email } });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ id: user.id }, 'mySecret');
        console.log(user, user.toJSON());
        return { ...user.toJSON(), token };
      }
      throw new AuthenticationError('Invalid credentials')
    }
  }
}