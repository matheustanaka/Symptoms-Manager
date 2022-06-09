import { Container } from "./style";
import { Card } from "../Card";
import { useUsers } from "../../hooks/useUsers";

export function Dashboard() {
    const { users } = useUsers();
    return (
        <Container>
            {users.map((user) => (
                <Card key={user._id} user={user} />
            ))}
        </Container>
    );
}