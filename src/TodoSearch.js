import "./TodoSearch.css"

function TodoSearch(){
    return(
        <div>
        <input className="todoSearchInput" placeholder="Search..."/>
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    )
}

export {TodoSearch} 