"use client"
import { useMemo } from "react"
import {
  CaretSortIcon,
} from "@radix-ui/react-icons"
import { ArrowDown, ArrowUp } from "lucide-react"
import {
  ColumnDef,
  FilterFn,
  RowData,
} from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { useResultsStore } from "@/context/results.store"
import { formatDateToString, tiemestampToDate } from "@/lib/utils"
import { BasicResult } from "@/schema/results"
import ResultOptions from "./options"
import { DataTable } from "@/components/shared/data-table"

const columns: ColumnDef<BasicResult>[] = [
  {
    accessorKey: "company",
    header: ({ column }) => {
      return (
        <Button
          variant="tableSort"
          size="tableSort"
          className="text-black fw-[700] text-[15px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Lab Name
          {column.getIsSorted() === false ? (<CaretSortIcon className="h-4 w-4" />)
            : column.getIsSorted() === "asc" ? (<ArrowDown className="h-4 w-4" />) : (<ArrowUp className="h-4 w-4" />)}
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="">{row.getValue("company")}</div>
    ),
  },
  {
    accessorKey: "appointment_examtype",
    header: ({ column }) => {
      return (
        <Button
          variant="tableSort"
          size="tableSort"
          className="text-black fw-[700] text-[15px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Test
          {column.getIsSorted() === false ? (<CaretSortIcon className="h-4 w-4" />)
            : column.getIsSorted() === "asc" ? (<ArrowDown className="h-4 w-4" />) : (<ArrowUp className="h-4 w-4" />)}
        </Button>
      )
    },
    cell: ({ row }) => <div className="">{row.getValue("appointment_examtype")}</div>,
  },
  {
    accessorKey: "appointment_date",
    header: ({ column }) => {
      return (
        <Button
          variant="tableSort"
          size="tableSort"
          className="text-black fw-[700] text-[15px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Service Date
          {column.getIsSorted() === false ? (<CaretSortIcon className="h-4 w-4" />)
            : column.getIsSorted() === "asc" ? (<ArrowDown className="h-4 w-4" />) : (<ArrowUp className="h-4 w-4" />)}
        </Button>
      )
    },
    cell: ({ row }) => <div className="">{formatDateToString(row.getValue("appointment_date"))}</div>,
    sortingFn: "datetime",
  },
  {
    accessorKey: "result_date",
    header: ({ column }) => {
      return (
        <Button
          variant="tableSort"
          size="tableSort"
          className="text-black fw-[700] text-[15px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Result Date
          {column.getIsSorted() === false ? (<CaretSortIcon className="h-4 w-4" />)
            : column.getIsSorted() === "asc" ? (<ArrowDown className="h-4 w-4" />) : (<ArrowUp className="h-4 w-4" />)}
        </Button>
      )
    },
    cell: ({ row }) => <div className="">{formatDateToString(row.getValue("result_date"))}</div>,
    sortingFn: "datetime",
  },
  {
    accessorKey: "order",
    header: ({ column }) => {
      return (
        <Button
          variant="tableSort"
          size="tableSort"
          className="text-black fw-[700] text-[15px]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order #
          {column.getIsSorted() === false ? (<CaretSortIcon className="h-4 w-4" />)
            : column.getIsSorted() === "asc" ? (<ArrowDown className="h-4 w-4" />) : (<ArrowUp className="h-4 w-4" />)}
        </Button>
      )
    },
    cell: ({ row }) => <div className="">{row.getValue("order")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <ResultOptions row={{ ...row.original }} />
      )
    },
  },
]
const globalFilterFn: FilterFn<BasicResult> = (row, columnId, filterValue, addMeta) => {
  const cells = row.getAllCells()
  const company = cells[0].getValue() as string;
  const appointment_examtype = cells[1].getValue() as string;
  const appointment_date = formatDateToString(cells[2].getValue() as Date);
  const result_date = formatDateToString(cells[3].getValue() as Date);
  const orderId = cells[4].getValue() as string;
  return (company.toLowerCase().includes(String(filterValue).toLowerCase()) ||
    appointment_examtype.toLowerCase().includes(String(filterValue).toLowerCase()) ||
    appointment_date.toLowerCase().includes(String(filterValue).toLowerCase()) ||
    result_date.toLowerCase().includes(String(filterValue).toLowerCase()) ||
    orderId.toLowerCase().includes(String(filterValue).toLowerCase())
  )
}

export function DataTableResults() {
  const { results, fetching } = useResultsStore()
  const data = useMemo(() => {
    return results.filter(el => {
      return Number(el.appointment_date) > 0 && (el.result_date?.length ?? 0) > 0
    }).map(el => {
      let company = el.company ?? "";
      let appointment_date = tiemestampToDate(Number(el.appointment_date));
      let result_date = new Date(String(el.result_date ?? ""))
      let appointment_examtype = el.appointment_examtype ?? ""
      let basicEl = {
        id: el.id,
        company,
        appointment_examtype,
        appointment_date,
        result_date,
        order: `LF${el.id}`,
        type: el.result_type ?? "",
        result_count: el.result_count ?? 1,
      } as BasicResult
      return basicEl
    });
  }, [results])
  return <DataTable 
    classNames={
      {
        container:"border-b table-scroll-horizontal",
        headerRow:"bg-[#f5effc] hover:bg-[#efe4fb] tr-rounded overflow-hidden",
        headerCell: "h-[58px]"        
      }
    }
    showHeader 
    isLoading={fetching} 
    data={data} 
    columns={columns as ColumnDef<RowData>[]} 
    globalFilterFn={globalFilterFn as FilterFn<RowData>} />
}