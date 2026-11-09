"use client";

import { logInSchema } from "@/app/schemas/auth";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function LogInPage() {
    const form = useForm({
        resolver: zodResolver(logInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (): void => {
        console.log("yooo");
    };

    return (
        <main className="relative min-h-screen w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <WavyBackground waveWidth={100} speed="fast"/>
            </div>
            <div className="relative z-10 flex min-h-screen w-full items-center justify-center p-4">
                <Card className="w-full max-w-md bg-background/80">
                    <CardHeader>
                        <CardTitle className="text-center">Log-In</CardTitle>
                        <CardDescription className="text-center pb-2">
                            Wellcome Back.
                        </CardDescription>
                        <Separator />
                        <CardContent className="pt-3">
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <FieldGroup className="gap-y-4">
                                    <Controller
                                        name="email"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field>
                                                <FieldLabel className="px-2">
                                                    E-mail:
                                                </FieldLabel>
                                                <Input
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                    placeholder="john@example.com"
                                                    type="email"
                                                    {...field}
                                                />
                                                {fieldState.invalid && (
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                    >
                                                        <FieldError
                                                            errors={[
                                                                fieldState.error,
                                                            ]}
                                                        />
                                                    </motion.div>
                                                )}
                                            </Field>
                                        )}
                                    />
                                    <Controller
                                        name="password"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field>
                                                <FieldLabel className="px-2">
                                                    Password:
                                                </FieldLabel>
                                                <Input
                                                    aria-invalid={
                                                        fieldState.invalid
                                                    }
                                                    placeholder="********"
                                                    type="password"
                                                    {...field}
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
                                    <Button className=" text-white">
                                        Log-in
                                    </Button>
                                </FieldGroup>
                            </form>
                        </CardContent>
                    </CardHeader>
                </Card>
            </div>
        </main>
    );
}
