// ./services/apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: `https://graphql.prepr.io/${process.env.PREPR_ACCESS_TOKEN}`,
    cache: new InMemoryCache(),
});

export default client;