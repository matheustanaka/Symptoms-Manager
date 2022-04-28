import { FormEvent, useEffect, useState } from "react";
import { UserApi } from "../../services/UserApi";
import Modal from "react-modal";
import { Container } from "./style";


interface NewUserModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewUserModal({ isOpen, onRequestClose }: NewUserModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [symptoms, setSympotms] = useState('');

    async function handleCreateNewUser(event: FormEvent) {
        
        event.preventDefault();
    
        const newUser = ({
            name,
            email,
            symptoms,
        });

        await UserApi.post("/users", newUser);
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
                onChange={event => setSympotms(event.target.value)}
                />
                <button type="submit" onClick={handleCreateNewUser}>
                    Register
                </button>
           </Container>
        </Modal>
    )
}