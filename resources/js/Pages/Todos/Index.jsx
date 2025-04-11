import TasksSection from "@/Components/TasksSection";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
function Todos({ tasks }) {
    return (
        <AuthenticatedLayout
            header={
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div>
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-extrabold leading-tight text-gray-800">
                                    My Todo
                                </h2>
                                <button className=" flex items-center bg-[#202D48] py-2 px-3 border border-[#202D48] rounded text-white">
                                    <img
                                        className="w-5 h-5 text-white mr-2 invert"
                                        src="https://www.svgrepo.com/show/71781/plus.svg"
                                        alt="add todo"
                                    />
                                    Create Todo
                                </button>
                            </div>
                            <div className="flex justify-between mt-4">
                                {/* Task Search Input by title*/}
                                <div className="flex justify-between items-center">
                                    <div className="relative ">
                                        <input
                                            className="  p-2  pr-8 border border-gray-300 rounded-md "
                                            type="text"
                                            placeholder="Search by title"
                                        />
                                        <img
                                            className="absolute top-3 right-2  w-5 h-5  "
                                            src="/images/clipart2603165.png"
                                            alt=""
                                        />
                                    </div>
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
