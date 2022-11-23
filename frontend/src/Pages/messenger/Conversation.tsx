import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Profile from '../profile/Profile';
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';



export default function Conversation() {
    const navigate = useNavigate
    const [texte, setTexte] = useState("");

    const handleSubmit = async (e: any) => {
        // e.preventDefault();
        const insertInput = {
            text: texte
        }
        try {
            const res = await axios.post(`${import.meta.env.VITE_REACT_APP_GOOGLE_BACKEND}/messenger`, insertInput)
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    }


    const [messages, setMessages] = useState([])

    useEffect(() => {
        const getMessage = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_REACT_APP_GOOGLE_BACKEND}/:messenger`)
                const data = res.data
                setMessages(data)
                console.log(data);

                // 
            } catch (error) {
                console.log(error);
            }

        }
        getMessage()
    }, [])


    return (

        <div className="flex flex-col h-full w-full bg-white px-4 py-6">
            <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-pink-100">
                    T
                </div>
                <div className="flex flex-col ml-3">
                    <div className="font-semibold text-sm">GDA Team</div>
                    <div className="text-xs text-gray-500">Active</div>
                </div>
                <div className="ml-auto">
                    <ul className="flex flex-row items-center space-x-2">
                        <li>
                            <a href="#"
                                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full">
                                <span>
                                    <CallIcon />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full">
                                <span>
                                    <VideoCallIcon />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full">
                                <span>
                                    < MoreVertIcon />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-full overflow-hidden py-4">
                <div className="h-full overflow-y-auto">
                    <div className="grid grid-cols-12 gap-y-2">
                        <div className="col-start-6 col-end-13 p-3 rounded-lg">
                            <div className="flex items-center justify-start flex-row-reverse">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                >
                                    <div>
                                        Hum tu ne peux pas faire ça ma belle
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                            <div className="flex flex-row items-center">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                >
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                            {messages ? messages.map((message: any, _index: any) => (<div className='relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl my-3'>{message.text}</div>)) : (<div>Pas d'utilisateur </div>)}

                            <div className="flex flex-row items-center">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                >
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                            <div className="flex flex-row items-center">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    A
                                </div>
                                <div
                                    className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                >
                                    <div className="flex flex-row items-center">
                                        <button
                                            className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10"
                                        >
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="1.5"
                                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                                ></path>
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="1.5"
                                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                        </button>
                                        <div className="flex flex-row items-center space-x-px ml-4">
                                            <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-1 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                            <div className="h-4 w-1 bg-gray-500 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center" >
                <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
                    <button className="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
                        <svg className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                        </svg>
                    </button>
                    <div className="w-full">
                        <input type="text" onChange={(e: any) => setTexte(e.target.value)}

                            className="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center" placeholder="Type your message...." />
                    </div>
                    <div className="flex flex-row">
                        <button className="flex items-center justify-center h-10 w-8 text-gray-400">
                            <svg className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                            </svg>
                        </button>
                        <button className="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2">
                            <svg className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="ml-6">
                    <button
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-800 hover:bg-blue-500 text-white" onClick={handleSubmit} >

                        <svg className="w-5 h-5 transform rotate-90 -mr-px"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    )
}
