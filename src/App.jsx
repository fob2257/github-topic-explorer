import React from 'react';

import ApolloProvider from './graphql';
import AppComponent from './components/App/App';

function App() {
  return (
    <ApolloProvider>
      <AppComponent />
    </ApolloProvider>
  );
}

export default App;
