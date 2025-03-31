'use client'
import { Button } from "@/components/ui/button";
import { MessageCirclePlus } from "lucide-react";


export function Contact(){
    const phoneNumber = "5583998594656"; // Seu número com DDD e DDI sem espaços ou símbolos
    const message = "Hi, I would like to know more about your service."; // Mensagem pronta
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
          const response = await fetch("/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name: e.target.name.value, email: e.target.email.value, message: e.target.message.value }),
          });
      
          if (response.ok) {
            alert("E-mail enviado com sucesso!");
          } else {
            alert("Erro ao enviar e-mail.");
          }
        } catch (error) {
          console.error("Erro ao enviar e-mail:", error);
        }
      };


    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#121214] p-4">
        <div className="w-full max-w-xl p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Contact.</h2>
          <p className="text-[#b3b3b3] mb-6">
            Get in touch or shoot me an email directly on <span className="text-white font-semibold">matheus.vinagre2@gmail.com</span>
          </p>
          
            <form className="space-y-4" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Name" 
              name='name'
              className="w-full p-3 bg-transparent border border-[#2a2a2e] rounded-lg text-white placeholder-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input 
              type="email" 
              placeholder="Email" 
              name='email'
              className="w-full p-3 bg-transparent border border-[#2a2a2e] rounded-lg text-white placeholder-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <textarea 
              placeholder="Message" 
              name='message'
              className="w-full p-3 bg-transparent border border-[#2a2a2e] rounded-lg text-white placeholder-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-gray-500 h-32"
            ></textarea>
            <div className="flex justify-between text-white">
                <Button 
                type="submit" 
                size='lg'
                variant="secondary"
                >
                Send Message
                </Button>
                <Button
                    type="button"
                    size='lg'
                    variant="link"
                    className="text-white"
                    onClick={() =>  window.open(whatsappLink, '_blank')}
                >
                <MessageCirclePlus />   
                Try WhatsApp
                </Button>
            </div>
            
          </form>
        </div>
      </div>
    )
}