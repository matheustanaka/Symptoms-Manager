import { useEffect, useState } from "react";
import { UserApi } from "../../services/UserApi";
import { IUser } from "../../types/UserType";
import { Container } from "./style";

export function Card() {
    const [users, setUser] = useState<IUser[]>([]);

    useEffect(() => {
        UserApi.get("/users")
        .then((response) => setUser(response.data))
        .catch((err) => {
            console.log("Evita dog " + err)
        })
    }, []);


    return(
        <Container>
            {users.map((user) => {
                return (
                    <div className="box-card">
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                    <p>{user.password}</p>
                    <p>medicines</p>
                    </div>
                );
            })}            
        </Container> 
    );
}