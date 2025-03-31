import { Image } from "antd"
import LembreImage from './LEMBRE-LEMBRE.jpg'
import BaliImage from './BALI.jpg'
import DTimage from './DT-MONEY.jpg'
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"



export function Projects(){
      const targetRef = useRef(null);
      const { scrollYProgress } = useScroll({
        target: targetRef,
      });

      const x = useTransform(scrollYProgress, [0, 1], ["10%", "-50%"]);
    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[url('./bg-desktop4.jpg')] bg-cover">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-8 px-6">
                <a href="https://lembre-lembre-app.vercel.app/fotos/" className="flex flex-col bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 max-w-[450px]  max-md:max-w-[330px]">
                    <Image src={LembreImage.src} alt="Projeto de Matheus" className="object-cover" width={450} height={250} preview={false}/>
                    <div className="p-4 max-w-[450px]">
                    <h3 className="text-xl font-semibold text-cyan-300">Lembre-Lembre</h3>
                    <p className="text-gray-400 text-sm mt-2">Complete photo and event management and organization system, developed with Next.js, Prisma, and Tailwind CSS.</p>
                    </div>
                </a>
                <a href="https://baliarquitetura.com/" className="flex flex-col bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 max-w-[450px] max-md:max-w-[330px]">
                    <Image src={BaliImage.src} alt="Projeto de Matheus" className="object-cover" width={450} height={250} preview={false}/>
                    <div className="p-4 max-w-[450px]">
                    <h3 className="text-xl font-semibold text-cyan-300">BALI ARQUITETURA</h3>
                    <p className="text-gray-400 text-sm mt-2">Platform that displays information and projects carried out by BALI Architecture, a project using Next.js.</p>
                    </div>
                </a>
                <a href="https://dt-money-mv.vercel.app/" className="flex flex-col bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 max-w-[450px]  max-md:max-w-[330px]">
                    <Image src={DTimage.src} alt="Projeto de Matheus" className="object-cover" width={450} height={250} preview={false}/>
                    <div className="p-4 max-w-[450px]">
                    <h3 className="text-xl font-semibold text-cyan-300">DT-Money</h3>
                    <p className="text-gray-400 text-sm mt-2">Simple financial organization system, developed with React, Node, and Prisma.</p>
                    </div>
                </a>
                {/* <a className="flex flex-col bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 max-w-[450px]">
                    <Image src={matheusfoto.src} alt="Projeto de Matheus" className="object-cover" width={450} height={250} preview={false}/>
                    <div className="p-4 max-w-[450px]">
                    <h3 className="text-xl font-semibold text-cyan-300">Lembre-Lembre</h3>
                    <p className="text-gray-400 text-sm mt-2">Sistema completo de gestão e organização de fotos e eventos, desenvolvido com Next.js, Prisma e Tailwind CSS.</p>
                    </div>
                </a> */}
            </motion.div>
        </div>
    </section>
    )
}