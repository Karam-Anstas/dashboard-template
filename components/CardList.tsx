import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";

const latestTransactions = [
    {
        id: 1,
        title: "Test",
        badge: "John Doe",
        image: "/logo.png",
        count: 1400,
    },
    {
        id: 2,
        title: "Test",
        badge: "John Doe",
        image: "/logo.png",
        count: 1400,
    },
    {
        id: 3,
        title: "Test",
        badge: "John Doe",
        image: "/logo.png",
        count: 1400,
    },
];

export function CardList({ title }: { title: string }) {

    const list = title === "Latest Transactions" ? latestTransactions : [];
    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">{title}</h1>
            <div className="flex flex-col gap-2">
                {list.map((item) => (
                    <Card key={item.id} className="flex-row items-center justify-between gap-4">
                        <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover"/>
                        </div>
                        <CardContent>
                            {item.title}
                        </CardContent>
                        <CardFooter>
                            {item.count/1000}K
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
