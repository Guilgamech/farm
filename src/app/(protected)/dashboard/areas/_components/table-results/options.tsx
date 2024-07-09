"use client"
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { BasicResult } from "@/schema/results"
import { useState } from "react";
import { useResultsDetailStore } from "@/context/result-detail.store";
import { ShareModal, ResultModal } from "@/components/shared/modal";

export default function ResultOptions({ row }: { row: BasicResult }) {
  const [open, setOpen] = useState<boolean>(false);
  const { setSelected  } = useResultsDetailStore();
  return <div className="w-[110px] h-[43px] relative">
    <Popover open={open} onOpenChange={(open) => {
      setOpen(open)
      if (open) {
        setSelected({ type: row.type as "uploaded_result" | "appointment_result", pec_event_id: row.id, result_count: row.result_count ?? 1 })
      }
    }}>
      <PopoverTrigger className="options-trigger" asChild>
        <Button variant="tableOption" size="tableOption"><span>Options</span>
          <span className="transition-transform duration-300 option-arrow"><ChevronDown className="w-5 h-5" /></span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[110px] border-blueSemidarkAccent">
        <ul className="flex flex-col gap-[10px] pl-0 m-0 ">
          <ResultModal type={row.type as "uploaded_result" | "appointment_result"} result_count={row.result_count} pec_event_id={row.id}>
            <li className="text-[#4d3299] text-[12px] hover:underline hover:cursor-pointer">View results</li>
          </ResultModal>
          <ShareModal>
            <li className="text-[#4d3299] text-[12px] hover:underline hover:cursor-pointer">Share</li>
          </ShareModal>          
          <li className="text-[#4d3299] text-[12px] hover:underline hover:cursor-pointer">Delete</li>
        </ul>
      </PopoverContent>
    </Popover>
  </div>
}