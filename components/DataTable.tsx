"use client";

import { ColumnFiltersState, ColumnVisibilityState, SortingState, useTable, type ColumnDef, type RowData } from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";

import { features, type DataTableFeatures } from "@/app/(dashboard)/users/data-table"
import { Button } from "./ui/button";

interface DataTableProps<TData extends RowData> {
    columns: ColumnDef<DataTableFeatures, TData>[];
    data: TData[];
}

export function DataTable<TData extends RowData>({
    columns,
    data,
}: DataTableProps<TData>) {
      const table = useTable({
        features,
        data,
        columns,
      })

    const router = useRouter();

    return (
        <div>
            <div className="overflow-hidden rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : (
                                                <table.FlexRender
                                                    header={header}
                                                />
                                            )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    className="cursor-pointer select-none"
                                    onClick={() => router.push(`/users/${row.original.id}`)}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            <table.FlexRender cell={cell} />
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            <div className="flex items-center justify-center space-x-3 py-4">
                {(["previous", "next"] as const).map((dir) => {
                    const isNext = dir === "next";
                    const canClick = isNext
                        ? table.getCanNextPage()
                        : table.getCanPreviousPage();
                    const onClick = () =>
                        isNext ? table.nextPage() : table.previousPage();

                    return (
                        <motion.div
                            key={dir}
                            whileHover={canClick ? { scale: 1.05 } : {}}
                            whileTap={canClick ? { scale: 0.92 } : {}}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 15,
                            }}
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={onClick}
                                disabled={!canClick}
                                className="relative overflow-hidden bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white capitalize text-xs h-8 px-4 rounded-md transition-all duration-300 disabled:opacity-30"
                            >
                                {dir}
                            </Button>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
