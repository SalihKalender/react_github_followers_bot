const Follower = (props) => {
    return (
        <tr>
             <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={props.user.avatar_url} alt="" />
                </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900"> {props.user.login} </div>
                <div className="text-sm text-gray-500">Optimization</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {props.user.type}
                </span>
            </td>
                                    
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">Details</a>
            </td>
        </tr>
    )
}

export default Follower