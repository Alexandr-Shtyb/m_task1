import { Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";
import { RoutesApp } from "../../routes/routes";

const App = () => {
  return (
    <Routes>
      <Route path={RoutesApp.Main} element={<MainPage />} />
    </Routes>
  );
};

export default App;
