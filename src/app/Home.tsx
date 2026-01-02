'use client'
import { motion } from "framer-motion";
import {Image } from "antd";
import { Exo_2 } from "next/font/google";
import matheusfoto from './matheusfoto2.png'
import { useState, useEffect } from "react";

const NameFont = Exo_2({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const texts = ["WEB DEVELOPER", "SOFTWARE ENGINEER"]

export function First(){

  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = texts[index];

    if (isDeleting) {
      // Apagando texto
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }, 100);
    } else {
      // Escrevendo texto
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000); // Espera 1s antes de apagar
        }
      }, 150);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, texts]);

    return(
        <main className="flex flex-col gap-8  items-center h-screen w-screen bg-[url('./bg-desktop2.jpg')] bg-cover overflow-x-visible">
            <div className="flex gap-4 items-center justify-around w-full h-full max-md:flex-col-reverse max-md:justify-center">
                <div className="flex flex-col gap-2 rounded-xl bg-opacity-10 bg-gray-500 p-6 shadow-xl hover:bg-opacity-20 duration-700"> 
                  <span className={`font-Exo text-5xl ${NameFont.className} max-md:text-3xl`}>MATHEUS VINAGRE</span>
                  <motion.span key={displayText}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }} 
                    className={`font-Exo text-4xl text-green-500 ${NameFont.className}  max-md:text-xl`}>{displayText}<span className="text-zinc-400">|</span></motion.span>
                    
                </div>
                <motion.div initial={{scale: 0}} animate={{scale: 1, transition:{duration: 0.5, damping: '1'}}}>  
                  <Image src={matheusfoto.src} alt='Matheus Vinagre Foto Perfil' height={250} preview={false} className="rounded-full object-cover border border-cyan-600 max-md:h-[180px]]"/>
                </motion.div>
              </div>
        </main>
    )
}
