import './TodoCounter.css'

function TodoCounter({ completed, totalTodos }) {
    return (
        <div>
            <h1 className="todoCounter-title">
                Your Tasks
            </h1>
            <h2 className="todoCounter-subtitle">
                Completed <span>{completed}</span> of <span>{totalTodos}</span>
            </h2>
        </div>

    );
}

export { TodoCounter }