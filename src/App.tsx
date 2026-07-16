import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import MeetDrMarlene from "./pages/MeetDrMarlene";
import Treatments from "./pages/Treatments";
import Reviews from "./pages/Reviews";
import ContactPage from "./pages/ContactPage";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/meet-dr-marlene"
            element={<MeetDrMarlene />}
          />

          <Route
            path="/treatments"
            element={<Treatments />}
          />

          <Route
            path="/reviews"
            element={<Reviews />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}