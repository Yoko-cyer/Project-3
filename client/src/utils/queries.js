import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      phonenumber
      introduction
      candolightduties
      wanttobabysit
      haslicense
      howmuchexperience
      candopickupdropoff
      covidvaccinated
      availabledays
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
      password
      phonenumber
      introduction
      candolightduties
      wanttobabysit
      haslicense
      howmuchexperience
      candopickupdropoff
      covidvaccinated
      availabledays
      
    }
  }
`;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       name
//       skills
//     }
//   }
// `;

export const QUERY_COMMENTS = gql`
  query getComments {
    comments {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

