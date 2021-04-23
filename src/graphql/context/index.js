import jwt from 'jsonwebtoken';
import { AuthenticationError } from 'apollo-server-express';

import { User } from '../../database/models';
import { Session } from '../../models/Session';

const verifyToken = async (token) => {
  try {
    if (!token) return null;
    const { id } = jwt.verify(token, 'mySecret');
    const session = await Session.findById(id);
    const { userId } = session;
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    throw new AuthenticationError(error.message);
  }
};

export default async function ({ req }) {
  const token = (req.headers && req.headers.authorization) || '';
  const user = await verifyToken(token);
  return { user };
}
