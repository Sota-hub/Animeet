import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./pages/HomeScreen";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
