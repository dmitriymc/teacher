const Button = ({className = '', children, onClick=''}) => {

    return (
        <button onClick={onClick} className={'btn flex p-2 pl-5 pr-5 rounded-lg hover:opacity-75 ' + className}>
            {children}
        </button>
    )
}

export default Button;