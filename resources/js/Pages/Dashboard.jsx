import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TasksSection from "@/Components/TasksSection";
import Todos from "@/Pages/Todos/Index";
export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div>
                </header>
            }
        >
            <div>
                <h1>Todo Stats</h1>
            </div>
        </AuthenticatedLayout>
    );
}
