import Modal from 'react-modal'

import React from 'react'
Modal.setAppElement('#root')


const ModalCustom = (props) => {

    const [isOpen = props.isOpen, setIsOpen] = React.useState();
    const closeModal = () => {
        setIsOpen(false)
    }

    const size = props.size || "w-[50%] h-[70%]"

    return (
        <Modal isOpen={isOpen} className={"modal flex justify-center items-center w-full h-full bg-black bg-opacity-25 " + props.className}>
            <div className={size + " rounded-lg bg-white h-min flex flex-col"}>
                <div className="modal-navigation flex flex-row p-8 justify-between items-center">
                    <div className="text-3xl">{props.title}</div>
                    <button onClick={closeModal}>X</button>
                </div>
                <div className="p-8 pt-0 h-full">
                   {
                    props.children
                   }
                </div>
            </div>
        </Modal>
    )
}

export default ModalCustom;