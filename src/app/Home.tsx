import { motion } from "framer-motion";
import {Image } from "antd";
import { Exo_2 } from "next/font/google";
import matheusfoto from './matheus.jpg'


const NameFont = Exo_2({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})


export function First(){
    return(
        <main className="flex flex-col gap-8  items-center h-screen w-screen bg-[url('./bg-desktop2.jpg')] bg-cover overflow-x-visible">
            <div className="flex gap-4 items-center justify-around w-full h-full max-md:flex-col-reverse max-md:justify-center">
                <div className="flex flex-col gap-2 rounded-xl bg-opacity-10 bg-gray-500 p-6 shadow-xl hover:bg-opacity-20 duration-700"> 
                  <span className={`font-Exo text-5xl ${NameFont.className} max-md:text-3xl`}>MATHEUS VINAGRE</span>
                  <span className={`font-Exo text-4xl text-green-500 ${NameFont.className}  max-md:text-xl`}>WEB DEVELOPER</span>
                </div>
                <motion.div initial={{scale: 0}} animate={{scale: 1, transition:{duration: 0.5, damping: '1'}}}>  
                  <Image src={matheusfoto.src} alt='Matheus Vinagre Foto Perfil' height={250} preview={false} className="rounded-full object-cover border border-cyan-600 max-md:h-[180px]]"/>
                </motion.div>
              </div>
        </main>
    )
}