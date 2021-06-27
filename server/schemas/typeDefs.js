const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    bookCount: int
    savedBooks: [Book]
}
type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}
type Auth {
    token ID: ID!
    user: User
}

type Query {
    me: User
}

type BookInput {
    bookID: String
    authorgs: [String]
    description: String
    title: String
    image: String
    link: String

}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(booKData: BookInput!):User
    removeBook(bookId; ID!)l User
}
`;




module.exports = typeDefs;