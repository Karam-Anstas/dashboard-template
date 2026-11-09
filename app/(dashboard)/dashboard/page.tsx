import { AppAreaChart } from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import { AppPieChart } from "@/components/AppPieChart";
import { AppPieChartSec } from "@/components/AppPieChartSec";
import { AppRadialChart } from "@/components/AppRadialChart";
import { TodoList } from "@/components/TodoList";

export default function DashboardPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
            <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
                <AppBarChart />
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
                <AppRadialChart />
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
                <AppPieChartSec/>
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
                <AppPieChart />
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
                <TodoList />
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
                <AppAreaChart />
            </div>
        </div>
    );
}
