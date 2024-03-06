import './TodoProfileCard.css'

function TodoProfileCard({name}){
    return (
        <div className="profileCard-container">
            <img src='./profilePic.jpg' alt='Profile Picture'/>
            <div>
                <h3 className="profileCard-title">Welcome!<i className="fa-solid fa-hand-peace"></i></h3>
                <h2 className="profileCard-name">{name}</h2>  
            </div>
        </div>
    )
}

export { TodoProfileCard}