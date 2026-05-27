'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github } from "@/components/icons/social-media";
import { Button } from "../ui/button";

export default function GithubTooltip() {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Follow me on GitHub"
            role="link"
          >
            <Github className="w-4 h-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className="bg-neutral-900 text-neutral-50 border-neutral-800 px-2 py-1 text-xs"
          role="tooltip"
          showArrow={true}
        >
          Follow me on Github
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

