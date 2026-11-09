"use client";

import { Controller, useForm } from "react-hook-form";
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "./ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/app/schemas/editUserSchema";
import z from "zod";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "./ui/field";
import { Input } from "./ui/input";
import {
    Card,
    CardContent,
    CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

export function EditUser() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "John Doe",
            email: "john.doe@example.com",
            phoneNumber: "+1 234 567 890",
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
    }

    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="mb-4">Edit User</SheetTitle>
                <SheetDescription render={<div />}>
                    <Card className="w-full sm:max-w-md">
                        <CardContent>
                            <form
                                id="form-rhf-demo"
                                onSubmit={form.handleSubmit(onSubmit)}
                            >
                                <FieldGroup>
                                    <Controller
                                        name="username"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field
                                                data-invalid={
                                                    fieldState.invalid
                                                }
                                            >
                                                <FieldLabel htmlFor="form-rhf-demo-username">
                                                    Username
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="form-rhf-demo-username"
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                    autoComplete="off"
                                                />
                                                {fieldState.invalid && (
                                                    <FieldError
                                                        errors={[
                                                            fieldState.error,
                                                        ]}
                                                    />
                                                )}
                                            </Field>
                                        )}
                                    />
                                    <Controller
                                        name="email"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field
                                                data-invalid={
                                                    fieldState.invalid
                                                }
                                            >
                                                <FieldLabel htmlFor="form-rhf-demo-email">
                                                    Email
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="form-rhf-demo-email"
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                    autoComplete="off"
                                                />
                                                {fieldState.invalid && (
                                                    <FieldError
                                                        errors={[
                                                            fieldState.error,
                                                        ]}
                                                    />
                                                )}
                                            </Field>
                                        )}
                                    />
                                    <Controller
                                        name="phoneNumber"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field
                                                data-invalid={
                                                    fieldState.invalid
                                                }
                                            >
                                                <FieldLabel htmlFor="form-rhf-demo-phone">
                                                    Phone Number
                                                </FieldLabel>
                                                <Input
                                                    {...field}
                                                    id="form-rhf-demo-phone"
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                    autoComplete="off"
                                                />
                                                {fieldState.invalid && (
                                                    <FieldError
                                                        errors={[
                                                            fieldState.error,
                                                        ]}
                                                    />
                                                )}
                                            </Field>
                                        )}
                                    />
                                </FieldGroup>
                            </form>
                        </CardContent>
                        <CardFooter>
                            <Field orientation="horizontal">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => form.reset()}
                                >
                                    Reset
                                </Button>
                                <Button
                                    type="submit"
                                    form="form-rhf-demo"
                                    className=" text-gray-50"
                                >
                                    Submit
                                </Button>
                            </Field>
                        </CardFooter>
                    </Card>
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    );
}
