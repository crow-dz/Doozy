function AddNewBtn() {
    return (
        <div className="flex">
            <button className="flex flex-grow  items-center border-2 border-dotted  border-gray-300 py-2 px-3 rounded-lg text-black font-extrabold">
                <img
                    className="w-5 h-5 text-white m-2 "
                    src="https://www.svgrepo.com/show/71781/plus.svg"
                    alt="add todo"
                />
                <p className="ml-4">Add New</p>
            </button>
        </div>
    );
}
export default AddNewBtn;
