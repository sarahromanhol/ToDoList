import { Request, Response } from "express";
import insertTask from "../data/insertTask";
import moment from 'moment'

export default async function createTask(
    req: Request,
    res: Response
) {
    try {
        const { title, description, deadline, authorId } = req.body

        //validando os campos passados pelo user
        if (!title || !description || !deadline || !authorId) {
            res.status(400).send('Preencha todos os campos')
        }


        const dateDiff: number = moment(deadline, 'YYYY/MM/DD').unix() - moment().unix()
        

        if (dateDiff <= 0) {
            res.status(400).send('"deadline" deve ser uma data futura')

            return
        }

        

        const id: string = Date.now() + Math.random().toString()

        await insertTask(
            id,
            title,
            description,
            deadline,
            authorId
        )

        res.status(200).send({
            message: "Tarefa criada com sucesso!",
            id
        })

    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}