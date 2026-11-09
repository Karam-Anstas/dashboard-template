"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24, // Creates a smooth, bounce-free finish
        },
    },
};

const scrollItemVariants = {
    hidden: {
        opacity: 0,
        y: 30, // Items start slightly pushed down
        scale: 0.95, // Slightly smaller
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 25,
        },
    },
};

export function TodoList() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
    const [todoItems, setTodoItems] = useState([
        { id: "item1", label: "Item 1", completed: false },
        { id: "item2", label: "Item 2", completed: false },
        { id: "item3", label: "Item 3", completed: false },
        { id: "item4", label: "Item 4", completed: false },
        { id: "item5", label: "Item 5", completed: false },
        { id: "item6", label: "Item 6", completed: false },
        { id: "item7", label: "Item 7", completed: false },
        { id: "item8", label: "Item 8", completed: false },
        { id: "item9", label: "Item 9", completed: false },
        { id: "item10", label: "Item 10", completed: false },
        { id: "item11", label: "Item 11", completed: false },
        { id: "item12", label: "Item 12", completed: false },
        { id: "item13", label: "Item 13", completed: false },
        { id: "item14", label: "Item 14", completed: false },
        { id: "item15", label: "Item 15", completed: false },
    ]);

    const toggleComplete = (id: string) => {
        setTodoItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item,
            ),
        );
    };

    return (
        <div className="">
            <h1 className="text-lg text-primary font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger
                    render={
                        <Button variant={"outline"} className="w-full">
                            <CalendarIcon />
                            {date ? (
                                format(date, "PPP")
                            ) : (
                                <span>Pick a date</span>
                            )}
                        </Button>
                    }
                />
                <PopoverContent className="p-0 w-auto">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date);
                            setOpen(false);
                        }}
                        className="rounded-lg border"
                        captionLayout="dropdown"
                    />
                </PopoverContent>
            </Popover>
            {/* List */}
            <ScrollArea className="h-87.5 mt-4 pr-3">
                <div className="flex flex-col gap-4 m-2">
                    {todoItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={scrollItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: false,
                                margin: "-10px",
                            }}
                            whileHover={{ scale: 1.015, x: 2 }}
                            whileTap={{ scale: 0.99 }}
                            animate={{ opacity: item.completed ? 0.5 : 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="p-4 transition-colors hover:bg-accent/40">
                                <div className="flex items-center gap-4">
                                    <Checkbox
                                        id={item.id}
                                        checked={item.completed}
                                        onCheckedChange={() =>
                                            toggleComplete(item.id)
                                        }
                                    />
                                    <label
                                        htmlFor={item.id}
                                        className={`text-sm select-none cursor-pointer transition-all duration-300 ${
                                            item.completed
                                                ? "line-through text-muted-foreground/60"
                                                : "text-muted-foreground"
                                        }`}
                                    >
                                        {item.label}
                                    </label>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}
