import AddNewBtn from "./AddNewBtn";

function TasksSection() {
    return (
        <div>
            <h2 className="flex items-center  justify-start text-lg font-medium text-gray-900 mb-2">
                <div className="h-3 w-3 rounded-full bg-[#17a2b8] mr-2"></div>
                <p>To Start</p>
            </h2>
            <div className="bg-[#f2f6ff] rounded-lg shadow overflow-hidden p-4">
                <ul className="divide-y divide-gray-200">
                    <div className="border-2 rounded-lg p-4 my-2 border-[#c4d0eb] bg-white">
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
                    </div>
                    <div className="border-2 rounded-lg p-4 my-2 border-[#c4d0eb] bg-white">
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
                    </div>
                    <div className="border-2 rounded-lg p-4 my-2 border-[#c4d0eb] bg-white">
                        
                    </div>
                    <AddNewBtn />
                </ul>
            </div>
        </div>
    );
}
export default TasksSection;
