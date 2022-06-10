import { useUsers } from "../../hooks/useUsers";

import { TiDelete } from "@react-icons/all-files/ti/TiDelete";
import { FiEdit } from "@react-icons/all-files/fi/FiEdit"
import { Container } from "./style";
import { FormEvent } from "react";

interface UserProps {
    user: {
        _id?: string,
        name: string,
        email: string,
        symptoms: string,
    }
}

export function Card(props: UserProps) {

    const { deleteUser } = useUsers();

    const handleDeleteUser = async (event: FormEvent) => {
        event.preventDefault();
        await deleteUser(props);
    }

    return (
        <Container>
            <div className="card-box">
                <div className="icons">
                    <FiEdit size={23}
                        color="#00a1ff"
                    />
                    <TiDelete size={25}
                        color="#F97474"
                        onClick={handleDeleteUser}
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