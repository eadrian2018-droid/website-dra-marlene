import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Treatments from "./pages/Treatments";
import MeetDrMarlene from "./pages/MeetDrMarlene";
import Reviews from "./pages/Reviews";
import ContactPage from "./pages/ContactPage";

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
            path="/treatments"
            element={<Treatments />}
          />

          <Route
            path="/meet-dr-marlene"
            element={<MeetDrMarlene />}
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