import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import InputPage from "./pages/InputPage";
import GlobalStyles from "./styles/global-styles";
import TestPage from "./pages/TestPage";
import { observer } from "mobx-react";
import Loading from "./pages/Loading";

const App = observer(() => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={"/input-page"} element={<InputPage />} />
        <Route path={"/test-page"} element={<TestPage />} />
        <Route path={"/loading"} element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
});

export default App;
