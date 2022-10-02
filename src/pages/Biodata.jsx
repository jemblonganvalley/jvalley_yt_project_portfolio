import React from "react";
import BiodataCard from "../components/BiodataCard";
import Header from "../components/Header";
import { FiUser, FiHome, FiPhone, FiMail, FiLinkedin, FiMap, FiWifi, FiChevronRight } from "react-icons/fi"
import dataBio from "../constant/dataBio"
import ModalMenu from "../components/ModalMenu";

const handleIcon = (name)=>{

    switch(name){

        case "phone" : 
            return <FiPhone />

        case "email" : 
            return <FiMail />

        case "linkedin":
            return <FiLinkedin />

        case "map" :
            return <FiMap />

        case "web" : 
            return <FiWifi />

        default :
            return <FiChevronRight />

    }

}


export default function Biodata(){

    return (
        <div className="w-screen min-h-screen flex flex-col p-[30px] bg-[#212121] text-orange-400 overflow-hidden max-w-[500px] mx-auto">

            <Header title={'Biodata'} />

            <div className="mt-[50px] flex flex-col justify-center items-center relative">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" alt="" className="rounded-full w-[200px] h-[200px] object-cover" />

                <div className="w-[220px] h-[220px] border-[3px] border-orange-400 rounded-full border-dashed absolute"></div>
            </div>

            <div className="flex flex-col gap-10 mt-6 mb-[100px]">
                {dataBio.map((item)=>{
                    return (
                        <BiodataCard 
                            label={item.label} 
                            value={item.value} 
                            icons={item.icons && handleIcon(item.icons)} 
                            link={item.link} 
                            key={item.id}
                        />
                    )
                })}
            </div>

            <ModalMenu />
        </div>
    )
}