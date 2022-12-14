const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("comments");
    },

    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("comments");
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
      const user = await User.create({ username, email, password});
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

    // Add Comment
    addComment: async (parent, { Text }, context) => {
      if (context.user) {
        const comment = await Comment.create({
          Text,
          
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { comments: comment._id } }
        );

        return comment;
      }
      throw new AuthenticationError('You need to be logged in!');
    },


    // Set up mutation so a logged in user can only remove their user and no one else's
    // Add a third argument to the resolver to access data in our `context`
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
