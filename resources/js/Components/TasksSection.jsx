import AddNewBtn from "./AddNewBtn";
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
                        <div
                            class="relative z-10"
                            aria-labelledby="modal-title"
                            role="dialog"
                            aria-modal="true"
                        >
                            {/*  Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0" */}

                            <div
                                class="fixed inset-0 bg-gray-500/75 transition-opacity"
                                aria-hidden="true"
                            ></div>

                            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                    {/* Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}

                                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div class="sm:flex sm:items-start">
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
                                                    {/*  <input
                                    className="bg-[#202D48] py-2 px-3 ] rounded-lg text-white"
                                    type="submit"
                                    value="Add Task"
                                /> */}
                                                </form>
                                            </div>
                                        </div>
                                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            >
                                                Deactivate
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setToggleAddBtn(false)
                                                }
                                                type="button"
                                                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
