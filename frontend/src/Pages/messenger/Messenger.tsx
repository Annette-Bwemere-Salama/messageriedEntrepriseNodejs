import React, { useEffect, useState } from 'react'
import axios from "axios"
import Profile from "../profile/Profile"
import Conversation from './Conversation'
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Darkmood from "../../darkmood/Darkmood";
import SearchIcon from '@mui/icons-material/Search';
import { InputLabel } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Messenger() {

    const [messages, setMessages] = useState([])


    const getMessage = async () => {
        try {

            setMessages([])
            const receiverId = localStorage.getItem('contact')
            const senderId = JSON.parse(localStorage.getItem('user')!)._id
            const res = await axios.get(`http://localhost:50000/messenger?senderId=${senderId}&receiverId=${receiverId}`)
            const data = res.data
            setMessages(data)
            console.log('messages', data);

            // 
        } catch (error) {
            console.log(error);
        }

    }

    const [users, setUsers] = useState([])

    useEffect(() => {
        console.log('messages')
        const getUsers = async () => {
            try {
                const res = await axios.get
                    ("http://localhost:50000/users")
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
            className="flex flex-row h-screen antialiased text-gray-800">
            <div
                className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
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
                    {/* <Darkmood className="mt-auto flex items-center justify-center hover:text-indigo-100 text-indigo-500 h-10 w-10" /> */}
                    <LogoutIcon />

                </div>
                <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row items-center">
                            <div className="text-xl font-semibold">Messages</div>
                            <div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-blue-500 rounded-full font-medium">5</div>
                        </div>
                        <div className="ml-auto">

                            <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
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
                            {users ? users.map((user: any, index: number) => (<Profile user={user} key={index} onMessage={getMessage} />
                            )) : (<div>Pas d'utilisateur </div>)}

                        </div>
                        <div className="absolute bottom-0 right-0 mr-2">
                        </div>
                    </div>
                </div>
            </div>
            <Conversation messages={messages} />
        </div>

    )
}


