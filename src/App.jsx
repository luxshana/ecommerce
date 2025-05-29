import { Routes, Route } from 'react-router-dom'
import MainLayout from "./components/layout/MainLayout"
import Home from "./pages/Home"
import ProductList from './pages/ProductList'
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
