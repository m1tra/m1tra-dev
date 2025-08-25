"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/shadcn/tooltip";
import StackIcons from "@/constants/stack-icon";

export default function RoadMap() {
  return (
    <div className="relative grid grid-cols-3 sm:grid-cols-4 w-[400px]  gap-1   ">
      {StackIcons.map(({ title, tag, icon }) => {
        const Icon = icon;
        return (
          <Tooltip key={title}>
            <TooltipTrigger>
              <Icon className="w-[90px] h-[90px] text-white" />
            </TooltipTrigger>
            <TooltipContent>
              <p>{`${title} — ${tag}`}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
