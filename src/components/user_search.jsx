export default function user_search(props) {
return (
<div className="bg-white p-4 w-96 rounded-md">
    <h1 className="text-lg font-bold text-gray-500">Customer</h1>
    <div className="mt-5 mb-2 border-2 py-1 px-3 flex justify-between rounde-md rounded-md">
        <input className="flex-grow outline-none text-gray-600 focus:text-blue-600" type="text"
            placeholder="Search Customer..." onBlur={props.deneme} defaultValue={props.first_user_name} readOnly={false}/>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </span>
    </div>
</div>
)
}