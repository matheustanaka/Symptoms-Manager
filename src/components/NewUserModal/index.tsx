import Modal from "react-modal";
import { Container } from "./style";


interface NewUserModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewUserModal({ isOpen, onRequestClose }: NewUserModalProps) {
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

           <Container>
                <h2>Cadastrar Usuário</h2>
                <input placeholder="Nome" />
                <input placeholder="Email" />
                <input placeholder="Senha" />
                <button type="submit">
                    Cadastrar
                </button>
           </Container>
        </Modal>
    )
}