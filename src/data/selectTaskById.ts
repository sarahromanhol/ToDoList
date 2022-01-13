import connection from "../connection";

export default async function selectTaskById(
    id: string
) {
    const result = await connection.raw(`
    SELECT tasks.*, users.nickname FROM to_do_list_task AS tasks
    JOIN to_do_list_users AS users
    ON author_id = users.id
    WHERE tasks.id = '${id}';
    `)

    return result[0][0]
}