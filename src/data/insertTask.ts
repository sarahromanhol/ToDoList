import connection from "../connection";

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
) {
    await connection.insert({
        id,
        title,
        description,
        deadline,
        author_id: authorId
    }).into('to_do_list_task')
}