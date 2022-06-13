import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Lobby from "./pages/Lobby";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";
import { store } from "./store";
import { Provider } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route
          path="/SignIn"
          element={
            <div>
              <Header />
              <SignInPage />
            </div>
          }
        />
        <Route
          path="/UserPage"
          element={
            <div>
              <Header />
              <UserPage />
            </div>
          }
        />
        <Route path="/redirect" element={<Navigate to="/UserPage" />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
