import { useState, useEffect, useRef } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/Navbar.tsx";
import { DotLoader } from "@/components/ui/dot-loader";

const ArrowDown = [
  [1, 2, 3, 4, 5, 9, 10, 11, 17], // full top triangle
  [8, 9, 10, 11, 12, 16, 17, 18, 24], // moved down 1 row
  [15, 16, 17, 18, 19, 23, 24, 25, 31], // moved down 2 rows
  [22, 23, 24, 25, 26, 30, 31, 32, 38], // moved down 3 rows
  [29, 30, 31, 32, 33, 37, 38, 39, 45], // moved down 4 rows
  [45], // tip only bottom row // still tip (hold frame)
  [], // empty frame, disappear
];
const ArrowUp = [
  [], // empty frame (arrow disappeared)
  [45], // tip only top row (arrow tip)
  [29, 30, 31, 32, 33, 37, 38, 39, 45], // next row (expanding base)
  [22, 23, 24, 25, 26, 30, 31, 32, 38],
  [15, 16, 17, 18, 19, 23, 24, 25, 31],
  [8, 9, 10, 11, 12, 16, 17, 18, 24],
  [1, 2, 3, 4, 5, 9, 10, 11, 17], // full base row (bottom)
];

const clicked = [
  [
    0, 2, 4, 6, 20, 34, 48, 46, 44, 42, 28, 14, 8, 22, 36, 38, 40, 26, 12, 10,
    16, 30, 24, 18, 32,
  ],
  [
    1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
    41, 43, 45, 47,
  ],
  [8, 22, 36, 38, 40, 26, 12, 10, 16, 30, 24, 18, 32],
  [9, 11, 15, 17, 19, 23, 25, 29, 31, 33, 37, 39],
  [16, 30, 24, 18, 32],
  [17, 23, 31, 25],
  [24],
  [17, 23, 31, 25],
  [16, 30, 24, 18, 32],
  [9, 11, 15, 17, 19, 23, 25, 29, 31, 33, 37, 39],
  [8, 22, 36, 38, 40, 26, 12, 10, 16, 30, 24, 18, 32],
  [
    1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
    41, 43, 45, 47,
  ],
  [],
];

const itemDuration = 150;

export const Route = createRootRoute({
  component: () => {
    const [frames, setFrames] = useState(ArrowDown);
    const [isClicked, setIsClicked] = useState(false);
    const dotLoaderRef = useRef<HTMLDivElement>(null);

    // Handler for click on DotLoader
    function handleDotLoaderClick() {
      setIsClicked(true);
      setFrames(clicked);
      setTimeout(() => {
        setIsClicked(false);
        setFrames(ArrowDown);
      }, 1000);
    }

    useEffect(() => {
      const checkOverlap = () => {
        if (isClicked) return; // Ignore overlap check while clicked animation is active

        const dotLoaderEl = dotLoaderRef.current;
        const footerEl = document.getElementById("footer");

        if (!dotLoaderEl || !footerEl) return;

        const dotRect = dotLoaderEl.getBoundingClientRect();
        const footerRect = footerEl.getBoundingClientRect();

        const isOverlapping =
          dotRect.left < footerRect.right &&
          dotRect.right > footerRect.left &&
          dotRect.top < footerRect.bottom &&
          dotRect.bottom > footerRect.top;

        setFrames(isOverlapping ? ArrowUp : ArrowDown);
      };

      let animationFrameId: number;

      const loop = () => {
        checkOverlap();
        animationFrameId = requestAnimationFrame(loop);
      };
      loop();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }, [isClicked]); // Re-run effect when isClicked changes

    return (
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

          <div
            ref={dotLoaderRef}
            className="fixed bottom-4 right-8 transform -translate-x-1/2 z-100"
          >
            <DotLoader
              frames={frames}
              className="gap-px rounded-lg cursor-pointer"
              duration={itemDuration}
              dotClassName="bg-muted [&.active]:bg-primary size-1.5"
              onClick={handleDotLoaderClick}
            />
          </div>
        </ThemeProvider>
      </>
    );
  },
});
