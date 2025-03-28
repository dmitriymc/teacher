import {Link} from 'react-router-dom'
import Button from '../../components/button/button'
import ModalCustom from '../../components/modal/modal'
import React, {useState} from 'react'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css';

export default function Class(){

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpenClass, setIsOpenClass] = React.useState(false);
    const [value, setValue] = React.useState('')
    

    function openModal(){
        setIsOpen(true)
        console.log('work')
    }

    function openModalClass(){
        setIsOpenClass(true)
    }

    function closeModal(){
        setIsOpen(false)
        console.log('work')
    }

    function closeModalClass(){
        setIsOpenClass(false)
        console.log('work')
    }

    const array = [{
        name: 'Lesson 1',
        description: 'Test',
        status: 'In progress'
    },
    {
        name: 'Lesson 2',
        description: 'Test',
        status: 'In progress'
    },
    {
        name: 'Lesson 3',
        description: 'Test',
        status: 'In progress'
    },
    {
        name: 'Lesson 4',
        description: 'Test',
        status: 'In progress'
    }]

    return (
        <>
        <div>
            <div className="text-4xl">Scratch class beginner level</div>
            <div className="flex flex-row mt-10 w-full">
                <div className="w-[60%]">
                <div className="flex flex-row"><Button className="bg-blue-primary text-white mr-4" onClick={openModal}>New Lesson</Button><Button className="text-gray-primary border border-gray-primary" onClick={openModalClass}>Edit Class</Button></div>
                <div className="mt-10">
                    {array.map((item, index) => 
                        <div className="p-5 w-[800px] border-b text-xl hover:bg-slate-50">
                            <Link className="hover:text-purple-primary" to={"/lessons/"+ index}>{item.name}</Link>
                        </div>
                    )}
                    </div>
                </div>
                <div className="w-[40%]">
                    <div className="w-full h-[450px] bg-[url('images/class.jpg')] bg-cover bg-center">

                    </div>
                    <div className="mt-10 p-5 text-xl">
                        Teacher Name Surname
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
    <ModalCustom size="w-[50%]" isOpen={modalIsOpenClass} title="Edit class">
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
                <Button onClick={closeModalClass} className="border p-4 border-gray-primary text-gray-primary mr-5">
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