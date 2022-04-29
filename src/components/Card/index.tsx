import { useUsers } from "../../hooks/useUsers";
import { Container } from "./style";

export function Card() {

    const { users } = useUsers();
    // console.log(users);

    return(
        <Container>
            {users.map((user) => {
                return (
                    <div className="box-card">
                    <h2>{user?.name}</h2>
                    <h3>{user?.email}</h3>
                    <p>{user?.symptoms}</p>
                    </div>
                );
            })}            
        </Container> 
    );
}