import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import CreatePost from "../pages/CreatePost"
import PageNotFound from "../pages/PageNotFound"
import ProtectedRoutes from "./ProtectedRoutes.jsx"

const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="create" element={<ProtectedRoutes> <CreatePost /> </ProtectedRoutes>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  )
}

export default AllRoutes;
