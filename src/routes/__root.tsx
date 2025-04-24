import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/Navbar.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="sticky top-0 z-50">
          <div className="flex h-0 align-middle justify-center p-2 ">
            <Navbar />
          </div>
        </div>
        <div className="mt-4">
          <Outlet />
          <TanStackRouterDevtools />
        </div>
      </ThemeProvider>
    </>
  ),
});
