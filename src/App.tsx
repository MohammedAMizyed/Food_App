import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Shope from "./Pages/Shope"
import Contact from "./Pages/Contact"
import Layout from "./components/layout/layout"
import Meal from "./Pages/Meal"
import Cart from "./Pages/Cart"
import Favorite from "./Pages/Favorite"

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
