import "./App.css";

import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";
//import { PrivateRoute } from "./utils/ProtectedRoute";
import { PublicRoute } from "./utils/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./Pages/Admin/Dashboard";
import AddGroup from "./Pages/Admin/ManageGroups/AddGroup";
import Layout from "./Pages/Layout";
import GroupList from "./Pages/Admin/ManageGroups/GroupsList";
import EditGroup from "./Pages/Admin/ManageGroups/EditGroup";
import SubjectsList from "./Pages/Admin/ManageSubjects/SubjectsList";
import AddSubject from "./Pages/Admin/ManageSubjects/AddSubject";
import EditSubject from "./Pages/Admin/ManageSubjects/EditSubject";
import StudentsList from "./Pages/Admin/ManageStudents/StudentsList";
import AddStudents from "./Pages/Admin/ManageStudents/AddStudents";
import EditStudents from "./Pages/Admin/ManageStudents/EditStudents";
import EditProfessor from "./Pages/Admin/ManageProfessor/EditProfessor";
import AddProfessor from "./Pages/Admin/ManageProfessor/AddProfessor";
import ProfessorsList from "./Pages/Admin/ManageProfessor/ProfessorsList";
import EventsList from "./Pages/Admin/Events/EventsList";
import AddEvent from "./Pages/Admin/Events/AddEvent";
import EditEvent from "./Pages/Admin/Events/EditEvent";
import { useEffect } from "react";
import { current } from "./redux/actions/Actions";
function App() {
  const { user } = useSelector((state) => state.LoginReducer);
  const routes = [
    {
      path: "/login",
      element: Login,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/dashboard",
      element: Dashboard,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/add-class",
      element: AddGroup,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/classes-list",
      element: GroupList,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/edit-class/:id",
      element: EditGroup,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/subjects-list",
      element: SubjectsList,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/add-subject",
      element: AddSubject,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/edit-subject/:id",
      element: EditSubject,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/students-list",
      element: StudentsList,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/add-student",
      element: AddStudents,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/edit-student/:id",
      element: EditStudents,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/professors-list",
      element: ProfessorsList,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/add-professor",
      element: AddProfessor,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/edit-professor/:id",
      element: EditProfessor,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/event-list",
      element: EventsList,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/add-event",
      element: AddEvent,
      routeType: PublicRoute,
      userType: "",
    },
    {
      path: "/admin/edit-event/:id",
      element: EditEvent,
      routeType: PublicRoute,
      userType: "",
    },
  ];
  const currentPath = window.location.pathname;
  const isLoginPage = currentPath === "/login";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, []);
  return (
    <Layout showNavAndSidebar={!isLoginPage}>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <route.routeType user={route.userType}>
                  <route.element />
                </route.routeType>
              }
            />
          );
        })}
      </Routes>
    </Layout>
  );
}

export default App;
