"use client";

import { createColumnHelper } from "@tanstack/react-table";
import { type DataTableFeatures } from "./data-table";
import { cn } from "@/lib/utils";

export type User = {
    id: string | number;
    username: string;
    email: string;
    createdAt: string;
    status: "verified" | "unverified";
};

const columnHelper = createColumnHelper<DataTableFeatures, User>();

export const columns = columnHelper.columns([
    columnHelper.accessor("id", {
        header: "ID",
    }),
    columnHelper.accessor("username", {
        header: "Username",
    }),
    columnHelper.accessor("email", {
        header: "Email",
    }),
    columnHelper.accessor("createdAt", {
        header: "Created-At",
    }),
    columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => {
            const status = info.getValue();
            const isVerified = status === "verified";

            return (
                <span
                    className={cn(
                        "capitalize font-medium rounded-md p-1 border",
                        isVerified
                            ? " bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/20 border-emerald-500/20"
                            : "bg-destructive/15 text-destructive hover:bg-destructive/20 border-destructive/20"
                    )}
                >
                    {status}
                </span>)
        }
    }),
]);
