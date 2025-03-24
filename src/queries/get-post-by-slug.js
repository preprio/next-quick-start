import { gql } from "@apollo/client";

export const GetPostBySlug = gql`
    query ($slug: String) {
        Post (slug: $slug) {
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
    }
`