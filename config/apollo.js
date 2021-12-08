import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import fetch from "node-fetch";
import { setContext } from "apollo-link-context";

const httpLink = createUploadLink({
  //uri: "https://graphase.auditoriaguerrero.gob.mx/",
  uri: "http://localhost:4000/",
  fetch
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

export default client;
