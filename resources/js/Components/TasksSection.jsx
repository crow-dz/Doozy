import { useState } from "react";
import TodoView from "./TodoView";
import AddNewBtn from "./AddNewBtn";
import TaskFormModel from "./AddingTask";

function TasksSection({ tasks, status }) {
    const filtredList = tasks.filter((task) => task.status === status.value);
    const [addingNew, setAddingNew] = useState(false);
    const [editTask, setEditTask] = useState(null);

    return (
        <div>
            <h2 className="flex items-center  justify-start text-lg font-medium text-gray-900 mb-2">
                <div
                    className="h-3 w-3 rounded-full  mr-2"
                    style={{ backgroundColor: status.color }}
                ></div>
                <p>
                    {status.lable} ({filtredList.length})
                </p>
            </h2>

            <div className="bg-[#f2f6ff] rounded-lg shadow overflow-hidden p-4">
                <ul className="divide-y divide-gray-200">
                    {filtredList.map((task) => (
                        <TodoView
                            key={task.id}
                            data={task}
                            onEdit={() => setEditTask(task)}
                        />
                    ))}
                </ul>

                {status.value === "toStart" && !addingNew && (
                    <AddNewBtn toggleAddBtn={() => setAddingNew(true)} />
                )}

                {/* Add New Modal */}
                {addingNew && (
                    <TaskFormModel
                        show={addingNew}
                        onClose={() => setAddingNew(false)}
                    />
                )}

                {/* Edit Modal */}
                {editTask && (
                    <TaskFormModel
                        show={!!editTask}
                        onClose={() => setEditTask(null)}
                        task={editTask}
                        mode="edit"
                    />
                )}
            </div>
        </div>
    );
}

export default TasksSection;
