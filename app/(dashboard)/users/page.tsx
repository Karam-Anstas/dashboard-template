import { type User, columns } from "./columns";
import { DataTable } from "@/components/DataTable";
import { GooeyInput } from "@/components/GooeyInput";

const getData = async (): Promise<User[]> => {
    return [
        {
            id: 1,
            username: "john_doe",
            email: "john@example.com",
            createdAt: "2023-01-01",
            status: "verified",
        },
        {
            id: 2,
            username: "jane_doe",
            email: "jane@example.com",
            createdAt: "2023-01-02",
            status: "unverified",
        },
        {
            id: 3,
            username: "jane_doe",
            email: "jane@example.com",
            createdAt: "2023-01-03",
            status: "verified",
        },
        {
            id: 4,
            username: "jane_doe",
            email: "jane@example.com",
            createdAt: "2023-01-04",
            status: "verified",
        },
        {
            id: 5,
            username: "alex_smith",
            email: "alex.smith@example.com",
            createdAt: "2023-01-05",
            status: "verified",
        },
        {
            id: 6,
            username: "brian_w",
            email: "brianw@example.com",
            createdAt: "2023-01-06",
            status: "unverified",
        },
        {
            id: 7,
            username: "chloe_v",
            email: "chloe.v@example.com",
            createdAt: "2023-01-07",
            status: "verified",
        },
        {
            id: 8,
            username: "david_k",
            email: "davidk@example.com",
            createdAt: "2023-01-08",
            status: "verified",
        },
        {
            id: 9,
            username: "emily_r",
            email: "emily.r@example.com",
            createdAt: "2023-01-09",
            status: "unverified",
        },
        {
            id: 10,
            username: "frank_t",
            email: "frankt@example.com",
            createdAt: "2023-01-10",
            status: "verified",
        },
        {
            id: 11,
            username: "grace_h",
            email: "grace.h@example.com",
            createdAt: "2023-01-11",
            status: "verified",
        },
        {
            id: 12,
            username: "henry_m",
            email: "henrym@example.com",
            createdAt: "2023-01-12",
            status: "unverified",
        },
        {
            id: 13,
            username: "iris_p",
            email: "iris.p@example.com",
            createdAt: "2023-01-13",
            status: "verified",
        },
        {
            id: 14,
            username: "jack_b",
            email: "jackb@example.com",
            createdAt: "2023-01-14",
            status: "verified",
        },
        {
            id: 15,
            username: "katie_w",
            email: "katie.w@example.com",
            createdAt: "2023-01-15",
            status: "unverified",
        },
        {
            id: 16,
            username: "liam_16",
            email: "liam16@example.com",
            createdAt: "2023-01-16",
            status: "unverified",
        },
        {
            id: 17,
            username: "olivia_17",
            email: "olivia17@example.com",
            createdAt: "2023-01-17",
            status: "verified",
        },
        {
            id: 18,
            username: "noah_18",
            email: "noah18@example.com",
            createdAt: "2023-01-18",
            status: "verified",
        },
        {
            id: 19,
            username: "emma_19",
            email: "emma19@example.com",
            createdAt: "2023-01-19",
            status: "unverified",
        },
        {
            id: 20,
            username: "oliver_20",
            email: "oliver20@example.com",
            createdAt: "2023-01-20",
            status: "verified",
        },
        {
            id: 21,
            username: "ava_21",
            email: "ava21@example.com",
            createdAt: "2023-01-21",
            status: "verified",
        },
        {
            id: 22,
            username: "elijah_22",
            email: "elijah22@example.com",
            createdAt: "2023-01-22",
            status: "unverified",
        },
        {
            id: 23,
            username: "charlotte_23",
            email: "charlotte23@example.com",
            createdAt: "2023-01-23",
            status: "verified",
        },
        {
            id: 24,
            username: "william_24",
            email: "william24@example.com",
            createdAt: "2023-01-24",
            status: "verified",
        },
        {
            id: 25,
            username: "sophia_25",
            email: "sophia25@example.com",
            createdAt: "2023-01-25",
            status: "unverified",
        },
        {
            id: 26,
            username: "james_26",
            email: "james26@example.com",
            createdAt: "2023-01-26",
            status: "verified",
        },
        {
            id: 27,
            username: "amelia_27",
            email: "amelia27@example.com",
            createdAt: "2023-01-27",
            status: "verified",
        },
        {
            id: 28,
            username: "benjamin_28",
            email: "benjamin28@example.com",
            createdAt: "2023-01-28",
            status: "unverified",
        },
        {
            id: 29,
            username: "isabella_29",
            email: "isabella29@example.com",
            createdAt: "2023-01-29",
            status: "verified",
        },
        {
            id: 30,
            username: "lucas_30",
            email: "lucas30@example.com",
            createdAt: "2023-01-30",
            status: "verified",
        },
        {
            id: 31,
            username: "mia_31",
            email: "mia31@example.com",
            createdAt: "2023-01-31",
            status: "unverified",
        },
        {
            id: 32,
            username: "henry_32",
            email: "henry32@example.com",
            createdAt: "2023-02-01",
            status: "verified",
        },
        {
            id: 33,
            username: "evelyn_33",
            email: "evelyn33@example.com",
            createdAt: "2023-02-02",
            status: "verified",
        },
        {
            id: 34,
            username: "alexander_34",
            email: "alexander34@example.com",
            createdAt: "2023-02-03",
            status: "unverified",
        },
        {
            id: 35,
            username: "harper_35",
            email: "harper35@example.com",
            createdAt: "2023-02-04",
            status: "verified",
        },
        {
            id: 36,
            username: "mason_36",
            email: "mason36@example.com",
            createdAt: "2023-02-05",
            status: "verified",
        },
        {
            id: 37,
            username: "camila_37",
            email: "camila37@example.com",
            createdAt: "2023-02-06",
            status: "unverified",
        },
        {
            id: 38,
            username: "michael_38",
            email: "michael38@example.com",
            createdAt: "2023-02-07",
            status: "verified",
        },
        {
            id: 39,
            username: "gianna_39",
            email: "gianna39@example.com",
            createdAt: "2023-02-08",
            status: "verified",
        },
        {
            id: 40,
            username: "ethan_40",
            email: "ethan40@example.com",
            createdAt: "2023-02-09",
            status: "unverified",
        },
    ];
};

export default async function UsersPage() {
    const data = await getData();
    return (
        <div>
            <div className=" flex items-center justify-between mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">All Users</h1>
                <GooeyInput />
            </div>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
