import express from "express";
const app = express()
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('API!')
})

app.listen(PORT, () => {
    console.log(`API rodando com sucesso na porta ${PORT}`)
})