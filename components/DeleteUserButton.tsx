"use client";

import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "./ui/dialog";

export function DeleteUserButton() {
    function handleDelete() {
        console.log("Delete user");
        // call your API here
    }

    return (
        <Dialog>
            <DialogTrigger
                render={
                    <Button variant="destructive">
                        <Trash />
                    </Button>
                }
            />

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete User?</DialogTitle>

                    <DialogDescription>
                        This action cannot be undone. This will permanently
                        delete this user and all of their data.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                    <DialogClose
                        render={<Button variant="outline">Cancel</Button>}
                    />

                    <Button variant="destructive" onClick={handleDelete}>
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
