const { AuthenticationError } = require('apollo-server-express');

const { User } = require('../models');

const { signToken } = require('../utils/auth');
/*  greening out as server not testing


const resolvers = {

    //Quary

    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password');
            
          return userData;
        }
  
        throw new AuthenticationError('You are not logged in');
      },
    },


    //Mutation
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError("You don't have the right authentication credentials");
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError("You don't have the right auuthentication credentials");
          }
    
          const token = signToken(user);
          return { token, user };
        },




        saveBook: async (parent, { bookData }, context) => {
          if (context.user) {
            const updatedUser = await User.findByIdAndUpdate(
              { _id: context.user._id },
              { $push: { savedBooks: bookData } },
              { new: true }
            );
    
            return updatedUser;
          }
    
          throw new AuthenticationError("You have to be logged in!");
        },


        removeBook: async (parent, { bookId }, context) => {
          if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { savedBooks: { bookId } } },
              { new: true }
            );
    
            return updatedUser;
          }
    
          throw new AuthenticationError("You have to be logged in!");
        },
      },
    };
    
    module.exports = resolvers;

    */

    