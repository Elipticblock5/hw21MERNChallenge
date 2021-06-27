import gql from "graphql-tag";

export const GET_MYSELF = gql`
  {
    me {
      _id
      email
      username
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;