import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ href, className }: { href: string, className?: string }) {
  return <div className="flex">
    <Link href={href} className={cn(
      "flex justify-center items-center",
      className ?? ""
    )}>
      <span className="felx relative">
        <img src="/logo.png" alt="LabFinder Logo" className="w-full" />
      </span>
      <span className="sr-only">LabFinder Logo</span>
    </Link>
  </div>
}