import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors());
const PORT = 3001;

app.get('/funcionarios', async(req, res) => {
    const funcionarios = await prisma.funcionario.findMany()
    res.status(200).json(funcionarios)
})

app.put('/funcionarios/:id', async (req, res) => {
    await prisma.funcionario.update({
        where: {
            id: req.params.id
        },
        data: {
            nome: req.body.nome,
            idade: req.body.idade,
            cargo: req.body.cargo,
            email: req.body.email
        }
    })

    res.status(201).json(req.body)
})

app.delete('/funcionarios/:id', async(req, res) => {
    await prisma.funcionario.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Funcionário deletado do sistema!'})
})

app.post('/funcionarios', async (req, res) => {
    await prisma.funcionario.create({
        data: {
            nome: req.body.nome,
            idade: req.body.idade,
            cargo: req.body.cargo,
            email: req.body.email
        }
    })

    res.status(201).json(req.body)
})

app.get('/', (req, res) => {
    res.send("API rodando")
})

app.listen(PORT, () => {
    console.log(`API rodando com sucesso na porta ${PORT}`)
})