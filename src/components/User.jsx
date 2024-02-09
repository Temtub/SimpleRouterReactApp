
// import { Link } from "react-router-dom"
import { getUser, getUserName } from "../assets/data/data_user"
import { useParams } from 'react-router-dom';

//Para hacer un link sin la clase link
// import { useNavigate } from "react-router-dom";


export default function User(){
    //Se utilizaria de la siguiente forma y cuando se ejecute te enviará a esa url
    // const navigate = useNavigate()
    // navigate("/")

    let params  = useParams();   
    //para buscar por id en vez de por name
    // const user = getUser(parseInt(params.id))
    const user = getUserName(params.name)

    return(

        <article className="userArticle">
            <img className="img" src={user.image} alt="" />
            <p>{user.first}</p>
            <p>{user.last}</p>
            <p>{user.email}</p>
        </article>
    )
}
