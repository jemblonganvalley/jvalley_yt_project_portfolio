import React, { useState } from "react"
import { FiMenu } from "react-icons/fi"
import {Link} from "react-router-dom"

export default function ModalMenu(){

    const [show, setShow] = useState(false)

    const handleShowModal = ()=>{
        setShow(!show)
    }
 
    return (
        <>
            {show && (
                <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#212121]/90 fixed top-0 left-0 z-[200]">
                    
                    <Link to={'/biodata'} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Biodata
                    </Link>

                    <Link to={'/skill'} className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Skill
                    </Link>

                    <a href={'tel:+6281213655573'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        Contact
                    </a>

                    <a href={'https://linkedin.com/fadliselaz'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        linkedin
                    </a>

                    <a href={'https://github.com/fadliselaz'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        github
                    </a>

                    <a href={'https://stackblitz.com'} target="_blank" className="w-full h-16 flex justify-center items-center text-orange-400 font-bold" onClick={handleShowModal}>
                        stackblitz
                    </a>


                </div>
            )}
        
            <button className="w-[80px] h-[80px] bg-orange-400 text-gray-800 rounded-full fixed -bottom-4 -right-4 flex justify-center items-center z-[250]" onClick={handleShowModal}>
                <FiMenu />
            </button>
        </>
    )
}