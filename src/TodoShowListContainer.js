import { TodoCounter } from "./TodoCounter"
import {TodoItem} from "./TodoItem"
import { TodoSearch} from "./TodoSearch"
import { TodoList} from "./TodoList"
import "./TodoShowListContainer.css"

const defaultTodos=[
    {text: "Invent a dance move and teach your pet", completed:true},
    {text: "Chat with a houseplant about world affairs", completed:true},
    {text: "Break your high-five record in 60 seconds", completed:true},
    {text: "Chat with a rubber duck for advice.", completed:false},
    {text: "Have a staring contest with a mirror", completed:false},
  ]

function TodoShowListContainer(){
    return(
        <div className="todoShowContainer">
        <TodoCounter completed={16} totalTodos={20} />
      <TodoSearch />
      <TodoList>
         {defaultTodos.map(todo=>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
         ))}
      </TodoList>
      </div>
    )
}

export {TodoShowListContainer}