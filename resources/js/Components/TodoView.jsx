import Dropdown from "@/Components/Dropdown";
import { useState } from "react";
import TaskFormModel from "./AddingTask";
function TodoView({ data, onEdit }) {
    return (
        <div className="border-2 rounded-lg p-4 my-2 border-[#c4d0eb] bg-white">
            <div className="flex justify-between items-center">
                <h2 className="font-bold">{data.title}</h2>
                <div className="hidden sm:ms-6 sm:flex sm:items-center">
                    <div className="relative ms-3">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent bg-white text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                    >
                                        <img
                                            className="h-5 w-5"
                                            src="https://www.svgrepo.com/show/345223/three-dots-vertical.svg"
                                            alt=""
                                        />
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <button
                                    onClick={onEdit}
                                    className="w-full px-4 py-2 text-start text-sm rounded-lg leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-[#f2f6ff] focus:bg-gray-100 focus:outline-none"
                                >
                                    Edit
                                </button>

                                <Dropdown.Link
                                    href={route("task.destroy", data.id)}
                                    method="delete"
                                >
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>

            <p className="my-3 text-gray-500">{data.content}</p>
            <p className="text-gray-500">
                {new Date(data.created_at).toLocaleDateString("en-GB")}
            </p>
        </div>
    );
}

export default TodoView;
