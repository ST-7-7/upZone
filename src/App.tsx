import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import Mindset from "./pages/MindsetPage";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Box minH={"100vh"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mindset" element={<Mindset />} />
      </Routes>
    </Box>
  );
}

export default App;
