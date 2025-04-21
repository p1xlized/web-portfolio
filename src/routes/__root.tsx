import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/Navbar.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="flex align-middle justify-center p-2 sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="mt-4">
          <Outlet />
          <TanStackRouterDevtools />
        </div>
      </ThemeProvider>
    </>
  ),
});
