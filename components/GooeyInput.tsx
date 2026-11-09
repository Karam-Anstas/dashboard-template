"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GooeyInputProps {
    placeholder?: string;
    className?: string;
    onChange?: (value: string) => void;
}

export function GooeyInput({
    placeholder = "Search...",
    className,
    onChange,
}: GooeyInputProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (onChange) onChange(e.target.value);
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "relative inline-flex items-center justify-end",
                className,
            )}
        >
            {/* Invisible SVG Filter generating the organic gooey fluid link */}
            <svg className="hidden">
                <defs>
                    <filter id="gooey-split-filter">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="4"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                            result="gooey"
                        />
                        <feComposite
                            in="SourceGraphic"
                            in2="gooey"
                            operator="atop"
                        />
                    </filter>
                </defs>
            </svg>

            {/* Gooey Filter Container */}
            <div
                className="relative flex items-center justify-end gap-2"
                style={{ filter: "url(#gooey-split-filter)" }}
            >
                {/* Input Bar (Splits out to the left when open) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ width: 0, opacity: 0, x: 10 }}
                            animate={{ width: 224, opacity: 1, x: 0 }}
                            exit={{ width: 0, opacity: 0, x: 10 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 24,
                            }}
                            className="h-8 bg-zinc-900 border border-zinc-800 rounded-full flex items-center px-3 overflow-hidden"
                        >
                            <input
                                type="text"
                                value={value}
                                onChange={handleInputChange}
                                placeholder={placeholder}
                                className="w-full bg-transparent text-white placeholder-zinc-400 outline-none text-xs"
                                autoFocus
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    onClick={() => setIsOpen((prev) => !prev)}
                    whileTap={{ scale: 0.92 }}
                    className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-white flex items-center justify-center focus:outline-none cursor-pointer shrink-0 hover:bg-zinc-800 transition-colors"
                    aria-label={isOpen ? "Close Search" : "Open Search"}
                >
                    {isOpen ? (
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <X className="w-4 h-4" />{" "}
                        </motion.div>
                    ) : (
                        <motion.div whileHover={{ scale: 1.2 }}>
                            <Search className="w-4 h-4" />
                        </motion.div>
                    )}
                </motion.button>
            </div>
        </div>
    );
}
