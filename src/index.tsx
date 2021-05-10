import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/global.scss";
import Routes from "./Routes";
import { Layout } from "./components";
import { ItemsProvider } from "src/context/ItemsProvider";

ReactDOM.render(
  <React.StrictMode>
    <ItemsProvider>
      <Layout>
        <Routes />
      </Layout>
    </ItemsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
