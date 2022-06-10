import { TiDelete } from "@react-icons/all-files/ti/TiDelete";
import { FiEdit } from "@react-icons/all-files/fi/FiEdit"
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
                <div className="icons">
                    <FiEdit size={23}
                        color="#00a1ff"
                    />
                    <TiDelete size={25}
                        color="#F97474"
                    />
                </div>
                <div className="user-info">
                    <h2>{props.user.name}</h2>
                    <h3>{props.user.email}</h3>
                    <p>{props.user.symptoms}</p>
                </div>
            </div>
        </Container>
    );
}