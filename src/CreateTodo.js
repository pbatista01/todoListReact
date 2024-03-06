import { CreateTodoButton } from './CreateTodoButton'
import './CreateTodo.css'

function CreateTodo() {
    return (
        <div className="createTodoContainer">
            <h1 className="createContainer-title">Create new task</h1>
            <div className="container-input">
                <input className="createContainer-input" placeholder="Compose a love letter to your ex...traordinary pet" />
                < CreateTodoButton />
            </div>
        </div>
    );
}

export { CreateTodo }