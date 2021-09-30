function search_box(props) {
    return (
        <div className="p-8">
            <div className="bg-white flex items-center rounded-full shadow-xl">
                <input onChange={props.searching} className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                <div className="p-4">
                <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                    Search
                </button>
                </div>
            </div>
        </div>
    )
}

export default search_box