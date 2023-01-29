import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./styles/setting.css";
import App from "./App";
import CapplStore from "./stores/cappl";
import { Provider } from "mobx-react";
import "dotenv/config";
import ReactCatcher from "react-catcher";

const root = ReactDOM.createRoot(document.getElementById("root"));

const cappl = new CapplStore();

if (!window.Kakao.isInitialized()) {
  window.Kakao.init(process.env.REACT_APP_KAKAO_JS_KEY);
}

root.render(
  <ReactCatcher
    fallback={<h1>An Error has occured !!</h1>}
    errorHandler={(error, errorInfo) => {
      const error_message = `error: ${error}, errorInfo: ${JSON.stringify(
        errorInfo
      )}`;
      console.log(error_message);
    }}
  >
    <Provider capplStore={cappl}>
      <App />
    </Provider>
  </ReactCatcher>
);
