import Link from "next/link";
import { DataTableResults } from "./_components/table-results";
import { CardTable } from "@/components/shared/card";
import { TitleActionBooking } from "@/components/shared/section";

export default function Areas() {
  return <div className="page-content">
    <TitleActionBooking
      title={<h2 className="fw-[700] mb-2 text-xl md:text-2xl">All Results</h2>}
      subtitle={<p className="text-sm  md:text-md">Would you like to contact customer support team?</p>}
      subaction={<Link href="#" className="underline-link">Contact Customer Support</Link>}
      action={<Link href="#" className="btn-default font-bold">Book an appointment</Link>}
    />
    <CardTable>
      <DataTableResults/>
    </CardTable>
  </div>
}