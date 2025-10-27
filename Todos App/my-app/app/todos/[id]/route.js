import todos from '../../../todos.json'
import { writeFile } from 'fs/promises'

export async function GET(req, { params }) {
    const { id } = await params;

    const todo = todos.find((data) => parseInt(id) === data.id);
    if (!todo) {
        return Response.json({ message: "TODOS NOT FOUND!" }, { status: 404 })
    }
    return Response.json(todo);


}

export async function PUT(req, { params }) {
    const editTodoData = await req.json();
    const { id } = await params;


    const todoIndex = todos.findIndex(t => t.id == id);

    const todo = todos[todoIndex];

    if (editTodoData.id) return Response.json({ error: "Changing ID not allowed" }, { status: 403 })


    const editedTodo = { ...todo, ...editTodoData };

    todos[todoIndex] = editedTodo;

    await writeFile("todos.json", JSON.stringify(todos, null, 1))

    return Response.json(editTodoData)
}

export async function DELETE(req, { params }) {
    const { id } = await params;

    const todoIndex = todos.findIndex(t => t.id == id);
    console.log('Params ID', id);
    console.log('TodoIndex', todoIndex)

    if (todoIndex != -1) {
        todos.splice(todoIndex, 1);
        await writeFile("todos.json", JSON.stringify(todos, null, 1))
        return Response.json({ message: "Todo Deleted" })
    }
    
    return Response.json({ error: "No Todo To Delete Delete" },{status:404})

}