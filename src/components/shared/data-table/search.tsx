import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const TableSearch = ({
  globalFilter,
  setGlobalFilter
}: {
  globalFilter: string;
  setGlobalFilter: (value: string) => void
}) => {
  return <div className="flex items-center py-4 relative border-b">
    <Input
      placeholder="Search test name, status, LFID #..."
      value={globalFilter}
      onChange={event => {
        setGlobalFilter(event.target.value)
      }}
      className="h-[58px] fw-[700] text-[14px] text-[#221f4c] placeholder:text-[#221f4c] rounded-[15px] pt-[10px] pl-[20px] pr-[10px]"
    />
    <div className="absolute right-[10px] bg-[#502e90] rounded w-[38px] h-[38px] flex justify-center items-center">
      <Search className="h-6 w-6 text-white" />
    </div>
  </div>
}
export {
  TableSearch
}