import { useState } from "react";
import { DeleteIcon } from "../DeleteIcon";
import { EditIcon } from "../EditIcon";
import { EditUserModal } from "../EditUserModal";
import { Container } from "./style";

interface UserProps {
    user: {
        _id?: string,
        name: string,
        email: string,
        symptoms: string,
    }
}

export function Card(props: UserProps) {

    const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);

    function handleOpenEditUserModal() {
        setIsEditUserModalOpen(true);
    }

    function handleCloseEditUserModal() {
        setIsEditUserModalOpen(false)
    }

    return (
        <Container>
            <div className="card-box">
                <div className="icons">
                    <EditIcon onOpenEditUserModal={handleOpenEditUserModal} />
                    <EditUserModal isOpen={isEditUserModalOpen} onRequestClose={handleCloseEditUserModal} />
                    <DeleteIcon user={props.user} />
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