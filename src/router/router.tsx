import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import RegisterScreen from "../pages/auth/RegisterScreen";
import LoginScreen from "../pages/auth/LoginScreen";
import ForgetPasswordScreen from "../pages/auth/ForgetPasswordScreen";
import ResetPasswordScreen from "../pages/auth/ResetPassword";
import CreateAccountNotification from "../pages/auth/CreateAccountNotification";
import ForgetPasswordNotification from "../pages/auth/ForgetPasswordNotification";
import HomeScreen from "../pages/home/HomeScreen";
import PrivateRoute from "./privateRoute";
import ErrorScreen from "../static/error/ErrorScreen";

export const router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: (
      <PrivateRoute>
        <HomeScreen />
      </PrivateRoute>
    ),
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RegisterScreen />,
      },
      {
        index: true,
        path: "*",
        element: <ErrorScreen />,
      },
      {
        index: true,
        path: "login",
        element: <LoginScreen />,
      },
      {
        index: true,
        path: "login/:token",
        element: <LoginScreen />,
      },
      {
        index: true,
        path: "forgot-password",
        element: <ForgetPasswordScreen />,
      },
      {
        index: true,
        path: "reset-password/:token",
        element: <ResetPasswordScreen />,
      },
      {
        index: true,
        path: "create-account-notification",
        element: <CreateAccountNotification />,
      },
      {
        index: true,
        path: "create-account-notification",
        element: <CreateAccountNotification />,
      },
      {
        index: true,
        path: "forget-password-notification",
        element: <ForgetPasswordNotification />,
      },
    ],
  },
]);
