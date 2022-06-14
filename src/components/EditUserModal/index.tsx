import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useUsers } from "../../hooks/useUsers";
import { Container } from "./style";

interface EditUserModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

interface UserProps {
    user: {
        _id?: string,
        name: string,
        email: string,
        symptoms: string,
    }
}

export const EditUserModal = ({ isOpen, onRequestClose }: EditUserModalProps, props: UserProps) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const { updateUser } = useUsers();

    async function handleUpdateUser(event: FormEvent) {
        event.preventDefault();

        await updateUser({
            user: {
                name,
                email,
                symptoms
            }
        })

        setName('');
        setEmail('');
        setSymptoms('');

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-edit-close">
                Close
            </button>

            <Container>
                <h2>Update Symptoms</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="text"
                    name="symptoms"
                    placeholder="Symptoms"
                    value={symptoms}
                    onChange={event => setSymptoms(event.target.value)}
                />
                <button type="submit" onClick={handleUpdateUser}>
                    Update
                </button>
            </Container>
        </Modal>
    )
}