
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import Follower from './Followers'
import Search_box from './search_box'
import User_search from './user_search'

export class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_followers: [],
            showing_followers: [],
            loading: true
        }
        this.searching = this.searching.bind(this)
        this.deneme = this.deneme.bind(this)
    }
    async componentDidMount() {
        const username = this.props.user_name
        const url = `https://api.github.com/users/${username}/followers`
        const followers = await axios.get(url)
        this.setState(() => {
            return {
                user_followers: followers.data,
                showing_followers: followers.data,
                loading: false
            }
        })
    }
    async deneme(event) {
        const value = event.target.value
        if(value != '') {
            this.setState(() => {
                return {
                    loading: true
                }
            })
            try {
                const url = `https://api.github.com/users/${value}/followers`
                const followers = await axios.get(url)
                this.setState(() => {
                    if(followers.data) {
                        return {
                            user_followers: followers.data,
                            showing_followers: followers.data,
                            loading: false
                        }
                    }
                    else {
                        return {
                            user_followers: []
                        }
                    }
                })
            }
            catch(err) {
                this.setState(() => {
                    return {
                        user_followers: [],
                        showing_followers: [],
                        loading: false
                    }
                })
            }
            
        }
        else {
            const url = `https://api.github.com/users/${this.props.user_name}/followers`
            this.setState(() => {
                return {
                    loading: true
                }
            })
            const followers = await axios.get(url)
            this.setState(() => {
                return {
                    user_followers: followers.data,
                    showing_followers: followers.data,
                    loading: false
                }
            })
        }
        
    }
    searching(event) {
        const value = event.target.value
        if(value == '') {
            this.setState(() => {
                return {
                    showing_followers: this.state.user_followers
                }
            })
        }
        else {
            const followers = this.state.user_followers
            const filter_followers = followers.filter(follower => {
                if(follower.login.includes(value)){
                    return follower
                }
            })
            this.setState(() => {
                return {
                    showing_followers: filter_followers
                }
            })
        }
    }
    render() {
        
            return (
                <Fragment>  
                    <div className="flex flex-col p-8">
                    <User_search deneme={this.deneme} first_user_name={this.props.user_name}/>
                        <Search_box searching={this.searching} />
                        <span className="p-2 text-lg text-indigo-300">Followers</span>

                        { this.state.loading == false
                        ?
                        (<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        this.state.showing_followers.map((follower) => {
                                            return (<Follower key={follower.id} user={follower} />)
                                        })
                                    }

                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>)
                        :
                        (
                        <div className="content">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        </div>
                        )
                        }
                        
                    </div>
                </Fragment>
            )
        
    }
}

export default User