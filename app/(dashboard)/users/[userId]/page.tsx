import { CardList } from "@/components/CardList";
import { DeleteUserButton } from "@/components/DeleteUserButton";
import { EditUser } from "@/components/EditUser";
import { ChartLineMultiple } from "@/components/LIneChart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheck, UserIcon, UsersRound } from "lucide-react";

export default function UserPage({ params }: { params: { userId: string } }) {
    return (
        <div>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink
                            href="/users"
                            className="inline-flex items-center gap-2"
                        >
                            <UsersRound className="h-4 w-4" />{" "}
                            <span>Users</span>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <UserIcon className="h-4 w-4" />
                        <BreadcrumbPage>John Doe</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* Left */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* Usre badges */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck
                                        size={36}
                                        className="rounded-full bg-pink-500/30 border border-pink-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">
                                        Verified user
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been verified by the
                                        platform.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck
                                        size={36}
                                        className="rounded-full bg-green-500/30 border border-green-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">
                                        Verified user
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been verified by the
                                        platform.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck
                                        size={36}
                                        className="rounded-full bg-purple-500/30 border border-purple-500/50 p-2"
                                    />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">
                                        Verified user
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        This user has been verified by the
                                        platform.
                                    </p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    {/* Usre Info */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">
                                User Information
                            </h1>
                            <div className="flex items-center gap-2">
                                <Sheet>
                                    <SheetTrigger render={<Button variant={"secondary"}>Edit</Button>} />
                                    <EditUser/>
                                </Sheet>
                                <DeleteUserButton/>
                            </div>
                        </div>

                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">
                                    Profile Completion
                                </p>
                                <Progress value={50} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username: </span>
                                <span className="text-muted-foreground">
                                    John Doe
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Email: </span>
                                <span className="text-muted-foreground">
                                    john.doe@example.com
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">
                                    Phone Number:{" "}
                                </span>
                                <span className="text-muted-foreground">
                                    +1 234 567 890
                                </span>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm mt-3">
                            joined on 2026-01-01
                        </p>
                    </div>
                    {/* Card list */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions"></CardList>
                    </div>
                </div>
                {/* Right */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* User card container */}
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                        <div className="flex items-center gap-2">
                            <Avatar className="size-12">
                                <AvatarImage src="/dark1.jpg" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-semibold">
                                John Doe
                            </h1>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            lorem lorem blood of dawnwalker darkSiders2 assassin creed
                        </p>
                    </div>
                    {/* Chart container */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <ChartLineMultiple />
                    </div>
                </div>
            </div>
        </div>
    );
}
