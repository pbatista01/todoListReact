import "./TodoItem.css"

function TodoItem(props){
    return(
        <li className="listItem">
            <p>{props.text}</p>
            <span><i className="fa-solid fa-check"></i></span>
        </li>
    );
}

export { TodoItem }

