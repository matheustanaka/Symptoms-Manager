import { FormEvent, useState } from "react";
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
    const [password, setPassword] = useState('');

    function handleCreateNewUser(event: FormEvent) {
        
        event.preventDefault();
    
        const newUser = ({
            name,
            email,
            password,
        });

        UserApi.post("/users", newUser);
    }
    
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
           <button type="button" onClick={onRequestClose} className="react-modal-close">
               Fechar
           </button>

           <Container onSubmit={handleCreateNewUser}>
                <h2>Cadastrar Usuário</h2>
                <input
                type="text"
                name="nome" 
                placeholder="Nome" 
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
                name="senha" 
                placeholder="Senha" 
                value={password} 
                onChange={event => setPassword(event.target.value)}
                />
                <button type="submit">
                    Cadastrar
                </button>
           </Container>
        </Modal>
    )
}