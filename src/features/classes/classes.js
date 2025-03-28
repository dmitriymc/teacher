import {Link} from 'react-router-dom'
import Card from './components/card'

export default function Classes(){

    const array = [
        {
            img: '',
            title: 'Scratch',
            description: 'Test',
            teacher: 'Teacher',
        },
        {
            img: '',
            title: 'Roblox',
            description: 'Test',
            teacher: 'Teacher',
        },
        {
            img: '',
            title: 'Scratch',
            description: 'Test',
            teacher: 'Teacher',
        },
        {
            img: '',
            title: 'Roblox',
            description: 'Test',
            teacher: 'Teacher',
        },
        {
            img: '',
            title: 'Scratch',
            description: 'Test',
            teacher: 'Teacher',
        },
        {
            img: '',
            title: 'Roblox',
            description: 'Test',
            teacher: 'Teacher',
        },   {
            img: '',
            title: 'Scratch',
            description: 'Test',
            teacher: 'Teacher',
        },
        {
            img: '',
            title: 'Roblox',
            description: 'Test',
            teacher: 'Teacher',
        },
        {
            img: '',
            title: 'Scratch',
            description: 'Test',
            teacher: 'Teacher',
        },
        {
            img: '',
            title: 'Roblox',
            description: 'Test',
            teacher: 'Teacher',
        },
    ]

    return (
        <div>
            {/* <div><span>List</span><span>Grid</span></div> */}
            <div className="list flex flex-row items-center gap-10 flex-wrap">
            {
                array.map((item, index) => <Card item={item} />)
            }
            </div>
            
        </div>
    )
}