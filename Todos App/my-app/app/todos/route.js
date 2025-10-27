import todos from '../../todos.json';
import { writeFile } from 'fs/promises'

export function GET() {
    return Response.json(todos);
}

export async function POST(req) {
    const todo = await req.json();
    console.log(`YEH text HA ${todo.text}`)

    const newTodo = {
        id: crypto.randomUUID(),
        text: todo.text,
        completed: false
    }

    todos.push(newTodo)

    await writeFile('todos.json', JSON.stringify(todos, null, 1), 'utf-8')

    return Response.json( newTodo,{status:201});
}

