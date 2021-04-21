import { Cat } from './models/Cat';

export const resolvers = {
  Query: {
    hello: () => 'relou o caralho estragou foi tudo',
    cats: () => Cat.find(),
    cat: async (_, { name }) => await Cat.findOne({ name }),
  },

  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name });
      await kitty.save();
      console.log(kitty);
      return kitty;
    }
  }
}