import { gql } from "@apollo/client";

export const GetPosts = gql`
    query {
        Posts {
            items {
                _id
                _slug
                title
            }
        }
    }
`