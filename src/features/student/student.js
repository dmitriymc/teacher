import {Link} from 'react-router-dom'
import React from 'react'
import Button from '../../components/button/button'
import ModalCustom from '../../components/modal/modal'
import ProfileAvatar from '../../components/avatar'

export default function Student(){

    return (
        <>
        <div>
            <div class="flex flex-row"><Button className="bg-white text-blue-primary border border-blue-primary mr-4">Edit</Button><Button className="bg-white text-gray-primary border border-gray-primary mr-4">Inactive</Button><Button className="bg-white text-red-400 border border-red-400">Remove</Button></div>
            <div className="mt-10 w-full">
            <div className="flex flex-row">
            <div className="flex flex-col w-[50%]">
                        <div className="flex flex-row w-full flex-wrap justify-between mb-4">
                            <div className="flex flex-col w-[49%]">
                                <label className="text-gray-primary mb-1">Name</label>
                                <input className="border rounded-lg p-3 focus:outline-1 focus:outline-purple-primary" type="text" placeholder="name"></input>
                            </div>
                            <div className="flex flex-col w-[49%]">
                                <label className="text-gray-primary mb-1">Surname</label>
                                <input className="border rounded-lg p-3 focus:outline-1 focus:outline-purple-primary" type="text" placeholder="Surname"></input>
                            </div>
                        </div>
                        <div className="flex flex-row w-full flex-wrap justify-between mb-4">
                            <div className="flex flex-col w-[49%]">
                                <label className="text-gray-primary mb-1">Email</label>
                                <input className="border rounded-lg p-3 focus:outline-1 focus:outline-purple-primary" type="email" placeholder="Email"></input>
                            </div>
                            <div className="flex flex-col w-[49%]">
                                <label className="text-gray-primary mb-1">Phone</label>
                                <input className="border rounded-lg p-3 focus:outline-1 focus:outline-purple-primary" type="tel" placeholder="Phone"></input>
                            </div>
                        </div>
                        <div className="flex flex-row w-full flex-wrap justify-between mb-4">
                            <div className="flex flex-col w-[49%]">
                                <label className="text-gray-primary mb-1">Location</label>
                                <select className="border rounded-lg p-3 focus:outline-1 focus:outline-purple-primary" type="text" placeholder="select">
                                    <option value="1">Kyiv</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-row w-full flex-wrap justify-between mb-4">
                            <div className="flex flex-col w-[49%]">
                                <label className="text-gray-primary mb-1">Class</label>
                                <select className="border rounded-lg p-3 focus:outline-1 focus:outline-purple-primary" type="text" placeholder="select">
                                    <option value="1">Scratch</option>
                                    <option value="2">React</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pl-6 w-[50%]">
                        <div className="bg-[url('images/class.jpg')] bg-cover bg-center h-[400px]">

                        </div>
                        <div className="mt-5 w-[50%]">
                            <input type="file"></input>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>Scores</div>
                    <div>
                        <div>Class</div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        Logs
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}