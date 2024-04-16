import "./App.css";

import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
//import { PrivateRoute } from "./utils/ProtectedRoute";
import { PublicRoute } from "./utils/PublicRoute";
import ProfList from "./Pages/ProfList/ProfList";
import { useSelector } from "react-redux";
//import NavBar from "./Components/NavBar/NavBar";
import DashboardAdmin from "./Pages/Admin/DashboardAdmin";
import StudentList from "./Pages/StudentList/StudentList";
import Courses from "./Pages/Courses/Courses";
import StudentCourses from "./Pages/StudentCourses/StudentCourses";
import AddNotes from "./Pages/AddNotes/AddNotes";
import HomePage from "./Pages/GeneralPage/HomePage";

function App() {
  const { user } = useSelector((state) => state.LoginReducer);

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute user={user}>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/dashboard-admin"
          element={
            <PublicRoute user={user}>
              <DashboardAdmin />
            </PublicRoute>
          }
        />
        <Route
          path="/ProfList"
          element={
            <PublicRoute user={user}>
              <ProfList />
            </PublicRoute>
          }
        />
        <Route
          path="/StudentList"
          element={
            <PublicRoute user={user}>
              <StudentList />
            </PublicRoute>
          }
        />
        <Route
          path="/Courses"
          element={
            <PublicRoute user={user}>
              <Courses />
            </PublicRoute>
          }
        />
        <Route
          path="/StudentCourses"
          element={
            <PublicRoute user={user}>
              <StudentCourses />
            </PublicRoute>
          }
        />
        <Route
          path="/AddNotes"
          element={
            <PublicRoute user={user}>
              <AddNotes />
            </PublicRoute>
          }
        />
          <Route
          path="/HomePage"
          element={
            <PublicRoute user={user}>
              <HomePage />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
