import { gql } from "@apollo/client";

export const GetPostBySlug = gql`
    query ($slug: String) {
        Post (slug: $slug) {
            _id
            title
            cover {
                url(width: 300, height: 250)
            }
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
                        url(width: 300, height: 250)
                    }
                }
            }
        }
    }
`