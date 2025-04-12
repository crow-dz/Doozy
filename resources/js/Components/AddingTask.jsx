import Modal from "@/Components/Modal";
import { useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";

function TaskFormModel({ show, onClose, mode = "add", task = null }) {
    const user = usePage().props.auth.user;
    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: task?.title || "",
        content: task?.content || "",
        status: task?.status || "toStart",
        user_id: task?.user_id || user.id,
    });

    const submit = (e) => {
        e.preventDefault();
        if (mode === "add") {
            post(route("task.store"), {
                onSuccess: () => {
                    reset();
                    onClose();
                },
            });
        } else {
            put(route("task.update", task.id), {
                onSuccess: () => {
                    reset();
                    onClose();
                },
            });
        }
    };
    return (
        <Modal onClose={onClose} show={show}>
            <form className="flex flex-col  p-6 " onSubmit={submit}>
                <h2 className="text-lg font-medium text-gray-900">
                    {mode === "add" ? "Create New Task" : "Edit Task"}
                </h2>

                <p className="mt-1 text-sm text-gray-600"></p>

                <div className="flex flex-col space-y-2 mt-6">
                    <div className="flex flex-col">
                        <input
                            id="title"
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="  p-2  pr-8 border border-[#c4d0eb]  rounded-lg"
                            placeholder="Search by title"
                        />
                        <InputError message={errors.title} className="mt-2" />
                    </div>
                    <div className="flex flex-col">
                        <textarea
                            id="content"
                            type="text"
                            name="content"
                            value={data.content}
                            onChange={(e) => setData("content", e.target.value)}
                            className="  p-2  pr-8 border border-[#c4d0eb] rounded-lg "
                            placeholder="Description"
                        ></textarea>
                        <InputError message={errors.content} className="mt-2" />
                    </div>
                    {mode === "edit" && (
                        <div className="flex flex-row">
                            <select
                                id="status"
                                name="status"
                                value={data.status}
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                className="  p-2  pr-8 border border-[#c4d0eb] rounded-lg "
                            >
                                <option value="toStart">To Start</option>
                                <option value="inProgress">In Progress</option>
                                <option value="completed">Completed</option>
                            </select>
                            <InputError
                                message={errors.status}
                                className="mt-2"
                            />
                        </div>
                    )}
                </div>

                <div className="mt-6 flex justify-end space-x-2">
                    <button
                        disabled={processing}
                        type="submit"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-[#202D48]  px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition duration-150  hover:text-[#202D48]  ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
                    >
                        {mode === "add" ? "Add Task" : "Save Changes"}
                    </button>
                    <button
                        onClick={() => onClose(false)}
                        type="button"
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default TaskFormModel;
