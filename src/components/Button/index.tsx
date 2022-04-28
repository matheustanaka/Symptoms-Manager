import { Button, Container } from "./style";


interface ButtonProps {
    onOpenNewUserModal: () => void
}

export function ButtonCreate({ onOpenNewUserModal }: ButtonProps) {
    return (
        <Container>
            <Button onClick={onOpenNewUserModal}>
                Create Medical Records
            </Button>
        </Container>

    );

}