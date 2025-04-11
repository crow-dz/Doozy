import TasksSection from "@/Components/TasksSection";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
function Todos({ tasks }) {
    return (
        <AuthenticatedLayout
            header={
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div>
                </header>
            }
        >
            <div className="bg-img  ">
                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid grid-cols-3 space-x-5">
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
        </AuthenticatedLayout>
    );
}

export default Todos;
