import {Link} from 'react-router-dom'

const Card = ({item}) => {
    return (
        <div className="group relative overflow-hidden w-[450px] h-[250px]">
        <div className="group-hover:scale-150 absolute left-0 top-0 w-full h-full bg-[url('images/class.jpg')] bg-cover bg-center transition ease-in-out duration-300"></div>
        <Link to="1" className="flex flex-col relative w-full h-full p-6 bg-black bg-opacity-25">
        <div className="text-white font-bold text-3xl">{item.title}</div>
        <div className="text-slate-100">{item.description}</div>
        <div className="absolute bottom-5 text-white">{item.teacher}</div>
        </Link>
    </div>
    )
}

export default Card;