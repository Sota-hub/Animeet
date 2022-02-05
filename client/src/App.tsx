import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
    </Routes>
  );
};

export default App;
