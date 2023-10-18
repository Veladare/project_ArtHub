const { AuthenticationError } = require('apollo-server-express');
const { User, Art, Artist } = require('../models');
const { signToken } = require('../utils/auth');
const {Types} = require('mongoose');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
    },

    me: async (_, args, context) => {
      const user = await User.findById(context.user._id,);

      return user;
    },
    // thoughts: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Thought.find(params).sort({ createdAt: -1 });
    // },
    // thought: async (parent, { thoughtId }) => {
    //   return Thought.findOne({ _id: thoughtId });
    // },
    arts: async () => {
      return Art.find().populate('artist')
    },
    art: async (parent, { artId }) => {
      return Art.findOne({ _id: artId }).populate('artist');
    },
    artists: async () => {
      return Artist.find().populate('art')  
    },
    artist: async (parent, { artistId }) => {
      return Artist.findOne({ _id: new Types.ObjectId(artistId) }).populate('art');
    }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
      updateUserEmail: async (_, { newEmail }, context) => {
        const user = await User.findByIdAndUpdate(context.user._id, { email: newEmail }, { new: true });
  
        return user;

      },
    },
  };



module.exports = resolvers;
