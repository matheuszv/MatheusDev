'use client'
import { Poppins , IBM_Plex_Mono } from 'next/font/google'
import { Image } from 'antd'
import { Laptop } from 'lucide-react'
import  { motion, useScroll, useTransform } from "framer-motion";
import { Button } from '../components/ui/button'
import { Biografy } from "./bio";
import { Projects } from "./projects";
import { useRef } from "react";
import { First } from './Home';
import { Contact } from './contact';
import github from './assets/github.png'
import linkedin from './assets/linkedin.png'
import instagram from './assets/Instagram.png'
import youtube from './assets/youtube.png'
import { ReactLenis } from 'lenis/react'

const NaviFont = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

const IBM = IBM_Plex_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  
    const scrollToBio = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    };
    const scrollToHome = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    


  return (
    <ReactLenis root>
    <div className='flex flex-col'>
        <nav className={`flex mt-2 justify-between rounded-[40px] items-center h-12 w-2/3 bg-black bg-opacity-60 px-8 ${NaviFont.className} z-50 fixed left-1/2 -translate-x-1/2 border-cyan-900 border max-md:w-3/4 max-md:px-3`}>
            <span className="text-white flex gap-3 font-medium max-md:hidden">
                <Laptop /> Matheus Vinagre
            </span>
            <div className="flex gap-5 text-white max-md:text-xs max-md:gap-3">
                <a className="cursor-pointer hover:text-green-500 duration-[350ms]" onClick={scrollToHome}>
                  HOME
                </a>
                |
                <a className="cursor-pointer hover:text-green-500 duration-[350ms]" onClick={scrollToBio}>
                  BIO
                </a>
                |
                <a className="cursor-pointer hover:text-green-500 duration-[350ms]" onClick={() => {window.scrollTo({top: window.innerHeight*2, behavior: "smooth",})}}>
                  PROJECTS
                </a>
                |
                <a className="cursor-pointer hover:text-green-500 duration-[350ms]" onClick={() => {window.scrollTo({top: window.innerHeight*5, behavior: "smooth",})}}>
                  CONTACT
                </a>
              </div>
                <Button variant="outline" className="rounded-3xl text-xs bg-cyan-950 text-white hover:bg-zinc-300 hover:text-zinc-800 duration-500 max-md:hidden" onClick={()=> window.open("https://www.linkedin.com/in/matheuszv/", "_blank")}>Let&apos;s Connect</Button>
          </nav>

      <section ref={targetRef} className="relative h-[200vh] bg-neutral-900 ">
        <div className="sticky top-0 flex h-screen items-left overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <First />
            <Biografy />
          </motion.div>
        </div>
      </section>
      
      <Projects />
      <Contact />

      <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-around w-screen bg-[#0f0f14] border-t border-zinc-700 p-12">
        <div className='flex flex-col gap-4'>
          <span className={`text-white text-xl italic ${IBM.style}`}>© Matheus Vinagre</span>
          <span className={`text-zinc-300 text-sm w-[60%] ${IBM.style} max-md:w-[100%]`}>Never stop learning! <br />Every challenge is a lesson, every failure a step forward. Growth comes from curiosity and persistence.</span>
        </div>
        <div className='flex gap-6 items-center justify-center border-b border-zinc-700 pb-6 max-md:pt-4'>
            <a href="https://github.com/matheuszv" target='_blank' className='hover:bg-white hover:bg-opacity-10 rounded-[50%] p-4 duration-300'>
              <Image preview={false} src={github.src} alt="github-logo" width={27} />
            </a>
            <a href="https://www.linkedin.com/in/matheuszv/" target='_blank' className='hover:bg-white hover:bg-opacity-10 rounded-[50%] p-4 duration-300'>
              <Image preview={false} src={linkedin.src} alt="github-logo" width={25} />
            </a>
            <a href="https://www.instagram.com/matheusz_v/" target='_blank' className='hover:bg-white hover:bg-opacity-10 rounded-[50%] p-4 duration-300'>
              <Image preview={false} src={instagram.src} alt="github-logo" width={28} />
            </a>
            <a href="https://www.youtube.com/@zSpiderMito" target='_blank' className='hover:bg-white hover:bg-opacity-10 rounded-[50%] p-4 duration-300'>
              <Image preview={false} src={youtube.src} alt="github-logo" width={32} />
            </a>
        </div>
          
      </footer>
    </div>
    
  </ReactLenis>
  );
}

