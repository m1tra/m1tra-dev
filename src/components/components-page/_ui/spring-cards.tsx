
'use client'


import { ArrowRight } from "lucide";
import { motion } from "motion/react";
import { useState } from "react";

export interface ICardValue{
    color:string,
    title:string,
    subtitle:string,
    description:string,
}

export const Card = ({color, title, subtitle, description}:ICardValue) => {
    const [isVisible, setIsVisible] = useState(false);


    return(
        
        <motion.div 
            style={{
              backgroundImage: `url('/noise.svg'), linear-gradient(to bottom, ${color})`,
              backgroundBlendMode: "overlay",
            }}
            whileHover={{
                ...(isVisible===false && {
                    translateX: -8,
                    translateY: -8,
                    transition: { duration: 0.3 },
                })
                
            }
        }
            className={`group w-80 border-2 border-black  ${color}`}>     
            <motion.div 
                style={{
                  backgroundImage: `url('/noise.svg'), linear-gradient(to bottom, ${color})`,
                  backgroundBlendMode: "overlay",
                }}
                whileHover={{
                    ...(isVisible===false && {
                        translateX: -8,
                        translateY: -8,
                        transition: { duration: 0.3 },
                    })
                }}
                className={`-m-0.5 border-2 border-black  ${color}`}>      
                <motion.div 
                    style={{
                      backgroundImage: `url('/noise.svg'), linear-gradient(to bottom, ${color})`,
                      backgroundBlendMode: "overlay",
                    }}
                    whileHover={{
                        ...(isVisible===false && {
                            translateX: -8,
                            translateY: -8,
                            transition: { duration: 0.3 },
                        })
                    }}
                    className={`group relative -m-0.5 flex h-72 flex-col justify-between overflow-hidden border-2 border-black ${color} p-8`}>
                    <div className="relative">
                        <span className="absolute top-1/2 -translate-y-1/2 group group-hover:opacity-100 group-hover:translate-x-0 -translate-x-6 opacity-0 transition-all duration-300 ease-in-out ">{"->"}</span>
                        <h1 className="group group-hover:translate-x-8  transition-all duration-300 ease-in-out text-xl  font-semibold">{title}</h1>
                    </div>
                    <p className="group group-hover:-translate-y-10 transition-all duration-300 ease-in-out text-lg">{subtitle}</p>
                    <motion.button
                        onClick={()=>{setIsVisible(true)}}
                        className="absolute bottom-2 left-2 right-2 translate-y-full border-2 border-black bg-white px-4 py-2 text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 ">Подробнее</motion.button>
                </motion.div>
            </motion.div>
        </motion.div>
   
    )

}