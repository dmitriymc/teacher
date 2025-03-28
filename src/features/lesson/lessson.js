import {Link} from 'react-router-dom'
import Button from '../../components/button/button'
import ModalCustom from '../../components/modal/modal'
import React, {useState} from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css';
import './lesson.module.css'
import ProfileAvatar from '../../components/avatar'
import img from '../../images/art_osama_robot_giant_guns_silhouette_girl_93693_4093x2573.jpg'


export default function Lesson(){

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [value, setValue] = React.useState('')
    

    function openModal(){
        setIsOpen(true)
        console.log('work')
    }

    function closeModal(){
        setIsOpen(false)
        console.log('work')
    }

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

    return (
        <>
        <div>
        <div className="text-4xl">Scratch lesson 1</div>
            <div className="flex flex-row mt-10 w-full justify-between">
                <div className="w-[50%]">
                <div className="flex"><Button className="border bg-purple-primary text-white mr-5" onClick={openModal}>Go to Scratch</Button><Button className="border border-gray-primary text-gray-primary mr-5" onClick={openModal}>Edit Lesson</Button><Button className="border border-red-400 text-red-400" onClick={openModal}>Remove Lesson</Button></div>
                <div className="mt-10">
                <h3>1 Step</h3>
                <p className="border-b pb-5">Task description Task description Task description Task description Task description Task description</p>
                <h3>2 Step</h3>
                <p className="border-b pb-5">Task description</p>
                <h3>3 Step</h3>
                <img className="mt-5 border-b pb-5" src={img} />
                <h3>4 Step</h3>
                <p>Task description</p>
                </div>
                </div>
                <div>
                    <div>
                        <div className="font-bold text-xl">Teacher</div>
                        <Link to={""} className="flex mt-4 mb-8 p-5 border w-full rounded-xl"><div className="flex flex-row items-center"><ProfileAvatar name="Teacher Vika" className={"rounded-full text-white bg-cyan-500 flex justify-center items-center w-12 h-12"}></ProfileAvatar><div className="font-bold text-lg ml-5">Teacher Name</div></div></Link>
                    </div>
                    <div className="w-full flex flex-col">
                        <div className="font-bold text-xl">
                            Students List
                        </div>
                        <div className="table border-collaps mt-4">
                            {
                                array.map((item, index) => 
                                    <div className="tr table-row hover:bg-blue-50">
                                        <Link to={""+index} className="td p-5 pt-3 pb-3 table-cell relative"><div className="flex flex-row items-center "><ProfileAvatar name={item.name} className={"rounded-full text-white bg-cyan-500 flex justify-center items-center w-12 h-12"}></ProfileAvatar><div className="font-bold text-base ml-5">{item.name}</div></div></Link>
                                        <div className="td p-5 pt-3 pb-3  pl-10 table-cell text-center"><select className="pl-4 pr-4 p-3"><option>A</option><option>B</option><option>C</option></select></div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalCustom size="w-[50%]" isOpen={modalIsOpen} title="Create a new lesson">
        <form className="flex flex-col h-full">
            <div className="flex">
                <div className="flex flex-col w-full">
                <div className="flex flex-col mb-4">
                            <label className="text-gray-primary mb-1">Title</label>
                            <input className="border rounded-lg p-3 focus:outline-1 focus:outline-purple-primary" type="text" placeholder="Title"></input>
                        </div>
                        <div>
                            <label className="text-gray-primary mb-1">Text area</label>
                            <ReactQuill theme="snow" value={value} className="" onChange={setValue} />
                        </div>
                </div>
            </div>
            <div className="flex flex-row justify-end mt-5">
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