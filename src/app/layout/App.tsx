import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/product/components/ProductDetails";
import ProductPage from "../../features/product/ProductPage";
import { Product } from "../model/product";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])

  const paletteType = isDarkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: isDarkMode ? '#121212' : '#eaeaea'
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
        <>
          <CssBaseline />
          <NavBar isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
          <Container>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/product' element={<ProductPage products={products} />} />
              <Route path='/product/:id' element={<ProductDetails />} />
            </Routes>
          </Container>
        </>
      }
    />
  );
}

export default App;
