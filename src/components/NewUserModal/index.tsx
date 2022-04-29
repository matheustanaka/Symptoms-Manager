import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { Container } from "./style";
import { useUsers } from "../../hooks/useUsers";


interface NewUserModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewUserModal({ isOpen, onRequestClose }: NewUserModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [symptoms, setSymptoms] = useState('');

    const { createUser } = useUsers();

    async function handleCreateNewUser(event: FormEvent) {
        
        event.preventDefault();
    
        await createUser ({
            name,
            email,
            symptoms
        });

        setName('');
        setEmail('');
        setSymptoms('');

        onRequestClose();
    }
    
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
           <button type="button" onClick={onRequestClose} className="react-modal-close">
               Close
           </button>

           <Container>
                <h2>Register Symptoms</h2>
                <input
                type="text"
                name="nome" 
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
                <button type="submit" onClick={handleCreateNewUser}>
                    Register
                </button>
           </Container>
        </Modal>
    )
}