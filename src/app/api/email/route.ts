import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export async function POST(req: NextRequest) {
    const body = await req.json();

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Novo formulário enviado!",
        text: `Nome: ${body.name}\nEmail: ${body.email}\nMensagem: ${body.message}`,
    };

    console.log(process.env.EMAIL_USER)
    console.log(`Nome: ${body.name}\nEmail: ${body.email}\nMensagem: ${body.message}`)

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Mensagem enviada com sucesso!" }, { status: 200 });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json({ message: JSON.stringify(error) }, { status: 500 });
  }
}
