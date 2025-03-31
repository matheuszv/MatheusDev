import type { Metadata } from "next";
import ico from './pngegg.ico'
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Portfólio",
  description: "Portfólio de Matheus Vinagre – Desenvolvedor Full-Stack. Especializado em criar experiências digitais com tecnologias modernas, este site reúne meus projetos, habilidades e soluções para aplicações web eficientes e escaláveis.",
  icons: ico.src,
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="overflow-x-hidden"
      >
        {children}
      </body>
    </html>
  );
}
