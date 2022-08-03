import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())

app.post('/contact', async (req, res) => {
    let { comment, email, name } = req.body

    return res.status(201).send(await transport.sendMail({
        from: 'Gabriel Silva | Portfólio',
        to: 'Gabriel Silva <contatodegabrielofi@gmail.com',
        subject: 'Uma nova mensagem vinda do seu portfólio acabou de chegar.',
        html: [
            `<section style="font-family: Arial, Helvetica, sans-serif; font-size: 1rem; background-color: #ebf0f6; ">`,
            `<div style="display: flex; padding-top: 1rem;  margin: auto; justify-content: center; width: 100%;">`,
            `<img style="margin: auto;" width="300px" src="https://i.imgur.com/7CESEd8.png" alt="Back">`,
            `</div>`,
            `<section style="background-color: #fff; border-radius: 1rem; width: 50%; display: flex; margin: auto; margin-top: 1rem; padding: 2rem;">`,
            `<div style=" margin: auto;">`,
            `<img style="border-radius: 0.5rem" width="100%" src="https://i.imgur.com/AbfpZBP.png" alt="Backs">`,
            `<h3 style="text-align: center; font-weight: 500;">Olhe a mensagem abaixo! 🎉</h3>`,
            `<br>`,
            `<p style="font-style: italic; font-weight: 600;">"${comment}"</p>`,
            `<br>`,
            `<div style="text-align: center;">`,
            `<h4>Está mensagem foi enviada por: <strong style="color:#24549c">${name}</strong></h4>`,
            `<h4>O Email de contato é: ${email}</h4>`,
            `</div>`,
            `</div>`,
            `</section>`,
            `<div style="display: flex; padding-top: 1rem; padding-bottom: 1rem; margin: auto; width: 100%;">`,
            `<h6 style="margin: auto;">Sistema desenvolvido por: <a style="text-decoration: none; color: #24549c" href="https://degabrielofi-links.vercel.app">@degabrielofi_</a></h6>`,
            `</div>`,
            `</section>`
        ].join('\n')
    }))

})

app.listen(3333, () => {

    console.log('HTTP server running!')

})

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "contatodegabrielofi@gmail.com",
        pass: "humsekvacwufjkrk"
    }
});