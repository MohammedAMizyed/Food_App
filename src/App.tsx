import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Shope from "./pages/Shope"
import Contact from "./pages/Contact"
import Layout from "./components/layout/layout"
import Meal from "./pages/Meal"
import Cart from "./pages/Cart"
import Favorite from "./pages/Favorite"

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route element={<About />} path="/about" />
          <Route element={<Shope />} path="/shope" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Meal />} path="/meal/:id" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Favorite />} path="/favorite" />
        </Route>
      </Routes>
    </>
  )
}

export default App
