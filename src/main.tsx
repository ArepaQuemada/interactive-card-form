import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css-reset/css-reset.css";
import Layout from "./layout/Layout";
import ThemeProvider from "./theme/Provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </React.StrictMode>
);
