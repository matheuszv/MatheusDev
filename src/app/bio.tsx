import { motion } from "framer-motion";
import { Image } from "antd";
import matheusfoto from './matheusfoto2.jpg'

export function Biografy(){
 return(
    <div id="Bio" className="flex bg-[url('./bg-desktop3.jpg')] bg-cover text-white p-10 shadow-lg justify-center items-center py-12 h-screen w-screen overflow-hidden">
        {/* Imagem */}
        <motion.div className="w-1/3 flex justify-center max-md:hidden" initial={{opacity: 0, x: -200}} whileInView={{opacity:1, x:0, transition:{duration: 1}}} >
          <Image
            src={matheusfoto.src}
            alt="Profile"
            height={400}
            width={250}
            className="w-48 h-64 object-cover rounded-lg border-4 border-cyan-600"
            preview={false}
          />
        </motion.div>

        {/* Informações */}
        <div className="w-2/5 pl-8 py-12 max-md:p-1 max-md:w-full">
          <motion.h2 className="text-3xl font-bold text-cyan-300" initial={{opacity: 0, y:50}} whileInView={{opacity:1, y:0, transition:{duration: 0.5, delay: 0.3}}}>Biography</motion.h2>
          <motion.p className="text-gray-300 mt-2" initial={{opacity: 0, x:50}} whileInView={{opacity:1, x:0, transition:{duration: 0.5, delay: 0.6}}}>
          I am a full-stack developer with a focus on front-end development, specializing in React, Next.js, and Tailwind CSS. 
          I have experience in creating modern, and responsive interfaces, always working to deliver elegant and efficient solutions.
          Actually, I am studing Computer Science at UFPB, and I always do my best to help the society.
          </motion.p>

          <motion.div className="flex justify-between gap-4 mt-4 text-sm pr-12 max-md:hidden" initial={{opacity: 0, x:100}} whileInView={{opacity:1, x:0, transition:{duration: 1, delay: 0.5}}}>
            <div className="text-gray-300">
              <p><strong>Email:</strong> matheus.vinagre2@gmail.com</p>
              <p><strong>Age:</strong> 22 Yr</p>
              <p><strong>Phone:</strong> +55 (83) 99859-4656</p>
            </div>
            <div className="text-gray-300">
              <p><strong>Residence:</strong> Brazil</p>
              <p><strong>Address:</strong> Paraíba, Brazil</p>
              <p><strong>Freelance:</strong> Available</p>
            </div>
          </motion.div>

          <div className="flex gap-12 items-center mt-6 text-cyan-300">
            <div className="text-center">
              <p className="text-2xl font-bold">3+</p>
              <p className="text-sm">Years of Dev  Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">A lot of</p>
              <p className="text-sm">Happy Customers</p>
            </div>
          </div>

          <motion.div  className="mt-6 cursor-pointer" initial={{opacity: 0, scale: 1}} whileInView={{opacity:1, transition:{duration: 1, delay: 0.5}}} whileHover={{scaleY: 1.08, transition:{duration: 0.4}}}>
            <a download href="./matheusEN.pdf" className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-500 duration-300">
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
 )
}