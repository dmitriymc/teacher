import {Link} from 'react-router-dom'
import React from 'react'
import Button from '../../components/button/button'
import ModalCustom from '../../components/modal/modal'
import ProfileAvatar from '../../components/avatar'

export default function Students(){

    const array = [
        {
            name: 'Student Vika',
            location: 'Ukraine',
            status: 'active',
        },
        {
            name: 'Student Vika',
            location: 'Ukraine',
            status: 'active',
        },
        {
            name: 'Student Vika',
            location: 'Ukraine',
            status: 'active',
        },
        {
            name: 'Student Vika',
            location: 'Ukraine',
            status: 'active',
        },
        {
            name: 'Student Vika',
            location: 'Ukraine',
            status: 'active',
        },
        {
            name: 'Student Vika',
            location: 'Ukraine',
            status: 'active',
        },   {
            name: 'Student Vika',
            location: 'Ukraine',
            status: 'active',
        },
        {
            name: 'Student Vika',
            location: 'Ukraine',
            status: 'active',
        },
        {
            name: 'Student Vika',
            location: 'Ukraine',
            status: 'active',
        },
        {
            name: 'Student Vika',
            location: 'Ukraine',
            status: 'active',
        },
    ]

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(){
        setIsOpen(true)
        console.log('work')
    }

    function closeModal(){
        setIsOpen(false)
        console.log('work')
    }

    return (
        <>
        <div>
            <div class="flex flex-row"><div className="flex items-center mr-10">In the school <b className="ml-1 mr-1">50</b> students</div><Button className="bg-white text-blue-primary border border-blue-primary"  onClick={openModal}>New Student</Button></div>
            <div className="table mt-10 border-collapse w-full">
            <div className="tr table-row border-b text-gray-500">
                <div className="td p-5 pt-4 pt-4 table-cell">Name</div>
                <div className="td p-5 pt-4 pt-4 table-cell">Location</div>
                <div className="td p-5 pt-4 pt-4 table-cell">Phone</div>
                <div className="td p-5 pt-4 pt-4 table-cell">Email</div>
                <div className="td p-5 pt-4 pt-4 table-cell text-center">Status</div>
                <div className="td p-5 pt-4 pt-4 table-cell text-center">Diactivation</div>
                <div className="td p-5 pt-4 pt-4 table-cell text-center">Options</div>
            </div>
            {
                array.map((item, index) => 
                <div className="tr table-row hover:bg-blue-50 odd:bg-slate-50">
                    <Link to={""+index} className="td p-5 pt-4 pt-4 table-cell relative"><div className="flex flex-row items-center"><ProfileAvatar name={item.name} className={"rounded-full text-white bg-cyan-500 flex justify-center items-center w-12 h-12"}></ProfileAvatar><div className="font-bold text-lg ml-5">{item.name}</div></div></Link>
                    <div className="td p-5 pt-4 pt-4 table-cell text-left">{item.location}</div>
                    <div className="td p-5 pt-4 pt-4 table-cell text-left">{item.location}</div>
                    <div className="td p-5 pt-4 pt-4 table-cell text-left">{item.location}</div>
                    <div className="td p-5 pt-4 pt-4 table-cell text-green-400  text-center">{item.status}</div>
                    <div className="td p-5 pt-4 pt-4 table-cell text-center"><button className="border p-[6px] border-gray-primary text-gray-primary hover:opacity-40">Diactivate</button></div>
                    <div className="td p-5 pt-4 pt-4 table-cell text-center"><button className="border p-[6px] border-red-400 text-red-400 hover:opacity-40">Remove</button></div>
                </div>
            )
            }
            </div>
            
        </div>
        <ModalCustom isOpen={modalIsOpen} title="Create a new Student">
            <form>
                <div className="flex flex-row">
                    <div className="pr-6 w-[50%]">
                        <div className="bg-[url('images/class.jpg')] bg-cover bg-center h-[400px]">

                        </div>
                        <div className="mt-5 w-[50%]">
                            <input type="file"></input>
                        </div>
                    </div>
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
                </div>
                <div className="flex flex-row justify-end">
                    <Button onClick={closeModal} className="border p-4 border-gray-primary text-gray-primary mr-5">
                        Cancel
                    </Button>
                    <Button className="border p-4 border-blur-primary bg-blue-primary text-white">
                        Create
                    </Button>
                </div>
            </form>
        </ModalCustom>
        </>
    )
}