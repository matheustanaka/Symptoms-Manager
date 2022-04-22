import { Button, Container } from "./style";


interface ButtonProps {
    onOpenNewUserModal: () => void
}

export function ButtonCreate({ onOpenNewUserModal }: ButtonProps) {
    return (
        <Container>
            <Button onClick={onOpenNewUserModal}>
                Cria algo ae pae 😎
            </Button>
        </Container>

    );

}