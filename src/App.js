import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import InputPage from "./pages/InputPage";
import GlobalStyles from "./styles/global-styles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={"/input-page"} element={<InputPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
