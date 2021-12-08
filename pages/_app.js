import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../styles/estilos.css'
import { ApolloProvider } from "@apollo/client"
import client from '../config/apollo'
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client} >
      <Component {...pageProps} />

    </ApolloProvider>

  )

}

export default MyApp