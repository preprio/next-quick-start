import { gql } from "@apollo/client";

export const GetArticleBySlug = gql`
query ($slug: String) {
   Article (slug: $slug) {
     _id
     title
     content {
       __typename
       ... on Text {
        _id
        body
        text
       }
       ... on Assets {
         items {
          _id
          url
         }
       }
     }
   }
}`