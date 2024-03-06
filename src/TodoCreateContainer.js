import './TodoCreateContainer.css'
import { TodoProfileCard} from './TodoProfileCard'
import { CreateTodo } from "./CreateTodo"

function TodoCreateContainer(){
    return (
        
        <div className="createContainer">
            <TodoProfileCard name="Estefanie Peña"/>
            <CreateTodo/>
            <img />
        </div>
    )
}

export {TodoCreateContainer}