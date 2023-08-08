// ./queries/get-article-by-slug.js

import { gql } from "@apollo/client";

export const GetArticleBySlug = gql`
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
