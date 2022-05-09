import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "store";
import App from 'App';

import 'styles/index.css';
import 'styles/UserStyles.css';
import 'styles/App.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  /*<React.StrictMode>*/
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
/*
  </React.StrictMode>
*/
);
