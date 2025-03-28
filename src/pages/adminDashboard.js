import {Link} from 'react-router-dom'
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function AdminDashboard(){

    const events = [
        {
            title: 'Class Scratch',
            start: new Date()
        },
        {
            title: 'Class Roblox',
            start: new Date()
        }
    ]

    return (
        <>
        <div>
            <div>
                <div className="flex flex-row flex-wrap gap-10 border-b pb-20">
                    <div className="p-20 pt-10 pb-10 justify-center items-center bg-slate-50 text-center rounded-lg">
                        <div className="text-2xl">Teachers</div>
                        <div className="text-4xl text-purple-primary">4</div>
                    </div>
                    <div className="p-20 pt-10 pb-10 justify-center items-center bg-slate-50 text-center rounded-lg">
                        <div className="text-2xl">Students</div>
                        <div className="text-4xl text-purple-primary">50</div>
                    </div>
                    <div className="p-20 pt-10 pb-10 justify-center items-center bg-slate-50 text-center rounded-lg">
                        <div className="text-2xl">Classes</div>
                        <div className="text-4xl text-purple-primary">10</div>
                    </div>
                    <div className="p-20 pt-10 pb-10 justify-center items-center bg-slate-50 text-center rounded-lg">
                        <div className="text-2xl">Lessons</div>
                        <div className="text-4xl text-purple-primary">100</div>
                    </div>
                </div>
                <div className="w-[50%] mt-10">
                    <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' weekends={false} events={events} />
                </div>
            </div>
            
        </div>
        </>
    )
}