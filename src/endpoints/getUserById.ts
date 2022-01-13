import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";


export default async function getUserById(
    req: Request,
    res: Response
) {
    try {

        const { id } = req.params


        // validar entradas da requisição

        // consultar o banco de dados

        const user = await selectUserById(id)

        // validar retorno do banco de dados

        if (!user) {
            res.status(404).send("Usuário não encontrado")
        }

        // enviar resposta

        res.status(200).send({
            id: user.id,
            nickname: user.nickname
        })


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}