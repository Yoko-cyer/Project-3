const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("comments");
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate("comments");
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("comments");
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    // register a new user
    addUser: async (parent, { username, email, password }) => {
      const user = await user.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    // FIX
    addIntroduction: async (parent, { userId, introduction }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },
          {
            $addToSet: { introductions: introduction },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their user and no one else's
    deleteMyAccount: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  //  Set up mutation so a logged in user can only edit their's and no one else's
   updateMyAccount: async (parent, args, context) => {
    if (context.user) {
      return User.findOneAndUpdate({ _id: context.user._id });
    }
    throw new AuthenticationError('You need to be logged in!');
  },
  
  },
};

module.exports = resolvers;
