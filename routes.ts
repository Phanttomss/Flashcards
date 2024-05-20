const publicRoutes = [
  "/",
];

const protectedRoutes = [
  "/dashboard",
];

const authRoutes = [
  "/auth/login",
  "/auth/register",
];

const apiAuthPrefix = "/api/auth";

const DEFAULT_LOGIN_REDIRECT = "/dashboard";

export { publicRoutes, protectedRoutes, authRoutes, apiAuthPrefix, DEFAULT_LOGIN_REDIRECT };