import { Route, Routes } from "react-router-dom"
import "./App.css"
import { LoginPage, ListTutor, EditTutorInfo } from "./pages"

function App() {
  return (
    <>
    {/* <EditTutorInfo></EditTutorInfo> */}
    <ListTutor></ListTutor>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage/>}
        />
      </Routes>
    </>
  )
}

export default App
