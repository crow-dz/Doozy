import AddNewBtn from "./AddNewBtn";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";

import TodoView from "./TodoView";
import { useState } from "react";

function TasksSection({ tasks, status }) {
    const [toggleAddBtn, setToggleAddBtn] = useState(false);

    const filtredList = tasks.filter((task) => task.status === status.value);
    console.log(toggleAddBtn);
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
                        <TodoView key={task.id} data={task} />
                    ))}
                </ul>
                {status.value === "toStart" ? (
                    !toggleAddBtn ? (
                        <AddNewBtn toggleAddBtn={() => setToggleAddBtn(true)} />
                    ) : (
                        <Modal onClose={true} show={toggleAddBtn}>
                            <form className="p-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Are you sure you want to delete your
                                    account?
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Once your account is deleted, all of its
                                    resources and data will be permanently
                                    deleted. Please enter your password to
                                    confirm you would like to permanently delete
                                    your account.
                                </p>

                                <div className="mt-6"></div>

                                <div className="mt-6 flex justify-end space-x-2">
                                    <button
                                        onClick={() => setToggleAddBtn(false)}
                                        type="button"
                                        class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
                                    >
                                        Add Task
                                    </button>
                                    <button
                                        onClick={() => setToggleAddBtn(false)}
                                        type="button"
                                        class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </Modal>

                        /*   <div className="border-2 rounded-lg p-4 my-2 border-[#c4d0eb] bg-white">
                            <form className="flex flex-col flex-grow space-y-3">
                                <input
                                    className="  p-2  pr-8 border border-[#c4d0eb]  rounded-lg"
                                    type="text"
                                    placeholder="Search by title"
                                />
                                <textarea
                                    className="  p-2  pr-8 border border-[#c4d0eb] rounded-lg "
                                    placeholder="Description"
                                ></textarea>
                                <input
                                    className="bg-[#202D48] py-2 px-3 ] rounded-lg text-white"
                                    type="submit"
                                    value="Add Task"
                                />
                            </form>
                        </div> */
                    )
                ) : null}
            </div>
        </div>
    );
}
export default TasksSection;

{
}
{
    /* <div className="border-2 rounded-lg p-4 my-2 border-[#c4d0eb] bg-white">
                        <form className="flex flex-col flex-grow space-y-3">
                            <input
                                className="  p-2  pr-8 border border-[#c4d0eb] rounded-lg"
                                type="text"
                                placeholder="Search by title"
                                value={"Title of The task"}
                            />
                            <textarea
                                className="  p-2  pr-8 border border-[#c4d0eb] rounded-lg resize-none"
                                placeholder="Description"
                            >
                                I use Tailwind CSS to style an Angular app.
                                Structure is simple: app.component.html to
                                display a navigation bar and a footer, and
                                components are displayed in the remaining
                                available space with
                            </textarea>
                            <div className="flex justify-between space-x-2">
                                <input
                                    className="flex flex-grow bg-[#202D48] py-2 px-3 rounded-lg text-white"
                                    type="submit"
                                    value="Update Task"
                                />
                                <input
                                    className="flex flex-grow bg-[#c4d0eb] py-2 px-3  rounded-lg text-white"
                                    type="submit"
                                    value="Cancel Task"
                                />
                            </div>
                        </form>
                    </div> */
}

{
    /* <AddNewBtn /> */
}
