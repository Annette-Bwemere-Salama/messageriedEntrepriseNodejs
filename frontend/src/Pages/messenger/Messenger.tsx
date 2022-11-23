import React, { useEffect, useState } from 'react'
import axios from "axios"
import Profile from "../profile/Profile"
import Conversation from './Conversation'
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Darkmood from "../../darkmood/Darkmood";
import SearchIcon from '@mui/icons-material/Search';

export default function Messenger() {


    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get
                    (`${import.meta.env.VITE_REACT_APP_GOOGLE_BACKEND}/users`)
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
                    <a href=""
                        className="flex items-center justify-center h-12 w-12 bg-indigo-100 text-indigo-800 rounded-full">
                        <img src="src/assets/aanyA.png" alt="" srcSet="" className='rounded-full' />
                    </a>
                    <ul className="flex flex-col space-y-2 mt-12">
                        <li>
                            <a href="/"
                                className="flex items-center">
                                <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                                    <HomeIcon />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/messenger"
                                className="flex items-center">
                                <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                                    <MessageIcon />
                                </span>
                            </a>
                        </li>
                        <li>
                        </li>
                        <li>
                            <a href="#"
                                className="flex items-center">
                                <span className="flex items-center justify-center text-indigo-100 hover:bg-indigo-700 h-12 w-12 rounded-2xl">
                                    <SettingsApplicationsIcon />
                                </span>
                            </a>
                        </li>
                    </ul>
                    <Darkmood />
                </div>
                <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row items-center">
                            <div className="text-xl font-semibold">Messages</div>
                            <div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-blue-500 rounded-full font-medium">5</div>
                        </div>
                        <div className="ml-auto">
                            <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                                {/* <svg className="w-4 h-4 stroke-current"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg> */}
                                <SearchIcon />
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
                            {users ? users.map((user: any, index: number) => (<Profile user={user} key={index} />
                                // , <Conversation user={user} key={index} />
                            )) : (<div>Pas d'utilisateur </div>)}
                            <Profile user={undefined} />

                        </div>
                        <div className="absolute bottom-0 right-0 mr-2">
                        </div>
                    </div>
                </div>
            </div>
            <Conversation />
        </div>

    )
}


