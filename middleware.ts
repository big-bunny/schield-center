import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Specify the public routes
  publicRoutes: ["/", "/home", "/about","/gallery", "/Child", "/Program", "/Team"],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
