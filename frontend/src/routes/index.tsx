
import MainLayout from "@/layout/_mainLayout";
import
{
  ActivatePage,
  ForgotPassowordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage
} from "@/pages/auth";

import HomePage from "@/pages/home/home-page";
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/activate",
        element: <ActivatePage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassowordPage />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordPage />,
      },
    ]
  },
]);
