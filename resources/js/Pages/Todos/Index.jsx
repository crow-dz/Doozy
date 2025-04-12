import Footer from "@/Components/Footer";
import TasksSection from "@/Components/TasksSection";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import { useState } from "react";
function Todos({ tasks }) {
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchText(value);
        router.get(
            route("task.index"),
            { search: value },
            {
                preserveState: true,
                replace: true,
            }
        );
    };
    return (
        <AuthenticatedLayout
            header={
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-extrabold leading-tight text-gray-800">
                                    My Tasks
                                </h2>
                            </div>
                            <div className="flex justify-between mt-4">
                                {/* Task Search Input by title*/}
                                <div className="flex justify-between items-center">
                                    <form onSubmit={handleSearch}>
                                        <div className="relative ">
                                            <input
                                                className="  p-2  pr-8 border border-gray-300 rounded-md "
                                                type="text"
                                                placeholder="Search by title"
                                                value={searchText}
                                                onChange={handleSearch}
                                            />
                                            <img
                                                className="absolute top-3 right-2  w-5 h-5  "
                                                src="/images/clipart2603165.png"
                                                alt=""
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="flex flex-row justify-between space-x-2">
                                    {/* Task Search Input by date*/}
                                    <div className="flex justify-between items-center">
                                        <div className="relative ">
                                            <input
                                                className="  p-2  pr-8 border border-gray-300 rounded-md "
                                                type="text"
                                                placeholder="Date Start"
                                            />
                                            <img
                                                className="absolute top-3 right-2  w-5 h-5  "
                                                src="/images/calendar_8818517.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="relative ">
                                            <input
                                                className="  p-2  pr-8 border border-gray-300 rounded-md "
                                                type="text"
                                                placeholder="Date End"
                                            />
                                            <img
                                                className="absolute top-3 right-2  w-5 h-5  "
                                                src="/images/calendar_8818517.png"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            }
        >
            <div className="bg-img  ">
                <div className="py-4">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 space-x-5 sm:grid-cols-3">
                            <TasksSection
                                tasks={tasks}
                                status={{
                                    lable: "To Start",
                                    color: "#17a2b8",
                                    value: "toStart",
                                }}
                            />
                            <TasksSection
                                tasks={tasks}
                                status={{
                                    lable: "In Progress",
                                    color: "#ffc107",
                                    value: "inProgress",
                                }}
                            />
                            <TasksSection
                                tasks={tasks}
                                status={{
                                    lable: "Completed",
                                    color: "#8b63a4",
                                    value: "completed",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}

export default Todos;
