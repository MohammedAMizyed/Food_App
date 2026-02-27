import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
