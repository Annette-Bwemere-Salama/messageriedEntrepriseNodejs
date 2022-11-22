import React, { useEffect, useState } from 'react'
import axios from "axios"
import Profile from "../profile/Profile"
import Conversation from './Conversation'

export default function Messenger() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get("http://localhost:5000/users")
                const data = res.data
                setUsers(data)
                console.log(data);

                // 
            } catch (error) {
                console.log(error);
            }

        }
        getUsers()
    }, [])

    return (
        <div
            className="flex flex-row h-screen antialiased text-gray-800"
        >
            <div
                className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4"
            >
                <div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-indigo-800 rounded-3xl">
                    <a href="#"
                        className="flex items-center justify-center h-12 w-12 bg-indigo-100 text-indigo-800 rounded-full">
                        <svg className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                        </svg>
                    </a>
                    <ul className="flex flex-col space-y-2 mt-12">
                        <li>
                            <a href="/login"
                                className="flex items-center">
                                <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                                    <svg className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/messenger"
                                className="flex items-center">
                                <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                                    <svg className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li>
                        </li>
                        <li>
                            <a href="#"
                                className="flex items-center">
                                <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                                    <svg className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                        <path stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <button className="mt-auto flex items-center justify-center hover:text-indigo-100 text-indigo-500 h-10 w-10">
                        <svg className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row items-center">
                            <div className="text-xl font-semibold">Messages</div>
                            <div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-blue-500 rounded-full font-medium">5</div>
                        </div>
                        <div className="ml-auto">
                            <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                                <svg className="w-4 h-4 stroke-current"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <ul className="flex flex-row items-center justify-between">
                            <li>
                                <a href="#"
                                    className="flex items-center pb-3 text-xs font-semibold relative text-indigo-800">
                                    <span>Mes Conversations</span>
                                    <span className="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <div className="text-xs text-gray-400 font-semibold uppercase">Team</div>
                    </div>
                    <div className="mt-5">
                        <div className="text-xs text-gray-400 font-semibold uppercase">Personal</div>
                    </div>
                    <div className="h-full overflow-hidden relative pt-2">
                        <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
                            {users ? users.map((user: any, index: number) => (<Profile user={user}  key={index}/>)) : (<div>Pas d'utilisateur </div>)}
                            <Profile user={undefined} />

                        </div>
                        <div className="absolute bottom-0 right-0 mr-2">
                        </div>
                    </div>
                </div>
            </div>
            <Conversation/>
        </div>

    )
}


