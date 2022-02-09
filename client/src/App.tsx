import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./pages/HomeScreen";
import ProjectScreen from "./pages/ProjectScreen";
import SupportScreen from "./pages/SupportScreen";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="/project" element={<ProjectScreen />} />
        <Route path="/support" element={<SupportScreen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
