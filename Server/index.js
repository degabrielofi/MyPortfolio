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
      subject: "[DeGabrielDEV] - New message from your Portfólio",
      html: [
        `<section style="font-family: "Brush Script MT", "Comic Sans MS", Arial, sans-serif; font-size: 1rem; background-color: #ebf0f6; ">`,
        `<div style="display: flex; padding-top: 1rem;  margin: auto; justify-content: center; width: 100%;">`,
        `<img style="margin: auto;" width="25%" src="https://i.imgur.com/nHQAGAX.png" alt="Back">`,
        `</div>`,
        `<section style="background: linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%); border-radius: 1rem; width: 75%; display: flex; margin: auto; margin-top: 1rem; padding: 2rem;">`,
        `<div style="margin: auto;">`,
        `<img style="border-radius: 0.5rem" width="100%" src="https://i.imgur.com/2vzn6Ji.png" alt="Backs">`,
        `<h4 style="text-align: center;">Assunto: <strong style="color #880c85", font-size: 120%>" ${subject} "</strong></h4>`,
        `<br>`,
        `<p style="font-style: italic; font-weight: 700; text-align: center; font-size: 120%">❝ ${comment} ❞</p>`,
        `<br>`,
        `<div>`,
        `<h4>Telefone: <strong style="color: #880c85">${phone}</strong></h4>`,
        `<h4>Email Para Contato: <strong style="color: #880c85">${email}</strong></h4>`,
        `<h4>Está mensagem foi enviada por: <strong style="color:#880c85">${name}</strong></h4>`,
        `</div>`,
        `</div>`,
        `</section>`,
        `<div style="display: flex; padding-top: 1rem; padding-bottom: 1rem; margin: auto; width: 100%;">`,
        `<h6 style="margin: auto;">Sistema desenvolvido por: <a style="color: #24549c" href="https://degabrielofi.vercel.app">@degabrielofi_</a></h6>`,
        `<img style="margin: auto;" width="20%" src="https://i.imgur.com/DeC480Y.png" alt="Back">`,
        `</div>`,
        `</section>`,
      ].join("\n"),
    })
  );
});

app.listen(process.env.PORT || 5000, () => {
  console.log("The application is running!");
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
