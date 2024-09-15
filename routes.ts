/**
 * An array of routes that are accessible to the public.
 * these routes are not required to be authenticated.
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/social",
  "/templates",
];
/**
 * An array of routes that are only accessible to authenticated users.
 * these routes are required to be authenticated.
 * @type {string[]}
 */
export const authRoutes = ["/sign-in", "/sign-up"];
/**
 * The prefix for API Authentication routes.
 * Routes that are prefixed with this will be used for athentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";
/**
 * The default redirect path after a successful login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
