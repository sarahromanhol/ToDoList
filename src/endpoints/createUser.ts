import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function createUser(
    req: Request, 
    res: Response
){
    try {

        const { name, nickname, email } = req.body


        // validar entradas da requisição
        if(!name || !nickname || !email) {
            res.status(400).send('Preencha os campos "name", "nickname" e "email"')
        }

        // consultar o banco de dados

        const id: string = Date.now() + Math.random().toString()

        await insertUser(
            id,
            name,
            nickname,
            email
        )

        // validar retorno do banco de dados

        // enviar resposta

        res.status(200).send("Usuário criado com sucesso!")


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}