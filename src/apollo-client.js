import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: `https://graphql.prepr.io/${process.env.PREPR_ACCESS_TOKEN || 'ac_e54beab08406dd41fcdead2bef10364f442559f67fe86ebb0ac7aa6e3a1a4605'}`,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;