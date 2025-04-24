import { PlusIcon } from "lucide-react";
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from "./ui/morphing-dialog";
interface ProjectCardProps {
  title: string;
  description: string;
  img_src: string;
}

export default function ProjectCard({
  title,
  description,
  img_src,
}: ProjectCardProps) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center">
      <MorphingDialog
        transition={{
          type: "spring",
          bounce: 0.05,
          duration: 0.25,
        }}
      >
        <MorphingDialogTrigger
          style={{
            borderRadius: "12px",
          }}
          className="flex max-w-[270px] flex-col overflow-hidden border"
        >
          <MorphingDialogImage
            src={img_src}
            alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
            className="h-48 w-full object-cover"
          />
          <div className="flex flex-grow flex-row items-end justify-between p-2">
            <div>
              <MorphingDialogSubtitle className="">
                {title}
              </MorphingDialogSubtitle>
            </div>
            <button
              type="button"
              className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
              aria-label="Open dialog"
            >
              <PlusIcon size={12} />
            </button>
          </div>
        </MorphingDialogTrigger>
        <MorphingDialogContainer>
          <MorphingDialogContent
            style={{
              borderRadius: "24px",
            }}
            className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
          >
            <MorphingDialogImage
              src={img_src}
              alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
              className="h-full w-full"
            />
            <div className="p-6">
              <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                {title}
              </MorphingDialogTitle>
              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
              >
                <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                  {description}
                </p>
              </MorphingDialogDescription>
            </div>
            <MorphingDialogClose className="text-zinc-50" />
          </MorphingDialogContent>
        </MorphingDialogContainer>
      </MorphingDialog>
    </div>
  );
}
