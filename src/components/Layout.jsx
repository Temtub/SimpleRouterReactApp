
import { getUsers } from "../assets/data/data_user"

import { Outlet, Link } from 'react-router-dom';

export default function Layout(){

    const users = getUsers()

    return(

        <div className="cont">
            
            <div>

                <h2 className="componentTitle">Layout: list of users</h2>

                <article className="d-flex flex-column list">
                    {users.map((user) => (
                        // <Link key={user.id} to={`/users/${user.id}`}> {user.first} </Link>
                        <Link key={user.id} to={`/users/${user.first}`}> {user.first} </Link>
                        ))
                    }   
                </article>
            </div>

            <main>
                <Link to="/" >Ir a home</Link>
                <Outlet></Outlet>
            </main>
        </div>
    )
}