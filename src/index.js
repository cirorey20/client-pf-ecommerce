import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ThemeContextProvider from "./hooks/useTheme";

const stripePromise = loadStripe(
  "pk_test_51LVJYJHeLDBhzI8L9l0UDBeiCVju6HCha7U4so3Cj3eCrK0rykfVetJ7P8VJ0fj7zYe7sLtuUoiX1ltRPUVNQq6P00LhZCTzH6"
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Auth0Provider
          domain="dev-49f4bxd9.us.auth0.com"
          clientId="CzgIJ18eGYa0CEtp8r3peejP05X5Xggi"
          redirectUri={window.location.origin}
        >
          <Elements stripe={stripePromise}>
            <ThemeContextProvider>
              <App />
            </ThemeContextProvider>
          </Elements>
        </Auth0Provider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import store from './store'
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
