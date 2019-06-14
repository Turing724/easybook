import React from 'react';
import Header from './Header';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
