import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Shope from "./Pages/Shope"
import Contact from "./Pages/Contact"
import Layout from "./Components/layout/layout"
import Meal from "./Pages/Meal"

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
        </Route>
      </Routes>
    </>
  )
}

export default App
