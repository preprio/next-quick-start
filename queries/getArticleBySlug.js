// ./queries/getArticleBySlug.js

import { gql } from "@apollo/client";

export const GetArticleDetail = gql`
query ($slug: String) {
   Article (slug: $slug) {
     _id
     title
     content {
       __typename
       ... on Text {
         body
         text
       }
       ... on Assets {
         items {
           url
         }
       }
     }
   }
}`
