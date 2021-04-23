import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { AuthenticationError, ApolloError } from 'apollo-server-express';

import { User } from '../../database/models';
import { Session } from '../../models/Session';

export default {
  Mutation: {
    async register(_, args) {
      const { name, email, password } = args.input;
      const user = await User.findOne({ where: { email } });
      if (user) throw new ApolloError('Email already exists', 'EMAIL_CONFLICT');
      return User.create({ name, email, password });
    },

    async login(_, { input }) {
      const { email, password } = input;
      const user = await User.findOne({ where: { email } });
      if (user && bcrypt.compareSync(password, user.password)) {
        const session = new Session({ userId: user.id });
        await session.save();
        const token = jwt.sign({ id: session['_id'] }, 'mySecret');
        return { ...user.toJSON(), token };
      }
      throw new AuthenticationError('Invalid credentials')
    }
  }
}