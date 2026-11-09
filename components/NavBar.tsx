"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";
import { motion } from "motion/react";

export function NavBar() {
    return (
        <nav className="flex p-4 items-center justify-between sticky top-0 bg-background z-10">
            {/* LEFT */}
            <SidebarTrigger />
            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard"
                    className="relative inline-flex items-center px-3 py-1"
                >
                    <motion.span
                        className="text-md font-semibold bg-clip-text text-transparent bg-linear-to-r from-blue-500  via-indigo-400 to-purple-500"
                        animate={{
                            backgroundPosition: [
                                "0% 50%",
                                "100% 50%",
                                "0% 50%",
                            ],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            backgroundSize: "200% 200%",
                        }}
                    >
                        Dashboard
                    </motion.span>
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex shrink-0 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuGroup>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="h-[1.2rem] w-[1.2rem] mr-2" />{" "}
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />{" "}
                                Settings
                            </DropdownMenuItem>
                            <ThemeToggle />
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem variant="destructive">
                                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />{" "}
                                Log-Out
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}
