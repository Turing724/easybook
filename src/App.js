import React from 'react';
import Header from './common/Header';
import { GlobalStyle } from './style.js';
import { Provider } from 'react-redux';
import store from './store';
import { routes } from './router';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            {routes.map(({ path, component, exact }) => {
              return <Route path={path} exact={exact} component={component} key={path} />;
            })}
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
