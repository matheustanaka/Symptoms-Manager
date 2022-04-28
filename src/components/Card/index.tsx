import { useEffect, useState } from "react";
import { UserApi } from "../../services/UserApi";
import { UserType } from "../../types/UserType";
import { Container } from "./style";

export function Card() {
    const [users, setUsers] = useState<UserType[]>([]);

    const fetchUsers = async () => {
        try {
            const { data } = await UserApi.get("/users");

            setUsers(data);
        }
        catch (err) {
            console.log({ err });
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);


    return(
        <Container>
            {users.map((user) => {
                return (
                    <div className="box-card" key={user.id}>
                    <h2>{user.name}</h2>
                    <h3>{user.email}</h3>
                    <p>{user.symptoms}</p>
                    <p>medicines</p>
                    </div>
                );
            })}            
        </Container> 
    );
}