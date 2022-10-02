import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "../../components/NavBar";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/product/ProductDetailsPage";
import ProductPage from "../../features/product/ProductPage";
import "react-toastify/dist/ReactToastify.css"
import NotFoundPage from "../errors/NotFoundPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  const paletteType = isDarkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: isDarkMode ? "#121212" : "#eaeaea"
      }
    }
  })

  function handleThemeChange() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <ThemeProvider
      theme={theme}
      children={
        <><ToastContainer position="bottom-right" hideProgressBar theme="colored" />
          <CssBaseline />
          <NavBar isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </Container>
        </>
      }
    />
  );
}

export default App;
