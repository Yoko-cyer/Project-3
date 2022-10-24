import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query QueryAllUser {
    # what is definded in typeDef
    users {
      _id
      username
      email
      phonenumber
      introduction
      # candolightduties
      # haslicense
      # wanttobabysit
      # howmuchexperience
      # candopickupdropoff
      # covidvaccinated
      # availabledays
      comments {
        text
      }
  }
}
`;

export const QUERY_SINGLE_USER = gql`
  query querySingleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      phonenumber
      introduction
      comments {
        text
      }
    }
}
`;


// export const QUERY_COMMENTS = gql`
//   query getComments {
//     comments {
//       _id
//       thoughtText
//       thoughtAuthor
//       createdAt
//     }
//   }
// `;

