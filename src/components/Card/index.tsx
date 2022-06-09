
import { Container } from "./style";

interface UserProps {
    user: {
        name: string,
        email: string,
        symptoms: string,
    }
}

export function Card(props: UserProps) {
    return (
        <Container>
            <div className="card-box">
                <h2>{props.user.name}</h2>
                <h3>{props.user.email}</h3>
                <p>{props.user.symptoms}</p>
            </div>
        </Container>
    );
}