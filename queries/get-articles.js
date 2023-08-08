// ./queries/get-articles.js

import { gql } from "@apollo/client";

export const GetArticles = gql`
  query {
    Articles {
    items {
      _id
      _slug
      title
    }
  }
 }
`
