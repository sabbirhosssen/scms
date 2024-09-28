import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DashBoard from "./Layouts/DashBoard";
import Teacher_Dashboard from "./Layouts/Teacher_Dashboard";
import Message_talk from "./components/Dashboard/DashboardStudents/Message_talk";
import Student_Calender from "./components/Dashboard/DashboardStudents/Student_Calender";
import Student_Classroom from "./components/Dashboard/DashboardStudents/Student_Classroom";
import Student_Courses from "./components/Dashboard/DashboardStudents/Student_Courses";
import Student_Home from "./components/Dashboard/DashboardStudents/Student_Home";
import Student_Library from "./components/Dashboard/DashboardStudents/Student_Library";
import "./index.css";
import AdminLogin from "./pages/AdminLogin";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import TeacherLogin from "./pages/TeacherLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard/user",
    element: <DashBoard />,
    children: [
      {
        path: "/dashboard/user",
        element: <Student_Home />,
      },
      {
        path: "calender",
        element: <Student_Calender />,
      },
      {
        path: "classroom",
        element: <Student_Classroom />,
      },
      {
        path: "courses",
        element: <Student_Courses />,
      },
      {
        path: "library",
        element: <Student_Library />,
      },
      {
        path: "messages",
        element: <Message_talk />,
      },
    ],
  },
  {
    path: "/dashboard/teacher",
    element: <Teacher_Dashboard />,
    children: [
      {
        path: "/dashboard/teacher",
        element: <Student_Home />,
      },
      {
        path: "calender",
        element: <Student_Calender />,
      },
      {
        path: "classroom",
        element: <Student_Classroom />,
      },
      {
        path: "courses",
        element: <Student_Courses />,
      },
      {
        path: "library",
        element: <Student_Library />,
      },
      {
        path: "messages",
        element: <Message_talk />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/teacherLogin",
    element: <TeacherLogin />,
  },
  {
    path: "/adminLogin",
    element: <AdminLogin />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
