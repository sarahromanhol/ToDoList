import { Request, Response } from "express";
import updateUser from "../data/updateUser";


export default async function editUser(
    req: Request,
    res: Response
) {
    try {

        const { id } = req.params
        const { name, nickname, email } = req.body


        // validar entradas da requisição

        if (name === '' || nickname === '' || email === '') {
            res.status(400).send("Nenhum dos campos pode estar em branco")
        }


        if (!name && !nickname && !email) {
            res.status(400).send("Escolha ao menos um valor para alterar")
        }

        // consultar o banco de dados

        await updateUser(
            id,
            name,
            nickname,
            email
        )


        // validar retorno do banco de dados

        // enviar resposta

        res.status(200).send("Usuário atualizado")


    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}