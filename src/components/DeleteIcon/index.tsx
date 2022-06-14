import { TiDelete } from "@react-icons/all-files/ti/TiDelete";
import { FormEvent } from "react";
import { useUsers } from "../../hooks/useUsers";

interface UserProps {
    user: {
        _id?: string,
        name: string,
        email: string,
        symptoms: string,
    }
}

export const DeleteIcon = (props: UserProps) => {

    const { deleteUser } = useUsers();

    const handleDeleteUser = async (event: FormEvent) => {
        event.preventDefault();
        await deleteUser(props);
    }

    return (
        <TiDelete size={25}
            color="#F97474"
            onClick={handleDeleteUser}
        />
    )
}