import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/contact", async (req, res) => {
  let { comment, email, name, subject, phone } = req.body;

  return res.status(201).send(
    await transport.sendMail({
      from: { email },
      to: "Gabriel Silva <contatodegabrielofi@gmail.com",
      subject: "Uma nova mensagem vinda do seu portfólio acabou de chegar.",
      html: [
        `<section style="font-family: 'Brush Script MT', cursive; font-size: 1rem; background-color: #ebf0f6; ">`,
        `<div style="display: flex; padding-top: 1rem;  margin: auto; justify-content: center; width: 100%;">`,
        `<img style="margin: auto;" width="200px" src="https://i.imgur.com/nHQAGAX.png" alt="Back">`,
        `</div>`,
        `<section style="background-color: #fff; border-radius: 1rem; width: 75%; display: flex; margin: auto; margin-top: 1rem; padding: 2rem;">`,
        `<div style=" margin: auto;">`,
        `<img style="border-radius: 0.5rem" width="100%" src="https://i.imgur.com/2vzn6Ji.png" alt="Backs">`,
        `<h3 style="text-align: center; font-weight: 500;">Olhe a mensagem abaixo ⭣</h3>`,
        `<br>`,
        `<h4 style="font-style: italic; font-weight: 600;">Assunto: "${subject}"</h4>`,
        `<p style="font-style: italic; font-weight: 600;">"${comment}"</p>`,
        `<br>`,
        `<div style="text-align: center;">`,
        `<h5>O Email de contato é: ${email}</h5>`,
        `<h5>Telefone para contato: ${phone}</h5>`,
        `<h6>Está mensagem foi enviada por: <strong style="color:#880c85">${name}</strong></h6>`,
        `</div>`,
        `</div>`,
        `</section>`,
        `<div style="display: flex; padding-top: 1rem; padding-bottom: 1rem; margin: auto; width: 100%;">`,
        `<h6 style="margin: auto;">Sistema desenvolvido por: <a style="text-decoration: none; color: #24549c" href="https://degabrielofi.vercel.app">@degabrielofi_</a></h6>`,
        `<img style="margin: auto;" width="300px" src="https://i.imgur.com/DeC480Y.png" alt="Back">`,
        `</div>`,
        `</section>`,
      ].join("\n"),
    })
  );
});

app.listen(process.env.PORT || 5000, () => {
  console.log("O servidor foi ligado com sucesso!");
});

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.USER,
    pass: process.env.USER_KEY,
  },
});
